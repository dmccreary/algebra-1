---
title: Domain and Range Interactive Visualizer
description: Domain and Range Interactive Visualizer
status: scaffold
library: TBD
bloom_level: TBD
---

# Domain and Range Interactive Visualizer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md).

```text
Type: microsim

    Learning objective: Help students visualize domain and range for various function types and understand restrictions

    Canvas layout (900x600px):
    - Left side (600x600): Coordinate grid with graph
    - Right side (300x600): Control panel and information

    Visual elements in main area:
    - Coordinate plane with adjustable viewing window
    - Function graph plotted in blue
    - Domain highlighted on x-axis with thick line (green if all reals, orange if restricted)
    - Range highlighted on y-axis with thick line (green if all reals, orange if restricted)
    - Restriction points marked with open circles (excluded) or closed dots (included)
    - Asymptotes shown as dashed red lines when applicable

    Interactive controls:
    - Dropdown: "Select function type"
      Options:
      1. Linear: $f(x) = mx + b$
      2. Quadratic: $f(x) = ax^2 + bx + c$
      3. Absolute value: $f(x) = a|x - h| + k$
      4. Square root: $f(x) = \sqrt{ax + b}$
      5. Reciprocal: $f(x) = \frac{a}{x - h} + k$
      6. Rational: $f(x) = \frac{ax + b}{cx + d}$
      7. Custom (enter your own)

    - Sliders for function parameters (vary based on selected type):
      - For linear: $m$ (slope), $b$ (intercept)
      - For quadratic: $a$, $b$, $c$
      - For others: relevant parameters

    - Display: "Domain: " (in both set notation and interval notation)
    - Display: "Range: " (in both set notation and interval notation)
    - Display: "Restrictions explained: " (text explaining why domain/range are limited)

    - Checkbox: "Show domain on x-axis"
    - Checkbox: "Show range on y-axis"
    - Checkbox: "Show asymptotes"
    - Checkbox: "Highlight restrictions"

    - Button: "Random function" (generates random coefficients)
    - Button: "Reset view"

    Default parameters:
    - Function type: Quadratic
    - Function: $f(x) = x^2$
    - Viewing window: $x \in [-10, 10]$, $y \in [-10, 10]$
    - All checkboxes: checked

    Behavior:
    - When user changes function type or parameters, immediately:
      - Replot the graph
      - Calculate and display domain
      - Calculate and display range
      - Update highlighting on axes
      - Show restriction explanations
    - Hovering over highlighted domain shows tooltip: "Valid inputs"
    - Hovering over highlighted range shows tooltip: "Possible outputs"
    - Hovering over restriction points shows reason (e.g., "Division by zero")
    - Users can zoom in/out with mouse wheel
    - Users can pan by dragging graph

    Domain/Range calculation logic:
    - For rational functions: exclude x-values making denominator zero
    - For square root functions: require radicand ≥ 0
    - For each function type, calculate range by analyzing:
      - Vertex (for parabolas)
      - Asymptotic behavior (for rational)
      - Starting point (for square root)

    Implementation notes:
    - Use p5.js for rendering
    - Use mathematical interval class to represent domain/range
    - Plot functions using parametric approach with sufficient sampling
    - Detect asymptotes by looking for discontinuities
    - Color code: green = unrestricted, orange = restricted, red = excluded
```

## Related Resources

- [Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md)
