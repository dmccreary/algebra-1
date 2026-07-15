// Special Lines Explorer: Horizontal and Vertical — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "special-lines-explorer-horizontal-and-vertical",
  "title": "Special Lines Explorer: Horizontal and Vertical",
  "kind": "coordinate",
  "objective": "Help students understand horizontal and vertical lines, their equations, slopes, and special properties",
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
    "Horizontal",
    "Vertical",
    "Compare"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
//     Learning objective: Help students understand horizontal and vertical lines, their equations, slopes, and special properties
//
//     Canvas layout (850x700px):
//     - Left side (500x700): Coordinate grid
//     - Right side (350x700): Controls and information panel
//
//     Visual elements in graph area:
//     - Coordinate plane from -10 to 10 on both axes
//     - One or two lines displayed (horizontal and/or vertical)
//     - Lines drawn in bold colors (red for horizontal, blue for vertical)
//     - Intercept points marked with dots
//     - Shaded region along the line to emphasize it
//     - Labels showing equation on the line itself
//
//     Control panel (right side):
//
//     **Horizontal Line Controls:**
//     - Checkbox: "Show horizontal line"
//     - Slider: "Value of b" (from -10 to 10)
//     - Display equation: "$y = b$" with actual value
//     - Display: "All points have y-coordinate = [b]"
//     - Display: "Slope = 0 (zero slope)"
//     - Display: "Y-intercept: (0, [b])"
//     - Display: "X-intercept: [None / All points if b=0]"
//     - Button: "Plot sample points" (shows several points on the line)
//
//     **Vertical Line Controls:**
//     - Checkbox: "Show vertical line"
//     - Slider: "Value of a" (from -10 to 10)
//     - Display equation: "$x = a$" with actual value
//     - Display: "All points have x-coordinate = [a]"
//     - Display: "Slope = undefined"
//     - Display: "X-intercept: ([a], 0)"
//     - Display: "Y-intercept: [None / All points if a=0]"
//     - Button: "Plot sample points" (shows several points on the line)
//
//     **Comparison Section:**
//     - Display: "Is y = [b] a function? YES ✓"
//     - Display: "Is x = [a] a function? NO ✗ (fails vertical line test)"
//     - Button: "Show vertical line test" (demonstrates test on both lines)
//     - When clicked, animates vertical line sweeping across graph:
//       - For $y = b$: intersects at most once → IS a function
//       - For $x = a$: intersects infinitely many times → NOT a function
//
//     **Practice Mode:**
//     - Button: "Quiz: Identify the line"
//     - Shows random equation like "$y = 3$" or "$x = -5$"
//     - Student clicks where line should be on graph
//     - Feedback: "Correct!" or "Not quite. Remember: y = b is horizontal"
//     - Score tracking
//
//     **Preset Examples:**
//     - Button: "X-axis" (sets $y = 0$)
//     - Button: "Y-axis" (sets $x = 0$)
//     - Button: "Both at origin" (shows $x = 0$ and $y = 0$ intersection)
//     - Button: "Random horizontal"
//     - Button: "Random vertical"
//     - Button: "Random pair"
//
//     Default parameters:
//     - Horizontal line: $y = 3$ (shown)
//     - Vertical line: $x = -2$ (shown)
//     - Both checkboxes checked
//     - Sample points not shown initially
//
//     Behavior:
//
//     **When slider moves:**
//     - Line updates position in real-time
//     - Equation display updates
//     - Intercept information updates
//     - Sample points (if shown) update to new line
//
//     **When "Plot sample points" clicked:**
//     - For horizontal line $y = b$:
//       - Plot 5 points: $(−5,b)$, $(−2,b)$, $(0,b)$, $(3,b)$, $(7,b)$
//       - Label each point
//       - Highlight that all have same y-coordinate
//     - For vertical line $x = a$:
//       - Plot 5 points: $(a,−5)$, $(a,−2)$, $(a,0)$, $(a,3)$, $(a,7)$
//       - Label each point
//       - Highlight that all have same x-coordinate
//
//     **When "Show vertical line test" clicked:**
//     - Animate a dashed vertical test line sweeping from left to right
//     - When it reaches the horizontal line $y = b$:
//       - Pause
//       - Highlight single intersection point
//       - Display: "1 intersection ✓ Function!"
//     - When it reaches the vertical line $x = a$:
//       - Pause
//       - Highlight multiple intersection points (or line overlap)
//       - Display: "Infinite intersections ✗ Not a function!"
//
//     **Quiz mode:**
//     - Display equation: "Graph this equation: $y = −4$"
//     - Student clicks where they think the line is
//     - Check if click is close to correct line position
//     - Provide feedback and explanation
//     - Track consecutive correct answers
//
//     **Special visual effects:**
//     - Horizontal line: Add left-right arrows (← →) at ends
//     - Vertical line: Add up-down arrows (↑ ↓) at ends
//     - When hovering over line, show tooltip with all properties
//     - Use color coding:
//       - Red for horizontal (like red sunset on horizon)
//       - Blue for vertical (like blue sky goes up vertically)
//     - Highlight intercepts with pulsing dots
//
//     Information displays:
//     - "Key difference:" box explaining:
//       - "Horizontal lines have equation $y = b$ (y is constant)"
//       - "Vertical lines have equation $x = a$ (x is constant)"
//     - "Slope comparison:" box showing:
//       - "Horizontal: slope = 0 (no rise)"
//       - "Vertical: slope = undefined (no run / division by zero)"
//
//     Implementation notes:
//     - Use p5.js for rendering
//     - Draw lines using line() function with extended endpoints
//     - Implement smooth slider-based line movement
//     - Use alpha blending for shaded line regions
//     - Animate vertical line test sweep using frameCount
//     - Detect clicks within tolerance zone of correct line position
//     - Store both lines' parameters independently
//     - Add visual emphasis when special cases occur (a=0 or b=0)
