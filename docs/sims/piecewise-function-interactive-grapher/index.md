---
title: Piecewise Function Interactive Grapher
description: Piecewise Function Interactive Grapher
status: scaffold
library: TBD
bloom_level: TBD
---

# Piecewise Function Interactive Grapher



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md).

```text
Type: microsim

    Learning objective: Help students understand piecewise functions by building, visualizing, and evaluating them interactively

    Canvas layout (900x700px):
    - Top section (900x500): Large coordinate grid
    - Bottom section (900x200): Control panel and definition builder

    Visual elements in graph area:
    - Coordinate plane with grid
    - Each "piece" of the function plotted in different color
    - Transition points between pieces marked with:
      - Closed dot (●) if point is included in that piece
      - Open circle (○) if point is excluded from that piece
    - Different pieces shown in alternating colors: blue, red, green, orange
    - Vertical dashed lines at transition points
    - Hover functionality: moving mouse shows coordinates and which piece applies

    Interactive controls:
    - Display: Current piecewise function definition (shown in mathematical notation)
    - Button: "Add piece"
    - For each piece:
      - Input field: "Rule" (e.g., "2*x + 1" or "x^2 - 3")
      - Input field: "Domain start" (e.g., "-5" or "-∞")
      - Input field: "Domain end" (e.g., "0")
      - Dropdown: "Include start?" (closed/open)
      - Dropdown: "Include end?" (closed/open)
      - Button: "Remove this piece" (trash icon)

    - Evaluation section:
      - Input field: "Evaluate at x = "
      - Display: "f(x) = " (shows result)
      - Display: "Using piece X: [rule]"

    - Preset examples dropdown:
      1. "Step function (postage)"
      2. "Absolute value as piecewise"
      3. "Tax bracket function"
      4. "Parking fee function"
      5. "Custom"

    - Button: "Clear all pieces"
    - Checkbox: "Show transition points"
    - Checkbox: "Color code pieces"

    Default parameters:
    - Preset: Absolute value as piecewise
    - Pieces:
      - Piece 1: $-x$ for $x < 0$
      - Piece 2: $x$ for $x \geq 0$
    - Viewing window: $x \in [-10, 10]$, $y \in [-10, 10]$

    Behavior:
    - As user adds/modifies pieces, graph updates in real-time
    - Warn if pieces overlap or leave gaps in domain
    - When evaluating at specific x-value:
      - Determine which piece applies
      - Highlight that piece on graph
      - Show calculation with that piece's rule
      - Display result
    - Mark discontinuities clearly with open/closed circles
    - If user selects preset example, populate with predefined pieces
    - Validate that domain intervals are properly formatted

    Example pieces for presets:

    **Preset 1: Step function (postage)**
    - $f(x) = 0.55$ for $0 < x \leq 1$
    - $f(x) = 0.75$ for $1 < x \leq 2$
    - $f(x) = 0.95$ for $2 < x \leq 3$
    - $f(x) = 1.15$ for $3 < x \leq 4$
    (where x = weight in ounces)

    **Preset 3: Tax bracket**
    - $f(x) = 0.10x$ for $0 \leq x \leq 10000$
    - $f(x) = 1000 + 0.12(x - 10000)$ for $10000 < x \leq 40000$
    - $f(x) = 4600 + 0.22(x - 40000)$ for $x > 40000$

    Implementation notes:
    - Use p5.js for rendering
    - Parse mathematical expressions using math.js library
    - Store pieces as array of objects with {rule, domainStart, domainEnd, includeStart, includeEnd}
    - Plot each piece separately with appropriate domain
    - Use filled circles for included endpoints, hollow circles for excluded
    - Implement robust interval checking for overlaps/gaps
```

## Related Resources

- [Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md)
