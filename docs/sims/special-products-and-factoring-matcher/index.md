---
title: Special Products and Factoring Matcher
description: Special Products and Factoring Matcher
status: scaffold
library: TBD
bloom_level: TBD
---

# Special Products and Factoring Matcher



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Polynomial Expressions](../../chapters/04-polynomial-expressions/index.md).

```text
Type: microsim

    Learning objective: Recognize special product patterns and connect multiplication to factoring

    Canvas layout (900x650px):
    - Left panel (450x650): Factored form
    - Right panel (450x650): Expanded form
    - Center: Matching interface

    Visual elements:
    - Cards on left showing factored forms
    - Cards on right showing expanded forms
    - Drag-and-drop or click-to-connect interface
    - Pattern identification hints
    - Score and timer

    Game mechanics:
    - Display 5-8 expressions in each column
    - Student matches factored ↔ expanded forms
    - Immediate feedback on match attempt
    - Points for correct matches
    - Hints available (highlight pattern type)

    Expression types:
    - Difference of squares: $(x+3)(x-3)$ ↔ $x^2-9$
    - Perfect square trinomials: $(x+2)^2$ ↔ $x^2+4x+4$
    - GCF factoring: $3x(x-5)$ ↔ $3x^2-15x$
    - Sum/difference of cubes: $(x+2)(x^2-2x+4)$ ↔ $x^3+8$
    - General binomial: $(x+3)(x+5)$ ↔ $x^2+8x+15$

    Difficulty levels:
    - Level 1: Only one pattern type
    - Level 2: Mix of 2-3 patterns
    - Level 3: All patterns mixed
    - Level 4: Includes coefficients >1

    Interactive controls:
    - Drag from left to right to match
    - Or click two cards to connect
    - Button: "Check all"
    - Button: "Show hint"
    - Button: "New set"

    Behavior:
    - Correct match: cards stick together, green glow
    - Incorrect match: red flash, cards return
    - All matched: celebration animation, score display
    - Hint: highlights pattern type with color

    Visual features:
    - Color coding by pattern type
    - Connecting lines for matches
    - Animation when matching
    - Progress bar showing completion

    Implementation: p5.js with drag-and-drop, card matching logic, animation
```

## Related Resources

- [Chapter 4: Polynomial Expressions](../../chapters/04-polynomial-expressions/index.md)
