---
title: Radical Simplification Interactive Tool
description: Radical Simplification Interactive Tool
status: scaffold
library: TBD
bloom_level: TBD
---

# Radical Simplification Interactive Tool



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Exponents And Powers](../../chapters/03-exponents-and-powers/index.md).

```text
Type: microsim

    Learning objective: Learn to simplify radical expressions by identifying and extracting perfect square or perfect cube factors

    Canvas layout (850x700px):
    - Top area (850x150): Problem and input
    - Middle area (850x400): Visual factorization workspace
    - Bottom area (850x150): Answer check and feedback

    Visual elements:
    - Problem display: "Simplify: $\sqrt{72}$"
    - Factor tree visualization showing prime factorization
    - Perfect square/cube highlighting
    - Drag-and-drop interface for grouping factors
    - Visual representation of "moving factors outside"
    - Step-by-step solution display
    - Answer input area

    Interactive controls:
    - Dropdown: Choose radical type (square root, cube root)
    - Input or random generator: Number to simplify
    - Button: "Show factor tree"
    - Draggable factor tiles for grouping
    - Input: Simplified answer (e.g., "6√2")
    - Button: "Check answer"
    - Button: "Show solution"
    - Button: "New problem"

    Default parameters:
    - Radical type: Square root
    - Number: 72

    Behavior (Factor tree):
    - Display number at top
    - Branch into factors
    - Continue until all prime factors shown
    - Highlight pairs (for square roots) or triplets (for cube roots)
    - Use color to group factors:
      - Red: first perfect square/cube
      - Blue: second perfect square/cube
      - Gray: leftover factors

    Behavior (Grouping):
    - Student drags factor tiles into groups
    - Snap to position when grouped correctly
    - Automatically compute √(group) when complete
    - Show factors "jumping outside" the radical
    - Animate simplification process

    Behavior (Answer check):
    - Accept answers in form "a√b" or "a∛b"
    - Validate correctness
    - If correct: green checkmark, celebration
    - If incorrect: show where answer differs, offer hint
    - "Show solution" provides full step-by-step

    Problem types:
    - Square roots: √8, √12, √18, √20, √45, √50, √72, √98, √128, √200
    - Cube roots: ∛16, ∛54, ∛128, ∛250
    - Variables: √(x⁴), √(18a²b³)

    Visual features:
    - Factor tree with branching animation
    - Color-coded perfect squares/cubes
    - Drag-and-drop grouping interface
    - Visual "extraction" of factors from radical
    - Clear typography for mathematical notation

    Learning reinforcements:
    - Display: "Look for pairs of identical factors (for square roots)"
    - Display: "Look for triplets of identical factors (for cube roots)"
    - Hint system: "Try factoring 72 = 36 × 2"
    - Progress tracker showing mastery

    Implementation: p5.js with drag-and-drop, animation, math expression parsing, and validation
```

## Related Resources

- [Chapter 3: Exponents And Powers](../../chapters/03-exponents-and-powers/index.md)
