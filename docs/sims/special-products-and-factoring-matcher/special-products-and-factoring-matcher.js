// Special Products and Factoring Matcher — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "special-products-and-factoring-matcher",
  "title": "Special Products and Factoring Matcher",
  "kind": "quiz",
  "objective": "Recognize special product patterns and connect multiplication to factoring",
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
    "Perfect square",
    "Difference of squares",
    "Prime polynomial"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
//     Learning objective: Recognize special product patterns and connect multiplication to factoring
//
//     Canvas layout (900x650px):
//     - Left panel (450x650): Factored form
//     - Right panel (450x650): Expanded form
//     - Center: Matching interface
//
//     Visual elements:
//     - Cards on left showing factored forms
//     - Cards on right showing expanded forms
//     - Drag-and-drop or click-to-connect interface
//     - Pattern identification hints
//     - Score and timer
//
//     Game mechanics:
//     - Display 5-8 expressions in each column
//     - Student matches factored ↔ expanded forms
//     - Immediate feedback on match attempt
//     - Points for correct matches
//     - Hints available (highlight pattern type)
//
//     Expression types:
//     - Difference of squares: $(x+3)(x-3)$ ↔ $x^2-9$
//     - Perfect square trinomials: $(x+2)^2$ ↔ $x^2+4x+4$
//     - GCF factoring: $3x(x-5)$ ↔ $3x^2-15x$
//     - Sum/difference of cubes: $(x+2)(x^2-2x+4)$ ↔ $x^3+8$
//     - General binomial: $(x+3)(x+5)$ ↔ $x^2+8x+15$
//
//     Difficulty levels:
//     - Level 1: Only one pattern type
//     - Level 2: Mix of 2-3 patterns
//     - Level 3: All patterns mixed
//     - Level 4: Includes coefficients >1
//
//     Interactive controls:
//     - Drag from left to right to match
//     - Or click two cards to connect
//     - Button: "Check all"
//     - Button: "Show hint"
//     - Button: "New set"
//
//     Behavior:
//     - Correct match: cards stick together, green glow
//     - Incorrect match: red flash, cards return
//     - All matched: celebration animation, score display
//     - Hint: highlights pattern type with color
//
//     Visual features:
//     - Color coding by pattern type
//     - Connecting lines for matches
//     - Animation when matching
//     - Progress bar showing completion
//
//     Implementation: p5.js with drag-and-drop, card matching logic, animation
