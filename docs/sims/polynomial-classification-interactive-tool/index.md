---
title: Polynomial Classification Interactive Tool
description: Polynomial Classification Interactive Tool
status: scaffold
library: TBD
bloom_level: TBD
---

# Polynomial Classification Interactive Tool



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Polynomial Expressions](../../chapters/04-polynomial-expressions/index.md).

```text
Type: microsim

    Learning objective: Practice identifying degree, leading coefficient, and standard form of polynomials

    Canvas layout (900x600px):
    - Top area (900x200): Polynomial display and analysis
    - Middle area (900x250): Interactive workspace
    - Bottom area (900x150): Feedback and controls

    Visual elements:
    - Large polynomial display (e.g., "$3x^2 + 5x^4 - 2x + 7$")
    - Terms highlighted individually with different colors
    - Degree indicator with visual representation
    - Leading coefficient highlighted
    - Standard form comparison display
    - Drag-and-drop term reordering interface

    Interactive features:
    - Random polynomial generator
    - Drag terms to rearrange into standard form
    - Click to identify highest degree term
    - Input fields for: degree, leading coefficient
    - Button: "Check answers"
    - Button: "Show standard form"
    - Difficulty selector (simple/medium/complex)

    Default parameters:
    - Difficulty: medium
    - Number of terms: 3-5

    Behavior:
    - Display polynomial in random order
    - Student drags terms to rearrange
    - Snap terms into standard form order
    - Highlight degree of each term
    - When "Check" clicked:
      - Verify standard form arrangement
      - Confirm degree and leading coefficient
      - Provide immediate feedback

    Visual features:
    - Color-coded exponents
    - Animated rearrangement
    - Degree visualization (stacked blocks)
    - Celebration for correct answers

    Implementation: p5.js with drag-and-drop, validation, animation
```

## Related Resources

- [Chapter 4: Polynomial Expressions](../../chapters/04-polynomial-expressions/index.md)
