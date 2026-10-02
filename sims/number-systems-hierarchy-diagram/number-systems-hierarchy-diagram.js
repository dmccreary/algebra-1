// Number Systems Hierarchy Diagram — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "number-systems-hierarchy-diagram",
  "title": "Number Systems Hierarchy Diagram",
  "kind": "hierarchy",
  "objective": "Number Systems Hierarchy Diagram",
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
    "Explore",
    "Practice",
    "Challenge"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: diagram
//
//     Purpose: Show how different number systems are nested within each other, from natural numbers to real numbers
//
//     Components to show:
//     - Concentric rectangles or ovals representing each number system
//     - Innermost: Natural Numbers (N) - {1, 2, 3, ...}
//     - Second layer: Whole Numbers (W) - {0, 1, 2, 3, ...}
//     - Third layer: Integers (Z) - {..., -2, -1, 0, 1, 2, ...}
//     - Fourth layer: Rational Numbers (Q) - all fractions p/q
//     - Outermost: Real Numbers (R) - all numbers on the number line
//     - Separate region within Real but outside Rational: Irrational Numbers (I)
//
//     Connections:
//     - Arrows showing "is a subset of" relationships (⊂)
//     - Labels: N ⊂ W ⊂ Z ⊂ Q ⊂ R
//
//     Example elements in each region:
//     - Natural numbers: 1, 2, 3, 15
//     - Whole numbers only: 0
//     - Integers only: -5, -12
//     - Rational numbers only: 1/2, 0.75, -2/3
//     - Irrational numbers: π, √2, e
//
//     Style: Venn diagram style with nested regions, each with a different pastel color
//     - Natural: light yellow
//     - Whole: light green
//     - Integers: light blue
//     - Rational: light purple
//     - Real: light gray background
//     - Irrational: orange accent (separate region)
//
//     Labels:
//     - Clear text labels for each number system
//     - Mathematical notation for each set (N, W, Z, Q, R, I)
//     - "⊂" symbols between layers
//     - Examples of numbers in each category
//
//     Color scheme: Progressive shading from warm (inner) to cool (outer) colors
//
//     Implementation: SVG or canvas-based diagram with clear layering
