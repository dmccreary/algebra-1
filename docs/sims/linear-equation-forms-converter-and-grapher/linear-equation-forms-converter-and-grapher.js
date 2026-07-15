// Linear Equation Forms Converter and Grapher — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "linear-equation-forms-converter-and-grapher",
  "title": "Linear Equation Forms Converter and Grapher",
  "kind": "coordinate",
  "objective": "Help students convert between different forms of linear equations and understand when each form is most useful",
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
//     Learning objective: Help students convert between different forms of linear equations and understand when each form is most useful
//
//     Canvas layout (1000x750px):
//     - Top (1000x550): Three panels side by side (330px each) showing the three forms
//     - Middle (1000x50): Conversion controls
//     - Bottom left (500x150): Coordinate graph
//     - Bottom right (500x150): Information and interpretation panel
//
//     Three form panels (top row):
//
//     **Panel 1: Slope-Intercept Form**
//     - Header: "Slope-Intercept Form"
//     - Display: "$y = mx + b$"
//     - Input fields: "$y =$ [m input] $x +$ [b input]"
//     - Or: "Slope $m =$ [input]" and "Y-intercept $b =$ [input]"
//     - Display current values: "Slope = [value]", "Y-intercept = (0, [value])"
//     - Button: "Set as primary"
//     - Visual indicator when this is the primary form (highlighted border)
//
//     **Panel 2: Point-Slope Form**
//     - Header: "Point-Slope Form"
//     - Display: "$y - y_1 = m(x - x_1)$"
//     - Input fields: "$y -$ [y₁ input] $= $ [m input] $(x -$ [x₁ input] $)$"
//     - Or: "Point: (" [x₁ input] "," [y₁ input] ") and Slope: " [m input]
//     - Display current values: "Point = ([x₁], [y₁])", "Slope = [m]"
//     - Button: "Set as primary"
//     - Visual indicator when this is the primary form
//
//     **Panel 3: Standard Form**
//     - Header: "Standard Form"
//     - Display: "$Ax + By = C$"
//     - Input fields: [A input] "$x +$" [B input] "$y =$" [C input]
//     - Display current values: "A = [value]", "B = [value]", "C = [value]"
//     - Button: "Set as primary"
//     - Note displayed: "A, B, C should be integers; A ≥ 0"
//     - Visual indicator when this is the primary form
//
//     Conversion controls (middle section):
//     - Dropdown: "Start with form:" [Slope-Intercept / Point-Slope / Standard]
//     - Button: "Convert to all forms" (shows step-by-step conversion)
//     - Button: "New random equation"
//     - Display: "Conversion steps shown below ↓"
//
//     Graph area (bottom left):
//     - Small coordinate grid (-10 to 10)
//     - Line plotted based on current equation
//     - Intercepts marked
//     - Slope triangle shown
//     - Key point from point-slope form marked (if applicable)
//
//     Information panel (bottom right):
//     - "Current line characteristics:"
//     - "Slope: [value] → [interpretation: rising/falling/horizontal/vertical]"
//     - "X-intercept: ([value], 0)"
//     - "Y-intercept: (0, [value])"
//     - "Passes through: ([x₁], [y₁])" (from point-slope)
//     - "When to use each form:" [shows context-sensitive advice]
//
//     Default parameters:
//     - Primary form: Slope-intercept
//     - Equation: $y = 2x + 3$
//     - Corresponding forms auto-calculated
//
//     Behavior:
//
//     **When user enters values in any form:**
//     - Equation updates
//     - Graph updates in real-time
//     - Other two forms auto-calculate and display
//     - Information panel updates
//
//     **When "Convert to all forms" is clicked:**
//     - Show step-by-step conversion animation
//     - Display algebraic steps for each conversion
//     - Highlight the algebra being performed at each step
//     - Sequence:
//       1. Show starting form (highlighted)
//       2. Show first conversion step
//       3. Show result in second form (highlighted)
//       4. Show conversion to third form
//       5. Show final result (highlighted)
//
//     **When "New random equation" is clicked:**
//     - Generate random linear equation
//     - Display in currently selected primary form
//     - Auto-calculate other forms
//     - Update graph
//
//     **Conversion step displays:**
//
//     Example: Slope-intercept to Standard
//
//     Starting: $y = 2x + 3$
//     Step 1: Subtract $2x$ from both sides: $-2x + y = 3$
//     Step 2: Multiply by $-1$ to make A positive: $2x - y = -3$
//     Result (Standard form): $2x - y = -3$
//
//     Example: Point-slope to Slope-intercept
//
//     Starting: $y - 5 = 2(x - 3)$
//     Step 1: Distribute: $y - 5 = 2x - 6$
//     Step 2: Add 5 to both sides: $y = 2x - 1$
//     Result (Slope-intercept): $y = 2x - 1$
//
//     Special features:
//     - Quiz mode: Show equation in one form, ask student to convert to another form
//     - Validation: Check that standard form uses integers and A ≥ 0
//     - Highlighting: When user hovers over a form, corresponding parts highlight on graph
//       - Hover over slope → slope triangle highlights
//       - Hover over y-intercept → y-intercept point highlights
//       - Hover over point in point-slope → that point highlights on graph
//     - Comparison mode: Display two different equations and compare slopes, intercepts
//
//     Implementation notes:
//     - Use p5.js for graph rendering
//     - Implement algebraic conversion algorithms for all form pairs
//     - Validate inputs to ensure equations are valid
//     - Use MathJax or KaTeX for equation rendering
//     - Store internal representation as slope-intercept, convert as needed
//     - Handle special cases: vertical lines (cannot be in slope-intercept), horizontal lines
//     - Display fractions in lowest terms when possible
//     - Provide undo/redo functionality for equation changes
