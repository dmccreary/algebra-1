---
title: Intercepts and Graphing Interactive Practice
description: Intercepts and Graphing Interactive Practice
status: scaffold
library: TBD
bloom_level: TBD
---

# Intercepts and Graphing Interactive Practice



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Graphing And Linear Functions](../../chapters/09-graphing-and-linear-functions/index.md).

```text
Type: microsim

    Learning objective: Help students find intercepts algebraically and use them to graph linear equations

    Canvas layout (900x650px):
    - Left side (450x650): Coordinate grid
    - Right side (450x650): Work area and controls

    Visual elements in graph area:
    - Coordinate plane from -10 to 10 on both axes
    - Line graphed based on current equation
    - X-intercept marked with red dot and label
    - Y-intercept marked with blue dot and label
    - Both intercepts connected by the line
    - Grid lines for accurate reading

    Work area (right side):
    - Current equation displayed: e.g., "$y = 3x - 6$"
    - Step-by-step solution section:

      **Finding y-intercept:**
      - "Set $x = 0$"
      - Substitution step shown
      - Result: "y-intercept = (0, b)"

      **Finding x-intercept:**
      - "Set $y = 0$"
      - Equation to solve shown
      - Solution steps
      - Result: "x-intercept = (a, 0)"

    - Student input section:
      - "Y-intercept: (" [0] "," [input box] ")"
      - "X-intercept: (" [input box] "," [0] ")"
      - Button: "Check Intercepts"
      - Feedback message area (green for correct, red for incorrect)

    Interactive controls:
    - Dropdown: "Equation type"
      Options:
      1. Slope-intercept form: $y = mx + b$
      2. Standard form: $Ax + By = C$
      3. Random
    - Button: "New Problem"
    - Button: "Show Solution" (toggles step-by-step work)
    - Checkbox: "Show intercepts on graph"
    - Checkbox: "Show line"
    - Slider: "Viewing window" (adjusts zoom)
    - Display: "Score: X/Y correct"

    Default parameters:
    - Equation: $y = 2x - 4$
    - Show intercepts: On
    - Show line: On
    - Viewing window: -10 to 10

    Behavior:
    - When "New Problem" clicked:
      - Generate random linear equation
      - Clear student inputs
      - Update graph
      - Hide solution initially
    - When student enters intercepts and clicks "Check":
      - Verify both intercepts are correct
      - If correct: Show green "Correct!" and increment score
      - If incorrect: Show red "Not quite" and highlight which intercept is wrong
      - Automatically generate new problem after 2 seconds if correct
    - "Show Solution" reveals step-by-step algebraic work
    - Graph updates in real-time with equation changes
    - Intercept markers pulse to draw attention

    Problem generation:
    - For slope-intercept: $y = mx + b$ where $m \in [-5, 5]$, $b \in [-10, 10]$, both integers
    - For standard form: $Ax + By = C$ where $A, B, C$ are integers, ensure both intercepts exist
    - Avoid trivial cases like $y = 0$ or $x = 0$

    Implementation notes:
    - Use p5.js for rendering
    - Calculate intercepts programmatically from equation
    - Plot line using two-point method
    - Validate student inputs with tolerance of 0.01 for rounding
    - Use MathJax or KaTeX for equation rendering
    - Provide hints if student struggles (after 2 wrong attempts)
```

## Related Resources

- [Chapter 9: Graphing And Linear Functions](../../chapters/09-graphing-and-linear-functions/index.md)
