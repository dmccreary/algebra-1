---
title: Properties Practice Interactive Game
description: Properties Practice Interactive Game
status: scaffold
library: TBD
bloom_level: TBD
---

# Properties Practice Interactive Game



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md).

```text
Type: microsim

    Learning objective: Identify and apply mathematical properties in various equations and expressions

    Canvas layout (900x600px):
    - Main area (900x450): Game interface
    - Bottom area (900x150): Feedback and controls

    Visual elements:
    - Question display showing an equation or expression
    - Multiple choice buttons for property identification
    - Score display
    - Lives/attempts remaining (3 hearts)
    - Level indicator
    - Visual feedback (confetti for correct, shake for incorrect)

    Game mechanics:
    - Present an equation demonstrating a property
    - Student identifies which property is shown
    - Immediate feedback with explanation
    - Progressive difficulty (starts with simple, adds complexity)
    - Point system: +10 for correct first try, +5 for second try
    - Lose a life for wrong answer (but get explanation)

    Sample questions by difficulty:

    Level 1 (Direct application):
    - "Which property: 3 + 7 = 7 + 3?" → Commutative (Addition)
    - "Which property: 5 × 1 = 5?" → Identity (Multiplication)

    Level 2 (With variables):
    - "Which property: x + 0 = x?" → Identity (Addition)
    - "Which property: 2(x + 3) = 2x + 6?" → Distributive

    Level 3 (Recognition in context):
    - "Which property justifies: (2 × 3) × 4 = 2 × (3 × 4)?" → Associative (Multiplication)
    - "Which property: y + (-y) = 0?" → Inverse (Addition)

    Interactive controls:
    - Five buttons for property choices:
      1. Commutative
      2. Associative
      3. Distributive
      4. Identity
      5. Inverse
    - "Hint" button (costs 2 points)
    - "Next Question" button
    - "Reset Game" button

    Default parameters:
    - Starting level: 1
    - Questions per level: 5
    - Lives: 3
    - Score: 0

    Behavior:
    - When answer selected, show if correct with color coding
    - If correct: green highlight, show brief explanation, add points
    - If incorrect: red highlight, show correct answer and explanation, lose a life
    - Progress bar shows questions completed in current level
    - Level up after completing 5 questions correctly
    - Game over when all lives lost (but can restart)

    Feedback examples:
    - Correct: "✓ Correct! This is the Commutative Property of Addition. Order doesn't matter!"
    - Incorrect: "✗ Not quite. This is the Identity Property—adding 0 doesn't change the value."

    Implementation: p5.js with button interactions, JSON data for questions, animation library for visual feedback
```

## Related Resources

- [Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md)
