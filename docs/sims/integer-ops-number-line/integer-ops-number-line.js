// Integer Operations on the Number Line MicroSim
// Follows MicroSim standard rules (responsive width, fixed height, 2 regions)
// Learning objective: Visualize integer addition and subtraction as movements on the number line

// --- Standard MicroSim layout values ---
let canvasWidth = 800;       // will be set responsively
let drawHeight = 150;        // top drawing area
let controlHeight = 95;     // bottom controls
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let defaultTextSize = 16;

let containerWidth;
let containerHeight = canvasHeight;

// --- Simulation-specific globals ---
let minVal = -10;
let maxVal = 10;
let startPosition = 0;
let currentPosition = 0;     // visible (animated) position
let targetPosition = 0;      // where we are moving to
let previousPosition = 0;    // used for arrow drawing
let isAnimating = false;
let animProgress = 0;        // 0..1
let animSpeed = 0.06;        // tweak for smoothness

let equationParts = ["0"];   // keeps tokens like ["0", "+ 3", "- 2"]
let warningMessage = "";

// buttons
let addButtons = [];         // Add 1..5
let subButtons = [];         // Sub 1..5
let resetButton;

// positions for number line
let lineY;                   // y coordinate for number line
let lineLeftX, lineRightX;   // endpoints

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  textSize(defaultTextSize);

  // create controls (two rows)
  // top row: Add 1..5 + Reset
  let btnY1 = drawHeight + 10;
  let btnY2 = drawHeight + 50;
  let btnX = 10;
  let btnW = 80;
  let gap = 5;

  for (let i = 1; i <= 5; i++) {
    let b = createButton("Add " + i);
    b.position(btnX, btnY1);
    b.size(btnW, 30);
    b.mousePressed(() => handleOperation(i));
    addButtons.push(b);
    btnX += btnW + gap;
  }

  // reset button
  resetButton = createButton("Reset to Zero");
  resetButton.position(btnX+30, btnY1);
  resetButton.size(110, 30);
  resetButton.mousePressed(resetSimulation);

  // bottom row: Subtract 1..5
  let subX = 10;
  for (let i = 1; i <= 5; i++) {
    let b = createButton("Subtract " + i);
    b.position(subX, btnY2);
    b.size(btnW, 30);
    b.mousePressed(() => handleOperation(-i));
    subButtons.push(b);
    subX += btnW + gap;
  }

  // accessibility description
  describe(
    'Simulation that shows integer addition and subtraction as movement along a horizontal number line from negative ten to positive ten. Blue circle shows current value, green arrows for addition, red arrows for subtraction. Buttons below perform operations and display the equation.',
    LABEL
  );

  // initialize line geometry
  computeLineGeometry();
}

function draw() {
  // --- backgrounds ---
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);

  fill('white');
  stroke('silver');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // --- title ---
  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(getResponsiveTextSize(24));
  text("Integer Operations on the Number Line", canvasWidth / 2, margin);

  textSize(defaultTextSize);
  textAlign(LEFT, CENTER);

  // update animation
  if (isAnimating) {
    animProgress += animSpeed;
    if (animProgress >= 1) {
      animProgress = 1;
      isAnimating = false;
      currentPosition = targetPosition;
    } else {
      currentPosition = lerp(previousPosition, targetPosition, animProgress);
    }
  }

  // draw number line and ticks
  drawNumberLine();

  // draw start position (small gray circle)
  drawStartMarker();

  // draw current operation arrow while animating
  if (isAnimating) {
    drawMovementArrow(previousPosition, targetPosition, targetPosition - previousPosition);
  }

  // draw current position (blue circle)
  drawCurrentMarker(currentPosition);

  // draw equation
  drawEquation();

  // draw warning if any
  if (warningMessage !== "") {
    fill('red');
    textAlign(CENTER, CENTER);
    text(warningMessage, canvasWidth / 2, drawHeight - 20);
    textAlign(LEFT, CENTER);
  }

  // draw current value in control area
  drawControlLabels();
}

function drawNumberLine() {
  stroke(0);
  strokeWeight(3);
  line(lineLeftX, lineY, lineRightX, lineY);

  // ticks from minVal to maxVal
  for (let v = minVal; v <= maxVal; v++) {
    let x = valueToX(v);
    stroke(0);
    strokeWeight(1);
    line(x, lineY - 8, x, lineY + 8);

    // label
    noStroke();
    fill(0);
    textAlign(CENTER, TOP);
    text(v, x, lineY + 10);
    textAlign(LEFT, CENTER);
  }
}

function drawStartMarker() {
  let x0 = valueToX(startPosition);
  fill(160);
  noStroke();
  circle(x0, lineY, 10);
}

function drawCurrentMarker(val) {
  let x = valueToX(val);
  fill('blue');
  noStroke();
  circle(x, lineY, 18);
}

function drawMovementArrow(fromVal, toVal, delta) {
  let x1 = valueToX(fromVal);
  let x2 = valueToX(toVal);
  let dir = Math.sign(delta);
  let col = dir > 0 ? color(0, 150, 0) : color(200, 0, 0);

  stroke(col);
  strokeWeight(4);
  line(x1, lineY - 20, x2, lineY - 20);

  // arrowhead
  push();
  translate(x2, lineY - 20);
  rotate( dir > 0 ? 0 : PI );
  fill(col);
  noStroke();
  triangle(0, 0, -10, -5, -10, 5);
  pop();
}

function drawEquation() {
  let eq = equationParts.join(" ");
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(getResponsiveTextSize(16));
  text(eq + " = " + targetPosition, canvasWidth / 2, margin + 40);
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
}

function drawControlLabels() {
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text("Current position: " + targetPosition, canvasWidth*.7, drawHeight + 65);
}

// Handle Add/Subtract
function handleOperation(delta) {
  warningMessage = "";
  let candidate = targetPosition + delta;
  if (candidate < minVal || candidate > maxVal) {
    warningMessage = "Move blocked: stays within -10 to +10.";
    return;
  }

  // update equation
  if (delta > 0) {
    equationParts.push("+ " + Math.abs(delta));
  } else {
    equationParts.push("- " + Math.abs(delta));
  }

  // start animation
  previousPosition = targetPosition;
  targetPosition = candidate;
  isAnimating = true;
  animProgress = 0;
}

function resetSimulation() {
  targetPosition = startPosition;
  currentPosition = startPosition;
  previousPosition = startPosition;
  isAnimating = false;
  animProgress = 0;
  warningMessage = "";
  equationParts = ["0"];
}

// map integer value to x coord on line
function valueToX(v) {
  return map(v, minVal, maxVal, lineLeftX, lineRightX);
}

function computeLineGeometry() {
  lineY = margin*4;  // somewhere in the middle of draw area
  lineLeftX = margin + 10;
  lineRightX = canvasWidth - margin - 10;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  // reposition buttons
  let btnY1 = drawHeight + 10;
  let btnY2 = drawHeight + 50;
  let btnX = 10;
  let btnW = 70;
  let gap = 5;
  for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].position(btnX, btnY1);
    addButtons[i].size(btnW, 30);
    btnX += btnW + gap;
  }
  resetButton.position(btnX, btnY1);
  resetButton.size(110, 30);

  let subX = 10;
  for (let i = 0; i < subButtons.length; i++) {
    subButtons[i].position(subX, btnY2);
    subButtons[i].size(btnW, 30);
    subX += btnW + gap;
  }

  computeLineGeometry();
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    const rect = container.getBoundingClientRect();
    canvasWidth = Math.floor(rect.width);
  }
  // height fixed
}

function getResponsiveTextSize(baseSize) {
  return constrain(baseSize * (canvasWidth / 800), baseSize * 0.8, baseSize * 1.4);
}