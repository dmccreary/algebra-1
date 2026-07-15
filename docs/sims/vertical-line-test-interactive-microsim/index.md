---
title: Vertical Line Test Interactive MicroSim
description: Vertical Line Test Interactive MicroSim
status: scaffold
library: TBD
bloom_level: TBD
---

# Vertical Line Test Interactive MicroSim



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md).

```text
Type: microsim

    Learning objective: Help students understand and apply the vertical line test to determine if a graph represents a function

    Canvas layout (800x500px):
    - Main drawing area (650x500): Graph with coordinate plane
    - Control panel (150x500): Interactive controls on right side

    Visual elements in main area:
    - Coordinate grid with x-axis from -5 to 5 and y-axis from -5 to 5
    - Pre-loaded graph (user-selectable from dropdown)
    - Moveable vertical line (dashed red) that user can drag horizontally
    - Intersection points highlighted as yellow circles when vertical line crosses graph
    - Result text at bottom: "This IS a function" (green) or "This is NOT a function" (red)

    Interactive controls:
    - Dropdown: "Select Graph"
      Options:
      1. "Linear function: y = 2x + 1"
      2. "Parabola: y = x²"
      3. "Circle: x² + y² = 9" (NOT a function)
      4. "Absolute value: y = |x|"
      5. "Sideways parabola: x = y²" (NOT a function)
      6. "Piecewise function"
    - Slider: "Move vertical line" (-5 to 5)
    - Button: "Auto-scan" (animates vertical line sweeping across graph)
    - Display: "Intersection count: X points"
    - Checkbox: "Show all intersections" (highlights all intersection points at current x-value)

    Default parameters:
    - Selected graph: Linear function
    - Vertical line position: x = 0
    - Auto-scan speed: 30 frames per second

    Behavior:
    - As user drags vertical line, count intersections in real-time
    - Highlight intersection points with yellow circles
    - If any position has >1 intersection, display "NOT a function" in red
    - If all positions have ≤1 intersection, display "IS a function" in green
    - Auto-scan mode sweeps line from left to right, pausing briefly when multiple intersections found

    Implementation notes:
    - Use p5.js for rendering
    - Define each graph as a mathematical function or parametric curve
    - Calculate intersections by checking y-values at current x-position
    - For circle and sideways parabola, show multiple y-values for same x
```

## Related Resources

- [Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md)
