// Distributive Property Visualizer MicroSim
// Demonstrates distributive property using synchronized area models and algebraic steps

// Canvas dimensions - REQUIRED structure
let canvasWidth = 900;
let drawHeight = 600;
let controlHeight = 160;
let canvasHeight = drawHeight + controlHeight;
let margin = 15;
let sliderLeftMargin = 170;
let defaultTextSize = 16;

// Problem components
let outsideFactor = '3';
let firstTerm = 'x';
let secondTerm = '5';
let problemType = 'Single Variable';
let showAreaModel = true;
let currentStep = 0;
let maxSteps = 3;
let isAnimating = false;
let animationProgress = 0;
let animationSpeed = 0.02;

// UI Controls
let outsideInput, firstInput, secondInput;
let problemTypeSelect;
let showAreaCheckbox;
let speedSlider;
let stepButton, animateButton, randomButton;

// Predefined problems for random generation
const problems = {
  'Numeric': [
    {outside: '2', first: '3', second: '4'},
    {outside: '5', first: '6', second: '2'},
    {outside: '3', first: '10', second: '7'}
  ],
  'Single Variable': [
    {outside: '3', first: 'x', second: '5'},
    {outside: '4', first: 'y', second: '3'},
    {outside: '2', first: 'x', second: '7'},
    {outside: '-2', first: 'x', second: '3'}
  ],
  'Two Variables': [
    {outside: 'x', first: 'x', second: '3'},
    {outside: '2y', first: 'y', second: '4'},
    {outside: 'x', first: '2x', second: '5'}
  ]
};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Input fields
  outsideInput = createInput(outsideFactor);
  outsideInput.position(10, drawHeight + 15);
  outsideInput.size(80);
  outsideInput.input(updateProblem);

  firstInput = createInput(firstTerm);
  firstInput.position(10, drawHeight + 45);
  firstInput.size(80);
  firstInput.input(updateProblem);

  secondInput = createInput(secondTerm);
  secondInput.position(10, drawHeight + 75);
  secondInput.size(80);
  secondInput.input(updateProblem);

  // Problem type dropdown
  problemTypeSelect = createSelect();
  problemTypeSelect.position(10, drawHeight + 105);
  problemTypeSelect.option('Numeric');
  problemTypeSelect.option('Single Variable');
  problemTypeSelect.option('Two Variables');
  problemTypeSelect.selected('Single Variable');
  problemTypeSelect.changed(updateProblem);

  // Show area model checkbox
  showAreaCheckbox = createCheckbox('Show Area Model', true);
  showAreaCheckbox.position(10, drawHeight + 135);
  showAreaCheckbox.changed(() => {
    showAreaModel = showAreaCheckbox.checked();
  });

  // Animation speed slider
  speedSlider = createSlider(1, 10, 5, 1);
  speedSlider.position(sliderLeftMargin, drawHeight + 15);
  speedSlider.size(canvasWidth - sliderLeftMargin - margin);

  // Control buttons
  stepButton = createButton('Show Next Step');
  stepButton.position(200, drawHeight + 45);
  stepButton.mousePressed(nextStep);

  animateButton = createButton('Animate Solution');
  animateButton.position(330, drawHeight + 45);
  animateButton.mousePressed(startAnimation);

  randomButton = createButton('Random Problem');
  randomButton.position(200, drawHeight + 75);
  randomButton.mousePressed(generateRandomProblem);

  describe('Interactive distributive property visualizer showing synchronized area models and algebraic steps', LABEL);
}

function draw() {
  updateCanvasSize();

  // Drawing area (light blue background)
  fill('aliceblue');
  rect(0, 0, width, drawHeight);

  // Control area (white background)
  fill('white');
  rect(0, drawHeight, width, controlHeight);

  // Title
  fill('black');
  textSize(28);
  textAlign(CENTER, TOP);
  noStroke();
  text('Distributive Property Visualizer', canvasWidth/2, margin);

  // Reset defaults
  stroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);

  // Problem display
  drawProblem();

  // Split view: Area model on left, Algebraic steps on right
  let midX = canvasWidth / 2;

  if (showAreaModel) {
    // Draw vertical divider
    stroke('silver');
    strokeWeight(2);
    line(midX, 60, midX, drawHeight - margin);
    noStroke();

    // Left: Area model
    drawAreaModel(margin, 100, midX - 2*margin, drawHeight - 120);

    // Right: Algebraic steps
    drawAlgebraicSteps(midX + margin, 100, midX - 2*margin, drawHeight - 120);
  } else {
    // Full width algebraic steps
    drawAlgebraicSteps(margin, 100, canvasWidth - 2*margin, drawHeight - 120);
  }

  // Update animation
  if (isAnimating) {
    animationProgress += animationSpeed * speedSlider.value() / 5;
    if (animationProgress >= 1) {
      animationProgress = 0;
      currentStep++;
      if (currentStep > maxSteps) {
        isAnimating = false;
        currentStep = maxSteps;
      }
    }
  }

  // Draw control labels
  fill('black');
  textSize(14);
  text('Outside Factor:', 100, drawHeight + 25);
  text('First Term:', 100, drawHeight + 55);
  text('Second Term:', 100, drawHeight + 85);
  text('Problem Type:', 100, drawHeight + 115);
  text('Animation Speed: ' + speedSlider.value(), 10, drawHeight + 25);

  textSize(defaultTextSize);
}

function drawProblem() {
  fill('black');
  textSize(24);
  textAlign(CENTER, TOP);

  let problemText = outsideFactor + '(' + firstTerm + ' + ' + secondTerm + ')';
  text('Problem: ' + problemText, canvasWidth/2, 50);

  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
}

function drawAreaModel(x, y, w, h) {
  push();
  translate(x, y);

  // Title
  fill('black');
  textSize(18);
  textAlign(CENTER, TOP);
  text('Area Model', w/2, 0);

  // Calculate rectangle dimensions based on terms
  let rectY = 40;
  let rectHeight = min(h - 100, 250);
  let leftWidth = w * 0.4;
  let rightWidth = w * 0.4;
  let totalWidth = leftWidth + rightWidth;
  let rectX = (w - totalWidth) / 2;

  // Determine visibility based on step
  let showFirstArea = currentStep >= 1;
  let showSecondArea = currentStep >= 2;
  let highlightFirst = currentStep === 1 && isAnimating;
  let highlightSecond = currentStep === 2 && isAnimating;

  // Draw the overall rectangle
  stroke('black');
  strokeWeight(3);
  noFill();
  rect(rectX, rectY, totalWidth, rectHeight);

  // Draw vertical divider
  stroke('gray');
  strokeWeight(2);
  line(rectX + leftWidth, rectY, rectX + leftWidth, rectY + rectHeight);

  // Left section (first term)
  if (showFirstArea || highlightFirst) {
    fill(72, 133, 237, highlightFirst ? 150 + 105 * animationProgress : 200);
  } else {
    fill(200, 220, 255, 100);
  }
  stroke('black');
  strokeWeight(2);
  rect(rectX, rectY, leftWidth, rectHeight);

  // Right section (second term)
  if (showSecondArea || highlightSecond) {
    fill(255, 150, 50, highlightSecond ? 150 + 105 * animationProgress : 200);
  } else {
    fill(255, 220, 200, 100);
  }
  rect(rectX + leftWidth, rectY, rightWidth, rectHeight);

  // Labels
  fill('black');
  textSize(20);
  textAlign(CENTER, CENTER);

  // Vertical label (outside factor)
  push();
  translate(rectX - 25, rectY + rectHeight/2);
  rotate(-HALF_PI);
  text(outsideFactor, 0, 0);
  pop();

  // Horizontal labels (terms)
  textAlign(CENTER, BOTTOM);
  text(firstTerm, rectX + leftWidth/2, rectY - 10);
  text(secondTerm, rectX + leftWidth + rightWidth/2, rectY - 10);

  // Area labels
  if (showFirstArea) {
    textAlign(CENTER, CENTER);
    textSize(18);
    fill('white');
    stroke('black');
    strokeWeight(1);
    text(outsideFactor + ' × ' + firstTerm, rectX + leftWidth/2, rectY + rectHeight/2 - 10);
    text('= ' + simplifyProduct(outsideFactor, firstTerm), rectX + leftWidth/2, rectY + rectHeight/2 + 15);
  }

  if (showSecondArea) {
    fill('white');
    text(outsideFactor + ' × ' + secondTerm, rectX + leftWidth + rightWidth/2, rectY + rectHeight/2 - 10);
    text('= ' + simplifyProduct(outsideFactor, secondTerm), rectX + leftWidth + rightWidth/2, rectY + rectHeight/2 + 15);
  }

  // Show sweeping animation
  if (highlightFirst || highlightSecond) {
    stroke('red');
    strokeWeight(4);
    noFill();
    let targetX = highlightFirst ? rectX + leftWidth/2 : rectX + leftWidth + rightWidth/2;
    let arrowY = rectY - 35;

    // Animated arrow
    push();
    translate(rectX - 25 + (targetX - (rectX - 25)) * animationProgress, arrowY);
    line(0, 0, 20, 10);
    line(0, 0, 20, -10);
    pop();
  }

  pop();
}

function drawAlgebraicSteps(x, y, w, h) {
  push();
  translate(x, y);

  // Title
  fill('black');
  textSize(18);
  textAlign(CENTER, TOP);
  text('Algebraic Steps', w/2, 0);

  textSize(20);
  textAlign(LEFT, TOP);
  let stepY = 50;
  let stepSpacing = 80;

  // Step 0: Original expression
  fill('black');
  text('Step 1: Original Expression', 10, stepY);
  textSize(24);
  let expr = outsideFactor + '(' + firstTerm + ' + ' + secondTerm + ')';
  text(expr, 20, stepY + 30);

  // Step 1: Show first distribution
  if (currentStep >= 1) {
    stepY += stepSpacing;
    textSize(20);
    fill('black');
    text('Step 2: Distribute to first term', 10, stepY);
    textSize(24);

    fill(72, 133, 237);
    let product1 = simplifyProduct(outsideFactor, firstTerm);
    text(product1, 20, stepY + 30);

    fill('black');
    let plusPos = 20 + textWidth(product1) + 10;
    text(' + ' + outsideFactor + '(' + secondTerm + ')', plusPos, stepY + 30);

    // Arrow showing distribution
    if (currentStep === 1 && isAnimating) {
      stroke('red');
      strokeWeight(3);
      let arrowX = 20 + textWidth(product1) / 2;
      line(arrowX, stepY + 20, arrowX, stepY + 28);
      line(arrowX, stepY + 28, arrowX - 5, stepY + 23);
      line(arrowX, stepY + 28, arrowX + 5, stepY + 23);
    }
  }

  // Step 2: Show second distribution
  if (currentStep >= 2) {
    stepY += stepSpacing;
    textSize(20);
    fill('black');
    text('Step 3: Distribute to second term', 10, stepY);
    textSize(24);

    fill(72, 133, 237);
    let product1 = simplifyProduct(outsideFactor, firstTerm);
    text(product1, 20, stepY + 30);

    fill('black');
    text(' + ', 20 + textWidth(product1), stepY + 30);

    fill(255, 150, 50);
    let product2 = simplifyProduct(outsideFactor, secondTerm);
    text(product2, 20 + textWidth(product1 + ' + '), stepY + 30);

    if (currentStep === 2 && isAnimating) {
      stroke('red');
      strokeWeight(3);
      let arrowX = 20 + textWidth(product1 + ' + ' + product2) / 2;
      line(arrowX, stepY + 20, arrowX, stepY + 28);
      line(arrowX, stepY + 28, arrowX - 5, stepY + 23);
      line(arrowX, stepY + 28, arrowX + 5, stepY + 23);
    }
  }

  // Step 3: Final answer
  if (currentStep >= 3) {
    stepY += stepSpacing;
    textSize(20);
    fill('black');
    text('Step 4: Final Answer', 10, stepY);
    textSize(26);
    fill('green');
    strokeWeight(2);
    stroke('green');
    let product1 = simplifyProduct(outsideFactor, firstTerm);
    let product2 = simplifyProduct(outsideFactor, secondTerm);
    text(product1 + ' + ' + product2, 20, stepY + 30);

    // Box around answer
    let answerText = product1 + ' + ' + product2;
    let boxWidth = textWidth(answerText) + 20;
    noFill();
    rect(15, stepY + 25, boxWidth, 40);
  }

  pop();
}

function simplifyProduct(a, b) {
  // Handle numeric multiplication
  let numA = parseFloat(a);
  let numB = parseFloat(b);

  if (!isNaN(numA) && !isNaN(numB)) {
    return String(numA * numB);
  }

  // Handle coefficient × variable
  if (!isNaN(numA) && isNaN(numB)) {
    if (numA === 1) return b;
    if (numA === -1) return '-' + b;
    return a + b;
  }

  if (isNaN(numA) && !isNaN(numB)) {
    if (numB === 1) return a;
    if (numB === -1) return '-' + a;
    return b + a;
  }

  // Handle variable × variable or complex expressions
  // Extract coefficients and variables
  let coeffA = 1, varA = a;
  let coeffB = 1, varB = b;

  let matchA = a.match(/^(-?\d*)(.*)$/);
  if (matchA) {
    if (matchA[1] === '' || matchA[1] === '+') coeffA = 1;
    else if (matchA[1] === '-') coeffA = -1;
    else coeffA = parseInt(matchA[1]);
    varA = matchA[2];
  }

  let matchB = b.match(/^(-?\d*)(.*)$/);
  if (matchB) {
    if (matchB[1] === '' || matchB[1] === '+') coeffB = 1;
    else if (matchB[1] === '-') coeffB = -1;
    else coeffB = parseInt(matchB[1]);
    varB = matchB[2];
  }

  let resultCoeff = coeffA * coeffB;
  let resultVar = varA + varB;

  // Handle same variables (like x * x = x²)
  if (varA && varB && varA === varB) {
    resultVar = varA + '²';
  }

  if (resultCoeff === 1 && resultVar) return resultVar;
  if (resultCoeff === -1 && resultVar) return '-' + resultVar;
  if (!resultVar) return String(resultCoeff);

  return resultCoeff + resultVar;
}

function nextStep() {
  if (currentStep < maxSteps) {
    currentStep++;
    isAnimating = false;
    animationProgress = 0;
  }
}

function startAnimation() {
  currentStep = 0;
  animationProgress = 0;
  isAnimating = true;
}

function generateRandomProblem() {
  let type = problemTypeSelect.value();
  let problemSet = problems[type];
  let problem = random(problemSet);

  outsideFactor = problem.outside;
  firstTerm = problem.first;
  secondTerm = problem.second;

  outsideInput.value(outsideFactor);
  firstInput.value(firstTerm);
  secondInput.value(secondTerm);

  currentStep = 0;
  isAnimating = false;
  animationProgress = 0;
}

function updateProblem() {
  outsideFactor = outsideInput.value();
  firstTerm = firstInput.value();
  secondTerm = secondInput.value();
  problemType = problemTypeSelect.value();

  currentStep = 0;
  isAnimating = false;
  animationProgress = 0;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;

    // Update slider width
    if (typeof speedSlider !== 'undefined') {
      speedSlider.size(canvasWidth - sliderLeftMargin - margin);
    }
  }
}
