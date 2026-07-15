// Interactive Coordinate Plane Explorer — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "interactive-coordinate-plane-explorer",
  "title": "Interactive Coordinate Plane Explorer",
  "kind": "coordinate",
  "objective": "Help students understand the structure of the coordinate plane, including quadrants, axes, origin, and point location",
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
//     Learning objective: Help students understand the structure of the coordinate plane, including quadrants, axes, origin, and point location
//
//     Canvas layout (700x700px):
//     - Main coordinate grid (650x650): Centered coordinate plane
//     - Control panel (650x50): Bottom panel with controls
//
//     Visual elements in main area:
//     - Coordinate grid from -10 to 10 on both axes
//     - Bold axes lines for x-axis and y-axis (different color from grid)
//     - Origin marked with large dot and label "(0, 0)"
//     - Quadrants labeled with Roman numerals I, II, III, IV
//     - Each quadrant shaded with different subtle color:
//       - Quadrant I: light blue
//       - Quadrant II: light green
//       - Quadrant III: light yellow
//       - Quadrant IV: light pink
//     - Moveable point that user can drag anywhere on the plane
//     - Current point coordinates displayed prominently
//     - Dotted lines from point to both axes showing x and y values
//
//     Interactive controls:
//     - Display: "Point coordinates: (x, y)"
//     - Display: "Quadrant: [I, II, III, IV, or on axis]"
//     - Display: "x-coordinate: [value]" with color-coded bar
//     - Display: "y-coordinate: [value]" with color-coded bar
//     - Input fields: "Enter x:" and "Enter y:" with "Plot" button
//     - Button: "Random point" (generates random coordinates)
//     - Button: "Quiz mode" (challenges user to plot given point)
//     - Checkbox: "Show quadrant shading"
//     - Checkbox: "Show grid lines"
//     - Checkbox: "Show reference lines from point"
//
//     Default parameters:
//     - Point at (3, 4)
//     - All visual aids enabled
//     - Grid from -10 to 10
//
//     Behavior:
//     - User can drag point anywhere on coordinate plane
//     - As point moves, coordinates update in real-time
//     - Quadrant identification updates automatically
//     - Reference lines show distance from axes
//     - When user enters coordinates, point jumps to that location with smooth animation
//     - Quiz mode presents coordinate like "(−3, 5)" and checks if user plots correctly
//     - Color code coordinates: positive = green, negative = red, zero = black
//     - Hover over quadrant labels shows rules: "Q1: x > 0, y > 0"
//
//     Quiz mode specifics:
//     - Display target coordinates: "Plot the point (−2, 3)"
//     - User drags point to location
//     - When user clicks "Check answer":
//       - If within 0.5 units: "Correct!" (green)
//       - Otherwise: "Try again" with hint about which coordinate is wrong
//     - Track score: "X out of Y correct"
//
//     Implementation notes:
//     - Use p5.js for rendering
//     - Implement smooth dragging with mousePressed, mouseDragged, mouseReleased
//     - Map pixel coordinates to mathematical coordinates
//     - Use lerp for smooth point animations
//     - Implement collision detection for "Check answer" in quiz mode
