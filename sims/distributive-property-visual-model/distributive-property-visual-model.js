// Distributive Property Visual Model — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "distributive-property-visual-model",
  "title": "Distributive Property Visual Model",
  "kind": "area",
  "objective": "Visualize the distributive property using area models (rectangles) to show why a(b + c) = ab + ac",
  "actionLabel": "Check / Explain",
  "aMin": 1,
  "aMax": 8,
  "aDefault": 3,
  "aStep": 1,
  "bMin": -6,
  "bMax": 8,
  "bDefault": 4,
  "bStep": 1,
  "aLabel": "Outside factor",
  "bLabel": "Second term",
  "choices": [
    "Area model",
    "Symbols",
    "Both"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
//     Learning objective: Visualize the distributive property using area models (rectangles) to show why a(b + c) = ab + ac
//
//     Canvas layout (800x500px):
//     - Top area (800x350): Drawing area showing rectangular area model
//     - Bottom area (800x150): Control panel
//
//     Visual elements:
//     - Large rectangle divided into two sections
//     - Left rectangle: width = b, height = a, area = ab (colored light blue)
//     - Right rectangle: width = c, height = a, area = ac (colored light green)
//     - Combined rectangle: width = (b + c), height = a, area = a(b + c)
//     - Grid lines showing unit squares
//     - Labels on all dimensions
//     - Area calculations displayed for each section
//
//     Interactive controls:
//     - Slider: Value of a (1-10)
//     - Slider: Value of b (1-10)
//     - Slider: Value of c (1-10)
//     - Display: Equation showing a(b + c) = ab + ac with current values
//     - Display: "Left side = [value], Right side = [value], Equal? ✓"
//     - Checkbox: "Show unit grid"
//     - Checkbox: "Show calculations"
//
//     Default parameters:
//     - a = 3
//     - b = 4
//     - c = 5
//     - Show unit grid: true
//
//     Behavior:
//     - When sliders move, rectangle dimensions update smoothly
//     - Area of each section recalculates
//     - Both sides of equation update to show they're equal
//     - Unit grid helps students count squares to verify
//     - Color coding helps distinguish ab from ac
//     - Total area shown both as a(b+c) and as ab + ac
//
//     Additional features:
//     - Button: "Show me a different property" (cycles through numerical examples)
//     - Animation: Can animate the "splitting" of the rectangle
//
//     Implementation: p5.js with clear grid rendering and dynamic text labels
