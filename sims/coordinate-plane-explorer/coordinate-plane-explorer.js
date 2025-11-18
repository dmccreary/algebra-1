// Interactive Coordinate Plane Explorer
// Educational MicroSim using p5.js
// Helps students understand coordinate systems, quadrants, and point location

// Canvas dimensions
let canvasWidth = 700;
let drawHeight = 650;
let controlHeight = 70;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 10;
let defaultTextSize = 16;

// Grid settings
let gridMin = -10;
let gridMax = 10;
let gridSize = 20; // Number of grid divisions

// Point position (mathematical coordinates)
let pointX = 3;
let pointY = 4;

// Target point for animations
let targetX = 3;
let targetY = 4;

// Dragging state
let isDragging = false;
let dragOffset = { x: 0, y: 0 };

// Quiz mode
let isQuizMode = false;
let quizTargetX = 0;
let quizTargetY = 0;
let quizScore = 0;
let quizTotal = 0;
let quizMessage = '';
let quizMessageColor = 'black';

// Display options
let showQuadrantShading = true;
let showGridLines = true;
let showReferenceLines = true;

// Input fields
let xInput, yInput;
let plotButton, randomButton, quizButton, checkButton;
let shadingCheckbox, gridCheckbox, referenceCheckbox;

function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Create input fields
  xInput = createInput(pointX.toString());
  xInput.size(60);
  xInput.position(sliderLeftMargin + 70, drawHeight + 10);

  yInput = createInput(pointY.toString());
  yInput.size(60);
  yInput.position(sliderLeftMargin + 180, drawHeight + 10);

  // Create buttons
  plotButton = createButton('Plot');
  plotButton.position(sliderLeftMargin + 250, drawHeight + 10);
  plotButton.mousePressed(plotFromInput);

  randomButton = createButton('Random Point');
  randomButton.position(sliderLeftMargin + 310, drawHeight + 10);
  randomButton.mousePressed(generateRandomPoint);

  quizButton = createButton('Quiz Mode');
  quizButton.position(sliderLeftMargin + 430, drawHeight + 10);
  quizButton.mousePressed(toggleQuizMode);

  checkButton = createButton('Check Answer');
  checkButton.position(sliderLeftMargin + 530, drawHeight + 10);
  checkButton.mousePressed(checkQuizAnswer);
  checkButton.hide(); // Hidden until quiz mode

  // Create checkboxes in a second row
  shadingCheckbox = createCheckbox(' Quadrant Shading', true);
  shadingCheckbox.position(sliderLeftMargin + 10, drawHeight + 35);
  shadingCheckbox.changed(() => { showQuadrantShading = shadingCheckbox.checked(); });

  gridCheckbox = createCheckbox(' Grid Lines', true);
  gridCheckbox.position(sliderLeftMargin + 200, drawHeight + 35);
  gridCheckbox.changed(() => { showGridLines = gridCheckbox.checked(); });

  referenceCheckbox = createCheckbox(' Reference Lines', true);
  referenceCheckbox.position(sliderLeftMargin + 340, drawHeight + 35);
  referenceCheckbox.changed(() => { showReferenceLines = referenceCheckbox.checked(); });

  describe('Interactive coordinate plane explorer with draggable point, quadrant visualization, and quiz mode for learning coordinate systems', LABEL);
}

function draw() {
  // Animate point movement
  pointX = lerp(pointX, targetX, 0.15);
  pointY = lerp(pointY, targetY, 0.15);

  // Drawing area background
  fill('aliceblue');
  rect(0, 0, width, drawHeight);

  // Control area background
  fill('white');
  rect(0, drawHeight, width, controlHeight);

  // Draw coordinate plane
  push();
  translate(width / 2, drawHeight / 2);

  // Draw quadrant shading
  if (showQuadrantShading) {
    drawQuadrantShading();
  }

  // Draw grid lines
  if (showGridLines) {
    drawGridLines();
  }

  // Draw axes (bold)
  stroke('black');
  strokeWeight(2);
  line(-width / 2, 0, width / 2, 0); // x-axis
  line(0, -drawHeight / 2, 0, drawHeight / 2); // y-axis
  strokeWeight(1);

  // Draw axis labels
  drawAxisLabels();

  // Draw quadrant labels
  drawQuadrantLabels();

  // Draw origin
  fill('black');
  noStroke();
  circle(0, 0, 8);
  textSize(14);
  textAlign(LEFT, TOP);
  text('(0, 0)', 5, 5);

  // Draw reference lines from point
  if (showReferenceLines) {
    drawReferenceLines();
  }

  // Draw the point
  drawPoint();

  pop();

  // Draw title
  fill('black');
  textSize(32);
  textAlign(CENTER, TOP);
  noStroke();
  text('Coordinate Plane Explorer', width / 2, 10);

  // Display point information
  textSize(18);
  textAlign(LEFT, TOP);
  let displayX = round(pointX * 10) / 10;
  let displayY = round(pointY * 10) / 10;

  text(`Point: (${displayX}, ${displayY})`, 20, 50);
  text(`Quadrant: ${getQuadrant(pointX, pointY)}`, 20, 75);

  // Color-coded coordinates
  fill(getCoordinateColor(displayX));
  text(`x = ${displayX}`, 20, 100);
  fill(getCoordinateColor(displayY));
  text(`y = ${displayY}`, 20, 125);

  // Quiz mode display
  if (isQuizMode) {
    fill('black');
    textSize(20);
    textAlign(CENTER, TOP);
    text(`Plot the point (${quizTargetX}, ${quizTargetY})`, width / 2, drawHeight - 100);
    text(`Score: ${quizScore} out of ${quizTotal}`, width / 2, drawHeight - 70);

    fill(quizMessageColor);
    textSize(24);
    text(quizMessage, width / 2, drawHeight - 40);
  }

  // Control labels
  fill('black');
  textSize(defaultTextSize);
  textAlign(LEFT, CENTER);
  text('Enter x:', sliderLeftMargin + 10, drawHeight + 20);
  text('y:', sliderLeftMargin + 150, drawHeight + 20);

  // Reset defaults
  textAlign(LEFT, CENTER);
  stroke('black');
}

function drawQuadrantShading() {
  let gridPixelSize = (width - 2 * margin) / gridSize;

  noStroke();
  // Quadrant I (x > 0, y > 0) - light blue
  fill(173, 216, 230, 80);
  rect(0, -drawHeight / 2, width / 2, drawHeight / 2);

  // Quadrant II (x < 0, y > 0) - light green
  fill(144, 238, 144, 80);
  rect(-width / 2, -drawHeight / 2, width / 2, drawHeight / 2);

  // Quadrant III (x < 0, y < 0) - light yellow
  fill(255, 255, 153, 80);
  rect(-width / 2, 0, width / 2, drawHeight / 2);

  // Quadrant IV (x > 0, y < 0) - light pink
  fill(255, 182, 193, 80);
  rect(0, 0, width / 2, drawHeight / 2);
}

function drawGridLines() {
  let gridPixelSize = (width - 2 * margin) / gridSize;

  stroke('lightgray');
  strokeWeight(1);

  // Vertical grid lines
  for (let i = gridMin; i <= gridMax; i++) {
    let x = map(i, gridMin, gridMax, -width / 2 + margin, width / 2 - margin);
    line(x, -drawHeight / 2 + margin, x, drawHeight / 2 - margin);
  }

  // Horizontal grid lines
  for (let i = gridMin; i <= gridMax; i++) {
    let y = map(i, gridMin, gridMax, drawHeight / 2 - margin, -drawHeight / 2 + margin);
    line(-width / 2 + margin, y, width / 2 - margin, y);
  }
}

function drawAxisLabels() {
  fill('black');
  textSize(14);
  textAlign(CENTER, TOP);

  // x-axis labels
  for (let i = gridMin; i <= gridMax; i++) {
    if (i !== 0) {
      let x = map(i, gridMin, gridMax, -width / 2 + margin, width / 2 - margin);
      text(i, x, 5);
    }
  }

  // y-axis labels
  textAlign(RIGHT, CENTER);
  for (let i = gridMin; i <= gridMax; i++) {
    if (i !== 0) {
      let y = map(i, gridMin, gridMax, drawHeight / 2 - margin, -drawHeight / 2 + margin);
      text(i, -5, y);
    }
  }
}

function drawQuadrantLabels() {
  fill('black');
  textSize(24);
  textAlign(CENTER, CENTER);

  let labelOffset = (width / 2 - margin) / 2;
  let labelYOffset = (drawHeight / 2 - margin) / 2;

  // Quadrant I
  text('I', labelOffset, -labelYOffset);

  // Quadrant II
  text('II', -labelOffset, -labelYOffset);

  // Quadrant III
  text('III', -labelOffset, labelYOffset);

  // Quadrant IV
  text('IV', labelOffset, labelYOffset);
}

function drawReferenceLines() {
  let px = map(pointX, gridMin, gridMax, -width / 2 + margin, width / 2 - margin);
  let py = map(pointY, gridMin, gridMax, drawHeight / 2 - margin, -drawHeight / 2 + margin);

  stroke('red');
  strokeWeight(1);
  drawingContext.setLineDash([5, 5]);

  // Line to x-axis
  line(px, py, px, 0);

  // Line to y-axis
  line(px, py, 0, py);

  drawingContext.setLineDash([]);
}

function drawPoint() {
  let px = map(pointX, gridMin, gridMax, -width / 2 + margin, width / 2 - margin);
  let py = map(pointY, gridMin, gridMax, drawHeight / 2 - margin, -drawHeight / 2 + margin);

  // Point shadow for depth
  fill(0, 0, 0, 50);
  noStroke();
  circle(px + 2, py + 2, 20);

  // Main point
  fill('red');
  stroke('darkred');
  strokeWeight(2);
  circle(px, py, 20);

  // Highlight when dragging
  if (isDragging) {
    noFill();
    stroke('yellow');
    strokeWeight(3);
    circle(px, py, 28);
  }
}

function getQuadrant(x, y) {
  let roundX = round(x * 10) / 10;
  let roundY = round(y * 10) / 10;

  if (roundX === 0 && roundY === 0) return 'Origin';
  if (roundX === 0) return 'On y-axis';
  if (roundY === 0) return 'On x-axis';
  if (roundX > 0 && roundY > 0) return 'I (x > 0, y > 0)';
  if (roundX < 0 && roundY > 0) return 'II (x < 0, y > 0)';
  if (roundX < 0 && roundY < 0) return 'III (x < 0, y < 0)';
  if (roundX > 0 && roundY < 0) return 'IV (x > 0, y < 0)';
  return 'Unknown';
}

function getCoordinateColor(value) {
  if (value > 0) return color(0, 150, 0); // Green for positive
  if (value < 0) return color(200, 0, 0); // Red for negative
  return color(0, 0, 0); // Black for zero
}

function mousePressed() {
  // Check if mouse is over the point
  let px = map(pointX, gridMin, gridMax, width / 2 - width / 2 + margin, width / 2 + width / 2 - margin);
  let py = map(pointY, gridMin, gridMax, drawHeight / 2 + drawHeight / 2 - margin, drawHeight / 2 - drawHeight / 2 + margin);

  let d = dist(mouseX, mouseY, px, py);
  if (d < 15 && mouseY < drawHeight) {
    isDragging = true;
    dragOffset.x = px - mouseX;
    dragOffset.y = py - mouseY;
  }
}

function mouseDragged() {
  if (isDragging && mouseY < drawHeight) {
    // Convert mouse position to mathematical coordinates
    let mathX = map(mouseX, width / 2 - width / 2 + margin, width / 2 + width / 2 - margin, gridMin, gridMax);
    let mathY = map(mouseY, drawHeight / 2 + drawHeight / 2 - margin, drawHeight / 2 - drawHeight / 2 + margin, gridMin, gridMax);

    // Constrain to grid bounds
    targetX = constrain(mathX, gridMin, gridMax);
    targetY = constrain(mathY, gridMin, gridMax);

    // Update input fields
    xInput.value(round(targetX * 10) / 10);
    yInput.value(round(targetY * 10) / 10);

    quizMessage = ''; // Clear quiz message when dragging
  }
}

function mouseReleased() {
  isDragging = false;
}

function plotFromInput() {
  let x = parseFloat(xInput.value());
  let y = parseFloat(yInput.value());

  if (!isNaN(x) && !isNaN(y)) {
    targetX = constrain(x, gridMin, gridMax);
    targetY = constrain(y, gridMin, gridMax);
    quizMessage = '';
  }
}

function generateRandomPoint() {
  targetX = floor(random(gridMin, gridMax + 1));
  targetY = floor(random(gridMin, gridMax + 1));
  xInput.value(targetX);
  yInput.value(targetY);
  quizMessage = '';
}

function toggleQuizMode() {
  isQuizMode = !isQuizMode;

  if (isQuizMode) {
    quizButton.html('Exit Quiz');
    checkButton.show();
    generateQuizQuestion();
  } else {
    quizButton.html('Quiz Mode');
    checkButton.hide();
    quizMessage = '';
  }
}

function generateQuizQuestion() {
  quizTargetX = floor(random(gridMin, gridMax + 1));
  quizTargetY = floor(random(gridMin, gridMax + 1));
  quizMessage = 'Drag the point to the target location';
  quizMessageColor = 'black';
}

function checkQuizAnswer() {
  let dx = abs(round(pointX) - quizTargetX);
  let dy = abs(round(pointY) - quizTargetY);

  quizTotal++;

  if (dx <= 0.5 && dy <= 0.5) {
    quizScore++;
    quizMessage = 'Correct! ✓';
    quizMessageColor = 'green';
    setTimeout(generateQuizQuestion, 1500);
  } else {
    quizMessage = 'Try again! ';
    if (dx > 0.5 && dy > 0.5) {
      quizMessage += 'Both coordinates are wrong';
    } else if (dx > 0.5) {
      quizMessage += 'Check your x-coordinate';
    } else if (dy > 0.5) {
      quizMessage += 'Check your y-coordinate';
    }
    quizMessageColor = 'red';
  }
}

function windowResized() {
  // Keep fixed width for this MicroSim
  // (Coordinate plane works best with square grid)
}
