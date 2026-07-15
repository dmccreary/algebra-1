// Slope Visualizer and Calculator — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "slope-visualizer-and-calculator",
  "title": "Slope Visualizer and Calculator",
  "kind": "coordinate",
  "objective": "Help students visualize slope, understand rise/run, and calculate slope between two points",
  "actionLabel": "Check / Explain",
  "aMin": -5,
  "aMax": 5,
  "aDefault": 2,
  "aStep": 1,
  "bMin": -5,
  "bMax": 5,
  "bDefault": 1,
  "bStep": 1,
  "aLabel": "Slope / x-value",
  "bLabel": "Intercept / y-value",
  "choices": [
    "Linear",
    "Quadratic",
    "Vertical"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
//     Learning objective: Help students visualize slope, understand rise/run, and calculate slope between two points
//
//     Canvas layout (950x700px):
//     - Left side (550x700): Large coordinate grid
//     - Right side (400x700): Controls and calculations
//
//     Visual elements in graph area:
//     - Coordinate plane from -10 to 10 on both axes
//     - Two draggable points (Point A and Point B) connected by a line
//     - Point A marked in red, labeled with coordinates
//     - Point B marked in blue, labeled with coordinates
//     - Line extending through both points (dashed beyond the points)
//     - Rise shown as vertical line segment (red) from Point A level to Point B
//     - Run shown as horizontal line segment (blue) from Point A to below Point B
//     - Right triangle formed by rise and run (shaded lightly)
//     - Slope value displayed on the line itself
//     - Reference arrows showing direction: "↗ Positive", "↘ Negative", "→ Zero", "↕ Undefined"
//
//     Control panel (right side):
//     - Display: "Point A: (x₁, y₁) = ([value], [value])"
//     - Display: "Point B: (x₂, y₂) = ([value], [value])"
//     - Calculation shown step by step:
//       - "Rise = y₂ − y₁ = [value]"
//       - "Run = x₂ − x₁ = [value]"
//       - "Slope = Rise ÷ Run = [value]"
//       - Or "Slope = undefined" if vertical
//     - Display: "Slope type: [Positive/Negative/Zero/Undefined]"
//     - Display: "Interpretation: For every [run] units right, line goes [up/down] [rise] units"
//
//     - Input section for practice:
//       - "Enter Point A: (" [input] "," [input] ")"
//       - "Enter Point B: (" [input] "," [input] ")"
//       - Button: "Plot Points"
//       - "Your slope calculation: " [input box]
//       - Button: "Check Answer"
//
//     - Preset examples:
//       - Button: "Steep positive" (e.g., m = 5)
//       - Button: "Gentle positive" (e.g., m = 0.5)
//       - Button: "Steep negative" (e.g., m = −4)
//       - Button: "Gentle negative" (e.g., m = −0.25)
//       - Button: "Horizontal" (m = 0)
//       - Button: "Vertical" (m = undefined)
//       - Button: "Random"
//
//     - Checkboxes:
//       - "Show rise and run triangle"
//       - "Show slope calculation"
//       - "Show full line extension"
//       - "Show direction indicators"
//
//     Default parameters:
//     - Point A: (1, 2)
//     - Point B: (5, 6)
//     - Slope: 1
//     - All visual aids enabled
//
//     Behavior:
//     - Users can drag either point anywhere on the grid
//     - As points move, rise/run triangle updates in real-time
//     - Slope calculation updates automatically
//     - Slope type identification updates (positive/negative/zero/undefined)
//     - Visual feedback:
//       - Positive slope: line and triangle shaded green
//       - Negative slope: line and triangle shaded red
//       - Zero slope: line and triangle shaded yellow
//       - Undefined slope: vertical line shaded orange, triangle not shown
//     - When user enters points manually:
//       - Points jump to specified locations with animation
//       - Line and calculations update
//     - When user calculates slope manually and clicks "Check Answer":
//       - Compare to correct slope
//       - Show green "Correct!" or red "Incorrect. The slope is [value]"
//     - Preset buttons set specific slope examples instantly
//     - Random button generates two random integer points
//
//     Special handling:
//     - When points are very close, zoom in automatically
//     - When slope is undefined, display clear message: "Vertical line: slope is undefined (division by zero)"
//     - When slope is zero, emphasize horizontal nature: "Horizontal line: slope is zero (no rise)"
//     - Display slope as fraction when possible (e.g., "3/2" instead of "1.5")
//
//     Implementation notes:
//     - Use p5.js for rendering
//     - Implement draggable points with collision detection
//     - Calculate slope with proper handling of special cases (vertical/horizontal)
//     - Draw rise/run triangle using lines or shapes
//     - Use color coding consistently throughout
//     - Format slope display: show as fraction, decimal, or "undefined"
//     - Add smooth transitions when switching between preset examples
