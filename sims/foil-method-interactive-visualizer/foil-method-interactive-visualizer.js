// FOIL Method Interactive Visualizer — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "foil-method-interactive-visualizer",
  "title": "FOIL Method Interactive Visualizer",
  "kind": "area",
  "objective": "Master the FOIL method through visual representation and practice",
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
//     Learning objective: Master the FOIL method through visual representation and practice
//
//     Canvas layout (800x600px):
//     - Top area (800x300): Visual FOIL diagram
//     - Bottom area (800x300): Practice problems and feedback
//
//     Visual elements:
//     - Two binomials displayed: $(a + b)(c + d)$
//     - Four curved arrows showing F, O, I, L connections
//     - Color-coded terms:
//       - First: blue
//       - Outer: green
//       - Inner: orange
//       - Last: red
//     - Product boxes showing each multiplication
//     - Final simplified result
//
//     Interactive controls:
//     - Input: coefficients and constants for both binomials
//     - Button: "Show FOIL process"
//     - Checkbox: "Animate step-by-step"
//     - Practice mode: random binomials to multiply
//     - Input fields for student answer
//     - Button: "Check answer"
//
//     Default parameters:
//     - First binomial: (x + 3)
//     - Second binomial: (x + 5)
//
//     Behavior:
//     - Display two binomials with clear formatting
//     - When "Show FOIL" clicked:
//       - Animate First multiplication (blue arrow)
//       - Animate Outer multiplication (green arrow)
//       - Animate Inner multiplication (orange arrow)
//       - Animate Last multiplication (red arrow)
//       - Show combining like terms
//     - In practice mode:
//       - Generate random binomials
//       - Student enters F, O, I, L products separately
//       - Then enters final simplified form
//       - Immediate feedback with color coding
//
//     Visual features:
//     - Curved arrows connecting terms
//     - Box algebra representation
//     - Terms sliding together during combining
//     - Color persistence from FOIL to final answer
//
//     Implementation: p5.js with animation, color coding, input validation
