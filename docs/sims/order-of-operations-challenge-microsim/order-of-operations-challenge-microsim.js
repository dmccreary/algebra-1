// Order of Operations Challenge MicroSim — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "order-of-operations-challenge-microsim",
  "title": "Order of Operations Challenge MicroSim",
  "kind": "practice",
  "objective": "Practice applying the order of operations (PEMDAS) through interactive step-by-step problem solving",
  "actionLabel": "Check / Explain",
  "aMin": -5,
  "aMax": 5,
  "aDefault": 2,
  "aStep": 1,
  "bMin": -5,
  "bMax": 5,
  "bDefault": 1,
  "bStep": 1,
  "aLabel": "Value A",
  "bLabel": "Value B",
  "choices": [
    "Multiply first",
    "Add first",
    "Work left to right"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
// Learning objective: Practice applying the order of operations (PEMDAS) through interactive step-by-step problem solving
//
// Canvas layout (1000x700px):
// - Top section (1000x150): Problem display area with large expression
// - Middle section (700x400): Step-by-step work area showing calculation stages
// - Right side (300x400): PEMDAS reference guide and controls
// - Bottom (1000x150): Input area and feedback
//
// Visual elements:
// - Large expression display with color-coded operations
// - Step-by-step visualization showing transformation at each stage
// - Animated arrows showing which operation is being performed
// - Visual PEMDAS reminder chart
// - Progress indicator showing current step
// - Score tracker and streak counter
//
// Interactive controls:
// - Dropdown: "Difficulty Level" (Easy, Medium, Hard)
// - Button: "New Problem"
// - Button: "Show Next Step" (reveals next calculation step)
// - Button: "Show Answer" (reveals full solution)
// - Input field: "Your Answer"
// - Button: "Check Answer"
// - Checkbox: "Step-by-step mode" (requires identifying next operation)
//
// Default parameters:
// - Difficulty: Easy
// - Step-by-step mode: Off
// - Starting expression: $5 + 3 \times 2$
//
// Difficulty levels:
// - Easy: 3-4 operations, parentheses, simple exponents (like $2^2$)
//   Example: $10 - 2 \times 3 + 4$
// - Medium: 4-6 operations, nested parentheses, exponents up to $3^3$
//   Example: $(8 + 2) \times 3 - 4^2 \div 2$
// - Hard: 6-8 operations, multiple nested parentheses, fractions, negative numbers
//   Example: $3 + 4 \times (2 + 3)^2 \div 5 - 2 \times 3$
//
// Behavior:
// - Display expression with operations color-coded by PEMDAS level
// - In step-by-step mode, highlight the next operation to perform
// - User selects which operation should be done next
// - System provides immediate feedback (correct/incorrect)
// - "Show Next Step" reveals and animates the next calculation
// - Expression simplifies with each step until final answer
// - Track accuracy and time for each problem
// - Provide encouraging feedback and explanations for mistakes
//
// Visual styling:
// - Parentheses: Red highlight
// - Exponents: Purple highlight
// - Multiplication/Division: Blue highlight
// - Addition/Subtraction: Green highlight
// - Current operation: Yellow animated pulse
//
// PEMDAS reference panel shows:
// - Acronym with full words
// - Memory aid: "Please Excuse My Dear Aunt Sally"
// - Icon for each operation type
// - Note: "Multiply/Divide left to right, Add/Subtract left to right"
//
// Implementation notes:
// - Use p5.js for rendering
// - Parse expressions into operation tree
// - Animate transitions between steps
// - Store problem bank for each difficulty level
// - Track student progress and common mistakes
//
// **MicroSim Recommendation:** Use **microsim-p5** (Score: 98/100). This complex educational game requires expression parsing, step-by-step animation, color-coded operation highlighting with animated transitions, input validation, score tracking, and multiple difficulty levels. P5.js provides complete control over the animation pipeline, color coding system, and interactive elements.
