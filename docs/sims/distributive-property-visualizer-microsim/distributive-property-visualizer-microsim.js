// Distributive Property Visualizer MicroSim — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "distributive-property-visualizer-microsim",
  "title": "Distributive Property Visualizer MicroSim",
  "kind": "area",
  "objective": "Visualize the distributive property using area models and step-by-step algebraic expansion",
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
// Learning objective: Visualize the distributive property using area models and step-by-step algebraic expansion
//
// Canvas layout (900x700px):
// - Top (900x100): Problem display and mode selector
// - Left side (450x500): Visual area model representation
// - Right side (450x500): Algebraic step-by-step solution
// - Bottom (900x100): Controls and input area
//
// Visual elements - Area Model:
// - Rectangle divided into sections representing multiplication
// - For $3(x + 5)$:
//   - Vertical side labeled "3"
//   - Horizontal side divided into two sections: "x" and "5"
//   - Rectangle divided showing two areas: "3x" and "15"
// - Color coding: Variable areas in blue, constant areas in orange
// - Dimensions labeled clearly
// - Areas labeled with expressions
//
// Visual elements - Algebraic:
// - Step-by-step expansion shown with arrows
// - Original expression at top
// - Intermediate step showing distribution
// - Final expanded form at bottom
// - Color coding matching area model
//
// Interactive controls:
// - Input: "Factor outside parentheses" (e.g., 3, -2, x)
// - Input: "First term inside" (e.g., x, 2y, 3)
// - Input: "Second term inside" (e.g., 5, -2, x)
// - Button: "Generate Random Problem"
// - Dropdown: "Problem Type" (Numeric, Single Variable, Two Variables)
// - Slider: "Animation Speed" (slow to fast)
// - Button: "Show Next Step" (step through expansion)
// - Button: "Animate Full Solution"
// - Checkbox: "Show Area Model"
//
// Default parameters:
// - Problem: $3(x + 5)$
// - Problem Type: Single Variable
// - Animation Speed: Medium
// - Show Area Model: Checked
//
// Problem types:
// - Numeric: $4(3 + 2)$ → area model with numbers only
// - Single Variable: $3(x + 5)$, $-2(y - 4)$ → one variable
// - Two Variables: $2(3x + 4y)$, $x(x + 7)$ → multiple variables or exponents
//
// Behavior - Area Model:
// - Draw rectangle with animated dimensions
// - Divide rectangle according to terms
// - Fill each section with color and label
// - Animate the "sweeping" of distributed factor across terms
// - Show area calculations for each section
// - Highlight how areas add to total
//
// Behavior - Algebraic Steps:
// - Display original expression: $3(x + 5)$
// - Show distribution arrows: $3 \times x$ and $3 \times 5$
// - Animate each multiplication
// - Display intermediate: $3x + 15$
// - Highlight final answer
//
// Behavior - Animation:
// - Sync visual and algebraic representations
// - Pulse/glow effect on current operation
// - Smooth transitions between steps
// - Option to pause/play at any point
//
// Special cases to demonstrate:
// - Positive factor: $3(x + 2) = 3x + 6$
// - Negative factor: $-2(x + 5) = -2x - 10$
// - Subtraction inside: $4(x - 3) = 4x - 12$
// - Variable factor: $x(x + 4) = x^2 + 4x$
//
// Practice mode:
// - Show problem and area model
// - Student fills in blanks for expanded form
// - Immediate feedback on each term
// - Visual confirmation in area model
//
// Visual styling:
// - Clean geometric area models with clear labels
// - Color-coded sections (blue for variables, orange for constants)
// - Large, readable algebraic notation
// - Animated arrows showing distribution
// - Grid background for area model
//
// Implementation notes:
// - Use p5.js for rendering
// - Draw dynamic rectangles based on expression complexity
// - Parse input expressions to generate appropriate models
// - Implement smooth animations with easing
// - Support negative values with special visual treatment (different colors/patterns)
//
// **MicroSim Recommendation:** Use **microsim-p5** (Score: 97/100). This specification requires synchronized visual (area model rectangles) and algebraic (step-by-step equations) representations with animations showing the distribution process. P5.js excels at creating custom geometric visualizations with precise control over rectangle dimensions, labels, color coding, and animation timing.
