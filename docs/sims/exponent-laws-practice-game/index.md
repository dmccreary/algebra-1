---
title: Exponent Laws Practice Game
description: Exponent Laws Practice Game
status: scaffold
library: TBD
bloom_level: TBD
---

# Exponent Laws Practice Game



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Exponents And Powers](../../chapters/03-exponents-and-powers/index.md).

```text
Type: microsim

    Learning objective: Apply the laws of exponents to simplify expressions through interactive practice

    Canvas layout (1000x700px):
    - Top area (1000x100): Score, level, and timer
    - Middle area (1000x400): Problem display and workspace
    - Bottom area (1000x200): Answer choices and feedback

    Visual elements:
    - Large problem display (e.g., "$x^5 \cdot x^3 = ?$")
    - Visual aid showing which rule applies (highlighted)
    - Multiple choice answer buttons (4 options)
    - Score counter and streak tracker
    - Level indicator (1-5, increasing difficulty)
    - Visual feedback (green checkmark, red X)
    - Progress bar showing questions completed

    Game mechanics:
    - Present expression to simplify
    - Student selects correct simplified form
    - Immediate feedback with explanation
    - Progressive difficulty across 5 levels
    - Earn points: +15 for correct, -5 for incorrect
    - Maintain streak bonus (×2 points after 3 correct in a row)
    - Timer: 30 seconds per question (optional pressure mode)

    Problem types by level:

    Level 1 - Single rule application:
    - $x^3 \cdot x^2 = ?$ → Product Rule
    - $\frac{y^5}{y^2} = ?$ → Quotient Rule
    - $(a^2)^3 = ?$ → Power Rule

    Level 2 - Zero and negative exponents:
    - $b^0 \cdot b^3 = ?$
    - $x^{-2} \cdot x^5 = ?$
    - $(y^{-1})^3 = ?$

    Level 3 - Combined rules:
    - $\frac{x^3 \cdot x^5}{x^2} = ?$
    - $(2a^3)^2 = ?$
    - $\left(\frac{m^4}{m^2}\right)^3 = ?$

    Level 4 - Complex expressions:
    - $\frac{(x^2)^3 \cdot x^{-1}}{x^4} = ?$
    - $(3x^2y)^3 = ?$

    Level 5 - Challenge mode:
    - $\frac{(2a^{-2}b^3)^2}{(ab)^{-1}} = ?$

    Interactive controls:
    - Four answer buttons (A, B, C, D)
    - "Show hint" button (costs 5 points)
    - "Skip question" button (no penalty, but breaks streak)
    - "Next level" button (appears after completing 5 questions)
    - "Restart game" button

    Default parameters:
    - Level: 1
    - Score: 0
    - Streak: 0
    - Timer mode: off

    Behavior:
    - When answer selected:
      - If correct: Green flash, show explanation, add points, increment streak
      - If incorrect: Red flash, show correct answer with step-by-step work, subtract points, reset streak
    - "Show hint": Displays which rule(s) to apply
    - Level progression: Automatic after 5 correct answers
    - Visual celebrations for milestones (10 streak, 100 points, etc.)

    Feedback examples:
    - Correct: "✓ Perfect! Product Rule: add the exponents. $x^{5+3} = x^8$"
    - Incorrect: "✗ Not quite. Remember the Quotient Rule: subtract exponents. $\frac{y^7}{y^2} = y^{7-2} = y^5$"
    - Hint: "Hint: You have multiplication with the same base. Use the Product Rule!"

    Visual features:
    - Rule cards that highlight when relevant
    - Animated step-by-step solutions
    - Progress tracking across levels
    - Achievement badges (speed demon, perfectionist, comeback kid)

    Implementation: p5.js with button interactions, JSON question bank, animation effects, persistent score tracking
```

## Related Resources

- [Chapter 3: Exponents And Powers](../../chapters/03-exponents-and-powers/index.md)
