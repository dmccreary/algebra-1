---
title: Like Terms Matching Game MicroSim
description: Help students practice identifying and combining like terms through an interactive matching and simplification game
status: scaffold
library: TBD
bloom_level: TBD
---

# Like Terms Matching Game MicroSim



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations Of Algebra](../../chapters/01-foundations-of-algebra/index.md).

```text
Type: microsim

Learning objective: Help students practice identifying and combining like terms through an interactive matching and simplification game

Canvas layout (1000x700px):
- Top section (1000x100): Instructions and score display
- Main area (1000x500): Two-column matching interface or expression simplification area
- Bottom section (1000x100): Feedback area and controls

Game modes (selectable):
1. **Matching Mode**: Drag-and-drop matching of like terms
2. **Simplification Mode**: Combine like terms in expressions
3. **Challenge Mode**: Timed expression simplification

Visual elements for Matching Mode:
- Left column: 8-10 terms in boxes (e.g., $3x$, $5y$, $-2x$, $7$, $4y$, $x^2$, $-8$, $2x^2$)
- Right column: Empty "buckets" labeled "x terms", "y terms", "x² terms", "constants"
- Terms can be dragged to appropriate buckets
- Correct matches turn green, incorrect turn red with shake animation
- Connecting lines show which terms can combine

Visual elements for Simplification Mode:
- Display an unsimplified expression: $4x + 3 - 2x + 5 + x - 1$
- Color-code like terms with matching highlight colors
- Show work area where terms can be grouped
- Input field for final simplified answer
- Step-by-step verification available

Interactive controls:
- Dropdown: "Game Mode" (Matching, Simplification, Challenge)
- Dropdown: "Difficulty" (Easy, Medium, Hard)
- Button: "New Problem"
- Button: "Show Hint" (highlights one set of like terms)
- Button: "Check Answer"
- Button: "Show Solution"
- Timer display (for Challenge Mode)
- Score and accuracy tracker

Default parameters:
- Mode: Matching
- Difficulty: Easy
- Time limit (Challenge): 60 seconds

Difficulty levels:
- Easy: 2 variables (x, y), constants, 6-8 terms total
- Medium: 3 variables, exponents ($x^2$), 8-12 terms, some negative coefficients
- Hard: 4+ variables, various exponents, 10-15 terms, negative coefficients, fractions

Behavior - Matching Mode:
- User drags terms to buckets
- Immediate feedback on correct/incorrect placement
- Once all terms correctly sorted, show combined results
- Visual animation of coefficient addition
- Confetti or celebration on completion

Behavior - Simplification Mode:
- Display expression with terms in random order
- User can click terms to highlight/group them
- Color coding shows which terms are like terms
- Input simplified expression
- System checks coefficient addition and final form
- Provide specific feedback on errors

Behavior - Challenge Mode:
- Present 5 expressions to simplify within time limit
- Increasing difficulty with each correct answer
- Point multiplier for speed
- Streak bonuses for consecutive correct answers
- Leaderboard showing personal best

Visual styling:
- Draggable terms: Cards with shadows and hover effects
- Like terms: Matching background colors (blue, green, orange, purple)
- Correct answers: Green glow animation
- Incorrect answers: Red shake animation
- Clean, modern interface with clear typography

Feedback messages:
- Correct: "Great job! $5x + 2x = 7x$"
- Incorrect: "Not quite. Remember, $x$ and $x^2$ are not like terms."
- Hint: "Look for terms with the same variable and exponent."
- Completion: "Excellent! You simplified the expression correctly!"

Implementation notes:
- Use p5.js for rendering and interaction
- Implement drag-and-drop with mouse/touch support
- Generate random expressions with controlled complexity
- Parse expressions and identify like terms programmatically
- Store terms as objects with coefficient, variable, and exponent properties
- Track timing, accuracy, and completion metrics

**MicroSim Recommendation:** Use **microsim-p5** (Score: 96/100). This sophisticated educational game requires drag-and-drop interaction, multiple game modes, color-coded term matching, animations (shake, glow, confetti), and complex state management. P5.js provides full control over drag-and-drop mechanics, animation effects, term parsing, and game state.
```

## Related Resources

- [Chapter 1: Foundations Of Algebra](../../chapters/01-foundations-of-algebra/index.md)
