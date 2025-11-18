// Variable Types Interactive Infographic MicroSim
// Canvas dimensions - REQUIRED structure
let canvasWidth = 800;              // Initial width (responsive)
let drawHeight = 600;                // Drawing/simulation area height
let controlHeight = 100;             // Controls area height
let canvasHeight = drawHeight + controlHeight;
let margin = 20;                     // Margin for visual elements
let defaultTextSize = 16;            // Base text size

// Category data
let categories = [
  {
    name: "Position Variables",
    vars: "x, y, z",
    color: '#4A90E2', // Blue
    icon: 'grid',
    hoverText: "Used to represent positions, locations, or unknown quantities in equations",
    mainExample: "Finding x: 2x + 5 = 13",
    extraExamples: [
      "Solving for y: 3y - 7 = 20",
      "Coordinate point: (x, y) = (4, 7)",
      "Three dimensions: (x, y, z) in 3D space"
    ],
    expanded: false
  },
  {
    name: "Time Variables",
    vars: "t",
    color: '#50C878', // Green
    icon: 'clock',
    hoverText: "Represents time in motion problems, growth models, and sequences",
    mainExample: "Distance after t hours: d = 55t",
    extraExamples: [
      "Population growth: P(t) = P₀ · 2^t",
      "Compound interest: A = P(1 + r)^t",
      "Decay model: N(t) = N₀ · e^(-kt)"
    ],
    expanded: false
  },
  {
    name: "Counting Variables",
    vars: "n",
    color: '#FF8C42', // Orange
    icon: 'counter',
    hoverText: "Used for discrete quantities like items, steps, or people",
    mainExample: "Cost of n pizzas: C = 12n",
    extraExamples: [
      "Sequence term: aₙ = 2n + 1",
      "Total students: n students in class",
      "Number of sides: n-sided polygon"
    ],
    expanded: false
  },
  {
    name: "Rate Variables",
    vars: "r, m",
    color: '#9B59B6', // Purple
    icon: 'speedometer',
    hoverText: "Represents rates of change, speed, or slopes",
    mainExample: "Simple interest: I = Prt",
    extraExamples: [
      "Slope of line: m in y = mx + b",
      "Speed formula: r = d/t",
      "Growth rate: r in compound interest"
    ],
    expanded: false
  }
];

// Interaction state
let hoveredCard = -1;
let cardWidth, cardHeight;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  describe('Interactive infographic showing four types of algebraic variables: position (x,y,z), time (t), counting (n), and rate (r,m) variables with color-coded cards and expandable examples', LABEL);

  textFont('Arial');
}

function draw() {
  updateCanvasSize();

  // Drawing area (light blue background)
  fill('aliceblue');
  rect(0, 0, width, drawHeight);

  // Control area (white background)
  fill('white');
  rect(0, drawHeight, width, controlHeight);

  // Title at top center
  fill('black');
  textSize(36);
  textAlign(CENTER, TOP);
  noStroke();
  text('Variable Types', canvasWidth/2, margin);

  // Subtitle
  textSize(18);
  fill('#555');
  text('Click a card to see more examples • Hover for descriptions', canvasWidth/2, margin + 45);

  // Calculate card dimensions
  let gridMargin = 40;
  let gap = 20;
  let availableWidth = canvasWidth - 2 * gridMargin;
  let availableHeight = drawHeight - 120; // Account for title and margins
  cardWidth = (availableWidth - gap) / 2;
  cardHeight = (availableHeight - gap) / 2;

  // Draw 2x2 grid of cards
  for (let i = 0; i < 4; i++) {
    let col = i % 2;
    let row = floor(i / 2);
    let x = gridMargin + col * (cardWidth + gap);
    let y = 100 + row * (cardHeight + gap);

    drawCard(categories[i], x, y, cardWidth, cardHeight, i);
  }

  // Control area instructions
  fill('black');
  textSize(16);
  textAlign(CENTER, TOP);
  text('💡 Hover over cards to see detailed descriptions', canvasWidth/2, drawHeight + 20);
  text('🖱️ Click cards to reveal additional real-world examples', canvasWidth/2, drawHeight + 50);

  // Reset defaults
  stroke();
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
}

function drawCard(category, x, y, w, h, index) {
  let isHovered = hoveredCard === index;
  let isExpanded = category.expanded;

  // Card background with hover effect
  stroke(isHovered ? '#333' : '#999');
  strokeWeight(isHovered ? 3 : 1);
  fill(isExpanded ? category.color : 'white');
  rect(x, y, w, h, 10);

  // Text color based on expansion state
  let textColor = isExpanded ? 'white' : 'black';

  // Category name
  fill(textColor);
  noStroke();
  textSize(20);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text(category.name, x + w/2, y + 15);

  // Variables
  textSize(24);
  textStyle(NORMAL);
  text(category.vars, x + w/2, y + 45);

  // Draw icon
  drawIcon(category.icon, x + w/2, y + 90, category.color, isExpanded);

  // Main example
  textSize(14);
  fill(isExpanded ? 'white' : '#333');
  text(category.mainExample, x + w/2, y + 140);

  // Show hover text or expanded examples
  if (isHovered && !isExpanded) {
    // Hover description
    textSize(12);
    fill(isExpanded ? 'white' : '#555');
    textAlign(CENTER, TOP);
    let lines = splitTextToLines(category.hoverText, w - 20);
    for (let i = 0; i < lines.length; i++) {
      text(lines[i], x + w/2, y + 165 + i * 15);
    }
  } else if (isExpanded) {
    // Expanded examples
    textSize(13);
    fill('white');
    textAlign(LEFT, TOP);
    text('More examples:', x + 15, y + 170);
    for (let i = 0; i < category.extraExamples.length; i++) {
      text('• ' + category.extraExamples[i], x + 15, y + 195 + i * 35);
    }
  }

  // Color indicator bar at top
  noStroke();
  fill(category.color);
  rect(x, y, w, 8, 10, 10, 0, 0);

  textStyle(NORMAL);
}

function drawIcon(iconType, x, y, color, inverted) {
  let iconColor = inverted ? 'white' : color;

  push();
  translate(x, y);
  stroke(iconColor);
  strokeWeight(2);
  noFill();

  if (iconType === 'grid') {
    // Coordinate grid with point
    let size = 30;
    // Grid
    line(-size, 0, size, 0);
    line(0, -size, 0, size);
    // Tick marks
    for (let i = -size; i <= size; i += 10) {
      line(i, -3, i, 3);
      line(-3, i, 3, i);
    }
    // Point
    fill(iconColor);
    circle(15, -15, 8);

  } else if (iconType === 'clock') {
    // Clock
    let size = 25;
    circle(0, 0, size * 2);
    // Clock hands
    strokeWeight(3);
    line(0, 0, 0, -size * 0.6); // Hour hand
    strokeWeight(2);
    line(0, 0, size * 0.7, -size * 0.3); // Minute hand

  } else if (iconType === 'counter') {
    // Stack of items with counter
    let size = 20;
    noFill();
    rect(-size, -size * 0.7, size * 0.8, size * 0.8);
    rect(-size + 5, -size * 0.7 + 5, size * 0.8, size * 0.8);
    rect(-size + 10, -size * 0.7 + 10, size * 0.8, size * 0.8);
    // Counter badge
    fill(iconColor);
    circle(size * 0.5, size * 0.5, size);
    fill(inverted ? color : 'white');
    noStroke();
    textSize(14);
    textAlign(CENTER, CENTER);
    text('n', size * 0.5, size * 0.5);

  } else if (iconType === 'speedometer') {
    // Speedometer/gauge
    let size = 25;
    noFill();
    arc(0, 0, size * 2, size * 2, PI, TWO_PI);
    // Tick marks
    for (let a = PI; a <= TWO_PI; a += PI/6) {
      let x1 = cos(a) * size * 0.7;
      let y1 = sin(a) * size * 0.7;
      let x2 = cos(a) * size;
      let y2 = sin(a) * size;
      line(x1, y1, x2, y2);
    }
    // Needle
    strokeWeight(3);
    let needleAngle = PI + PI * 0.6;
    line(0, 0, cos(needleAngle) * size * 0.8, sin(needleAngle) * size * 0.8);
  }

  pop();
}

function splitTextToLines(text, maxWidth) {
  let words = text.split(' ');
  let lines = [];
  let currentLine = '';

  textSize(12);
  for (let word of words) {
    let testLine = currentLine + (currentLine ? ' ' : '') + word;
    if (textWidth(testLine) > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function mouseMoved() {
  // Update hovered card
  let gridMargin = 40;
  let gap = 20;
  hoveredCard = -1;

  for (let i = 0; i < 4; i++) {
    let col = i % 2;
    let row = floor(i / 2);
    let x = gridMargin + col * (cardWidth + gap);
    let y = 100 + row * (cardHeight + gap);

    if (mouseX >= x && mouseX <= x + cardWidth &&
        mouseY >= y && mouseY <= y + cardHeight) {
      hoveredCard = i;
      cursor(HAND);
      return;
    }
  }
  cursor(ARROW);
}

function mousePressed() {
  // Toggle expanded state on click
  if (hoveredCard !== -1) {
    categories[hoveredCard].expanded = !categories[hoveredCard].expanded;
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
}
