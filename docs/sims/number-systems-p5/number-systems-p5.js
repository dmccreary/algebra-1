// Number Systems Venn Diagram MicroSim
// Shows the hierarchical relationship between number types
// Natural ⊂ Whole ⊂ Integer ⊂ Rational ⊂ Real ⊂ Complex
// Plus: Irrational ⊂ Real (disjoint from Rational)
// Plus: Imaginary ⊂ Complex (disjoint from Real)

// Canvas dimensions
let canvasWidth = 670;
let drawHeight = 370;
let controlHeight = 40;
let canvasHeight = drawHeight + controlHeight;
let margin = 15;
let defaultTextSize = 16;

// Center point for the diagram
let centerX, centerY;

// Number system definitions with colors, positions, and info
let numberSystems = [];
let hoveredSystem = null;

// Info box dimensions
let infoBoxWidth = 220;
let infoBoxHeight = 140;

function setup() {
    updateCanvasSize();
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent(document.querySelector('main'));

    textFont('Arial');

    initializeNumberSystems();

    describe('Interactive Venn diagram showing the hierarchy of number systems from Natural Numbers to Complex Numbers, with hover information.', LABEL);
}

function initializeNumberSystems() {
    // Clear and recalculate based on current canvas size
    numberSystems = [];

    // Center the diagram, shifted slightly left to accommodate Imaginary region
    centerX = canvasWidth / 2 - 20;
    centerY = drawHeight / 2 + 15;

    // Scale factor to fit within 670px width
    let scale = Math.min(canvasWidth / 670, 1.0) * 0.75;

    // Define each number system (order matters for hover detection - smallest first)
    // Natural Numbers (innermost)
    numberSystems.push({
        name: "Natural Numbers",
        symbol: "ℕ",
        color: color(255, 182, 193, 200), // Light pink
        x: centerX - 55 * scale,
        y: centerY,
        w: 55 * scale,
        h: 36 * scale,
        description: "Counting numbers starting from 1. Used for counting objects.",
        examples: "1, 2, 3, 4, 5, 100, 1000..."
    });

    // Whole Numbers
    numberSystems.push({
        name: "Whole Numbers",
        symbol: "W",
        color: color(255, 218, 185, 200), // Peach
        x: centerX - 55 * scale,
        y: centerY,
        w: 85 * scale,
        h: 65 * scale,
        description: "Natural numbers plus zero. The set {0, 1, 2, 3, ...}",
        examples: "0, 1, 2, 3, 4, 5, 100..."
    });

    // Integers
    numberSystems.push({
        name: "Integers",
        symbol: "ℤ",
        color: color(255, 255, 150, 200), // Light yellow
        x: centerX - 50 * scale,
        y: centerY,
        w: 115 * scale,
        h: 90 * scale,
        description: "Whole numbers and their negatives. No fractions or decimals.",
        examples: "...-3, -2, -1, 0, 1, 2, 3..."
    });

    // Rational Numbers
    numberSystems.push({
        name: "Rational Numbers",
        symbol: "ℚ",
        color: color(144, 238, 144, 200), // Light green
        x: centerX - 45 * scale,
        y: centerY,
        w: 150 * scale,
        h: 115 * scale,
        description: "Numbers that can be expressed as a fraction p/q where p, q are integers and q ≠ 0.",
        examples: "1/2, -3/4, 0.75, 0.333..., 5"
    });

    // Irrational Numbers (special - overlaps with Real but not Rational)
    numberSystems.push({
        name: "Irrational Numbers",
        symbol: "I",
        color: color(221, 160, 221, 200), // Plum
        x: centerX + 170 * scale,
        y: centerY,
        w: 59 * scale,
        h: 83 * scale,
        description: "Real numbers that cannot be expressed as a simple fraction. Non-repeating, non-terminating decimals.",
        examples: "π, √2, e, √3, φ (golden ratio)"
    });

    // Real Numbers
    numberSystems.push({
        name: "Real Numbers",
        symbol: "ℝ",
        color: color(173, 216, 230, 200), // Light blue
        x: centerX - 15 * scale,
        y: centerY,
        w: 264 * scale,
        h: 145 * scale,
        description: "All rational and irrational numbers. Every point on the number line.",
        examples: "-5, 0, 1/2, √2, π, 3.14159..."
    });

    // Imaginary Numbers (special - inside Complex but outside Real)
    numberSystems.push({
        name: "Imaginary Numbers",
        symbol: "𝕀",
        color: color(255, 160, 122, 200), // Light salmon
        x: centerX + 310 * scale,
        y: centerY,
        w: 50 * scale,
        h: 96 * scale,
        description: "Multiples of i, where i = √(-1). Pure imaginary numbers have no real part.",
        examples: "i, 2i, -5i, √(-4) = 2i"
    });

    // Complex Numbers (outermost)
    numberSystems.push({
        name: "Complex Numbers",
        symbol: "ℂ",
        color: color(230, 230, 250, 200), // Lavender
        x: centerX + 25 * scale,
        y: centerY,
        w: 383 * scale,
        h: 170 * scale,
        description: "Numbers of the form a + bi where a, b are real and i = √(-1). Includes all real and imaginary numbers.",
        examples: "3 + 2i, -1 - i, 5 (=5+0i), 4i"
    });
}

function draw() {
    updateCanvasSize();

    // Drawing area background
    fill('aliceblue');
    stroke('silver');
    strokeWeight(1);
    rect(0, 0, canvasWidth, drawHeight);

    // Control area background
    fill('white');
    noStroke();
    rect(0, drawHeight, canvasWidth, controlHeight);

    // Draw title
    fill('black');
    noStroke();
    textSize(24);
    textAlign(CENTER, TOP);
    text('Number Systems Hierarchy', canvasWidth / 2, 10);

    // Detect hover (check from outermost to innermost, but prioritize innermost)
    hoveredSystem = null;

    // Check in reverse order (largest first) but store the smallest match
    for (let i = numberSystems.length - 1; i >= 0; i--) {
        let sys = numberSystems[i];
        if (isInsideEllipse(mouseX, mouseY, sys.x, sys.y, sys.w, sys.h)) {
            // Check if this is a more specific (smaller) region
            if (hoveredSystem === null || (sys.w * sys.h < hoveredSystem.w * hoveredSystem.h)) {
                // Special handling: Irrational should only be detected in its specific region
                if (sys.name === "Irrational Numbers") {
                    // Must be outside Rational
                    let rational = numberSystems.find(s => s.name === "Rational Numbers");
                    if (!isInsideEllipse(mouseX, mouseY, rational.x, rational.y, rational.w, rational.h)) {
                        hoveredSystem = sys;
                    }
                }
                // Special handling: Imaginary should only be detected in its specific region
                else if (sys.name === "Imaginary Numbers") {
                    // Must be outside Real
                    let real = numberSystems.find(s => s.name === "Real Numbers");
                    if (!isInsideEllipse(mouseX, mouseY, real.x, real.y, real.w, real.h)) {
                        hoveredSystem = sys;
                    }
                }
                else {
                    hoveredSystem = sys;
                }
            }
        }
    }

    // Draw all ellipses (from largest to smallest so smaller ones appear on top)
    for (let i = numberSystems.length - 1; i >= 0; i--) {
        let sys = numberSystems[i];

        // Highlight if hovered
        if (hoveredSystem && hoveredSystem.name === sys.name) {
            stroke(50, 50, 150);
            strokeWeight(3);
        } else {
            stroke(100);
            strokeWeight(1.5);
        }

        fill(sys.color);
        ellipse(sys.x, sys.y, sys.w * 2, sys.h * 2);

        // Draw label
        fill(30);
        noStroke();
        textSize(14);
        textAlign(CENTER, CENTER);

        // Position labels to avoid overlap
        let labelX = sys.x;
        let labelY = sys.y;

        // Adjust label positions for better visibility
        if (sys.name === "Natural Numbers") {
            labelY = sys.y;
        } else if (sys.name === "Whole Numbers") {
            labelY = sys.y - sys.h + 15;
        } else if (sys.name === "Integers") {
            labelY = sys.y - sys.h + 11;
        } else if (sys.name === "Rational Numbers") {
            labelY = sys.y - sys.h + 11;
        } else if (sys.name === "Irrational Numbers") {
            labelY = sys.y;
        } else if (sys.name === "Real Numbers") {
            labelY = sys.y - sys.h + 15;
        } else if (sys.name === "Imaginary Numbers") {
            labelY = sys.y;
        } else if (sys.name === "Complex Numbers") {
            labelY = sys.y - sys.h + 12;
        }

        text(sys.symbol, labelX, labelY);
    }

    // Draw info box if hovering
    if (hoveredSystem) {
        drawInfoBox(hoveredSystem);
    }

    // Draw instruction text in control area
    fill(80);
    textSize(defaultTextSize);
    textAlign(CENTER, CENTER);
    text('Hover over each region to learn about different number systems', canvasWidth / 2, drawHeight + controlHeight / 2);
}

function drawInfoBox(sys) {
    // Calculate info box position (avoid going off screen)
    let boxX = mouseX + 15;
    let boxY = mouseY + 15;

    // Adjust box size based on content
    textSize(14);
    let descLines = wrapText(sys.description, infoBoxWidth - 20);
    let exampleLines = wrapText("Examples: " + sys.examples, infoBoxWidth - 20);
    let totalLines = descLines.length + exampleLines.length + 2; // +2 for title and spacing
    let dynamicHeight = 35 + totalLines * 18;

    // Keep box on screen
    if (boxX + infoBoxWidth > canvasWidth - 10) {
        boxX = mouseX - infoBoxWidth - 15;
    }
    if (boxY + dynamicHeight > drawHeight - 10) {
        boxY = mouseY - dynamicHeight - 15;
    }
    if (boxX < 10) boxX = 10;
    if (boxY < 45) boxY = 45;

    // Draw box background
    fill(255, 255, 255, 245);
    stroke(100);
    strokeWeight(2);
    rect(boxX, boxY, infoBoxWidth, dynamicHeight, 10);

    // Draw title
    fill(30);
    noStroke();
    textSize(16);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    text(sys.name + " (" + sys.symbol + ")", boxX + 10, boxY + 10);

    // Draw description
    textStyle(NORMAL);
    textSize(14);
    let yPos = boxY + 35;
    for (let line of descLines) {
        text(line, boxX + 10, yPos);
        yPos += 18;
    }

    // Draw examples
    yPos += 5;
    textStyle(ITALIC);
    for (let line of exampleLines) {
        text(line, boxX + 10, yPos);
        yPos += 18;
    }
    textStyle(NORMAL);
}

function wrapText(txt, maxWidth) {
    let words = txt.split(' ');
    let lines = [];
    let currentLine = '';

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

function isInsideEllipse(px, py, cx, cy, rx, ry) {
    // Check if point (px, py) is inside ellipse centered at (cx, cy) with radii (rx, ry)
    let dx = px - cx;
    let dy = py - cy;
    return (dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1;
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
    initializeNumberSystems(); // Recalculate positions
}

function updateCanvasSize() {
    const container = document.querySelector('main');
    if (container) {
        canvasWidth = Math.min(670, Math.max(500, container.offsetWidth));
    }
}
