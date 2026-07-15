---
title: Integer Operations on the Number Line
description: Integer Operations on the Number Line
status: scaffold
library: TBD
bloom_level: TBD
---

# Integer Operations on the Number Line



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md).

```text
Type: microsim

    Learning objective: Visualize integer addition and subtraction as movements on the number line

    Canvas layout (800x400px):
    - Top area (800x300): Drawing area showing a horizontal number line
    - Bottom area (800x100): Control panel

    Visual elements:
    - Horizontal number line from -10 to +10 with tick marks and labels
    - Current position marked with a blue circle
    - Movement arrows showing operations (green for addition, red for subtraction)
    - Start position marked with a small gray circle
    - Operation history displayed as equation

    Interactive controls:
    - Button: "Add 1" through "Add 5"
    - Button: "Subtract 1" through "Subtract 5"
    - Button: "Reset to Zero"
    - Display: Current equation (e.g., "0 + 3 - 2 + 4 = 5")
    - Display: Current position value

    Default parameters:
    - Starting position: 0
    - Number line range: -10 to +10

    Behavior:
    - When add/subtract button clicked, animate a movement arrow from current position
    - For addition, arrow points right and is green
    - For subtraction, arrow points left and is red
    - Blue circle moves smoothly to new position
    - Equation updates to show the operation
    - If movement would go beyond -10 or +10, show warning message

    Implementation: p5.js with smooth animation using lerp() for position transitions
```

## Related Resources

- [Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md)
