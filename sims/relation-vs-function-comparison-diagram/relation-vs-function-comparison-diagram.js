// Relation vs. Function Comparison Diagram — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "relation-vs-function-comparison-diagram",
  "title": "Relation vs. Function Comparison Diagram",
  "kind": "quiz",
  "objective": "Relation vs. Function Comparison Diagram",
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
    "Not a function",
    "Function",
    "Cannot tell"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: diagram
//
//     Purpose: Visually distinguish between relations that are functions and relations that are not functions
//
//     Layout: Two side-by-side diagrams using mapping notation (arrows from domain to range)
//
//     Left diagram - "This IS a Function":
//     - Domain set (left): {1, 2, 3, 4}
//     - Range set (right): {2, 4, 6, 8}
//     - Arrows: 1→2, 2→4, 3→6, 4→8
//     - Each domain element has exactly one arrow
//     - Label: "Each input has exactly ONE output"
//     - Color: Green border
//
//     Right diagram - "This is NOT a Function":
//     - Domain set (left): {1, 2, 3}
//     - Range set (right): {1, 2, 3, 5}
//     - Arrows: 1→1, 1→2, 2→3, 3→5
//     - Note that element 1 has two arrows
//     - Label: "Input 1 has TWO outputs!"
//     - Color: Red border
//     - Highlight the problematic element 1 with a red circle
//
//     Visual style: Clean mapping diagram with oval shapes for sets
//     Color scheme: Green for valid function, red for invalid
//
//     Implementation: SVG or HTML/CSS diagram
