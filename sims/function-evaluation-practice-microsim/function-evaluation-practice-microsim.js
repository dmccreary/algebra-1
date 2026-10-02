// Function Evaluation Practice MicroSim — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "function-evaluation-practice-microsim",
  "title": "Function Evaluation Practice MicroSim",
  "kind": "function",
  "objective": "Provide interactive practice for evaluating functions at different input values",
  "actionLabel": "Check / Explain",
  "aMin": -5,
  "aMax": 5,
  "aDefault": 2,
  "aStep": 1,
  "bMin": -5,
  "bMax": 5,
  "bDefault": 1,
  "bStep": 1,
  "aLabel": "Parameter a",
  "bLabel": "Parameter b",
  "choices": [
    "Explore",
    "Practice",
    "Challenge"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
//     Learning objective: Provide interactive practice for evaluating functions at different input values
//
//     Canvas layout (800x600px):
//     - Left side (500x600): Problem display and work area
//     - Right side (300x600): Control panel and feedback
//
//     Visual elements:
//     - Display current function in large text at top: e.g., "$f(x) = 2x^2 - 3x + 1$"
//     - Show current evaluation problem: "Evaluate $f(3)$"
//     - Work area showing step-by-step evaluation:
//       - Step 1: "Substitute 3 for x: $f(3) = 2(3)^2 - 3(3) + 1$"
//       - Step 2: "Simplify exponents: $f(3) = 2(9) - 3(3) + 1$"
//       - Step 3: "Multiply: $f(3) = 18 - 9 + 1$"
//       - Step 4: "Add/subtract: $f(3) = 10$"
//     - Input box for student answer
//     - Feedback message (green for correct, red for incorrect)
//     - Running score: "X out of Y correct"
//
//     Interactive controls:
//     - Dropdown: "Function type"
//       Options:
//       1. Linear ($ax + b$)
//       2. Quadratic ($ax^2 + bx + c$)
//       3. Cubic ($ax^3 + bx^2 + cx + d$)
//       4. Absolute value ($a|x - h| + k$)
//       5. Mixed (random)
//     - Dropdown: "Difficulty"
//       Options:
//       1. Easy (single-digit positive inputs)
//       2. Medium (negative inputs, two-digit)
//       3. Hard (algebraic inputs like $2x$, $x+1$)
//     - Button: "New Problem"
//     - Button: "Show Steps" (toggles step-by-step work)
//     - Button: "Reset Score"
//     - Input field: "Your answer"
//     - Button: "Check Answer"
//
//     Default parameters:
//     - Function type: Linear
//     - Difficulty: Easy
//     - Show steps: Off initially
//
//     Behavior:
//     - Generate random function based on selected type
//     - Generate random input value based on difficulty level
//     - When "Check Answer" clicked:
//       - Compare student answer to correct answer
//       - Show green "Correct!" or red "Incorrect. The answer is X"
//       - Update score
//       - After 2 seconds, generate new problem
//     - "Show Steps" reveals complete step-by-step solution
//     - Track accuracy percentage
//
//     Implementation notes:
//     - Use p5.js for rendering
//     - Use MathJax or KaTeX for rendering equations
//     - Store function as JavaScript function for evaluation
//     - Generate random coefficients within reasonable ranges
//     - For "Hard" difficulty, include algebraic inputs and require simplified algebraic expressions as answers
