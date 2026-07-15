---
title: Function Transformations Interactive Explorer
description: Function Transformations Interactive Explorer
status: scaffold
library: TBD
bloom_level: TBD
---

# Function Transformations Interactive Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md).

```text
Type: microsim

    Learning objective: Help students visualize and understand function transformations by manipulating parameters and seeing real-time graph changes

    Canvas layout (1000x700px):
    - Left side (650x700): Large coordinate grid showing both parent and transformed function
    - Right side (350x700): Control panel with sliders and information

    Visual elements in graph area:
    - Coordinate grid with axes from -10 to 10 on both axes
    - Parent function plotted in light gray (reference)
    - Transformed function plotted in thick blue
    - Vertex or key point marked with red dot
    - Grid lines for easy reading of coordinates
    - Transformation applied shown as visual annotation (arrows showing shift direction)

    Interactive controls:

    **Parent Function Selection:**
    - Dropdown: "Select parent function"
      Options:
      1. Linear: $f(x) = x$
      2. Quadratic: $f(x) = x^2$
      3. Absolute Value: $f(x) = |x|$
      4. Square Root: $f(x) = \sqrt{x}$
      5. Cubic: $f(x) = x^3$

    **Transformation Controls:**

    - Slider: "Vertical shift $(k)$"
      Range: -8 to 8
      Display: $f(x) + k$ where $k =$ [value]
      Effect: Shifts graph up (k > 0) or down (k < 0)

    - Slider: "Horizontal shift $(h)$"
      Range: -8 to 8
      Display: $f(x - h)$ where $h =$ [value]
      Effect: Shifts graph right (h > 0) or left (h < 0)
      Note displayed: "Remember: minus shifts RIGHT!"

    - Slider: "Vertical stretch $(a)$"
      Range: -3 to 3 (excluding 0, with step 0.25)
      Display: $a \cdot f(x)$ where $a =$ [value]
      Effect: Stretches vertically if $|a| > 1$, compresses if $|a| < 1$
      Note: Negative values also reflect across x-axis

    - Checkbox: "Reflect across $x$-axis"
      Effect: Multiplies function by -1

    - Checkbox: "Reflect across $y$-axis"
      Effect: Replaces $x$ with $-x$

    **Display Section:**
    - Current function equation: $g(x) = a \cdot f(x - h) + k$ with actual values
    - Transformations applied (listed in order):
      Example:
      "1. Shift right 3 units
       2. Stretch vertically by factor of 2
       3. Shift up 1 unit"

    - Key point comparison:
      Parent: $(0, 0)$ → Transformed: $(h, k)$ [or appropriate key point]

    **Buttons:**
    - "Reset all transformations" (sets all sliders to default)
    - "Random transformation" (generates random but reasonable transformation)
    - "Step-by-step mode" (applies one transformation at a time with animation)

    Default parameters:
    - Parent function: Quadratic
    - $h = 0$, $k = 0$, $a = 1$
    - No reflections
    - Viewing window: $[-10, 10] \times [-10, 10]$

    Behavior:
    - As user adjusts any slider, graph updates in real-time (smooth animation)
    - Show visual arrows indicating direction of shifts:
      - Upward arrow labeled "$+k$" for vertical shift up
      - Rightward arrow labeled "$-h$" for horizontal shift right
    - Highlight and animate the movement of key point from parent to transformed position
    - In step-by-step mode:
      - Apply transformations one at a time
      - Pause between each transformation
      - Show graph morphing from one state to next
      - Highlight which transformation is being applied
    - Color parent function gray and keep it visible for reference
    - Update equation display to show final form in standard notation
    - Provide immediate feedback on transformation description

    Advanced features:
    - Toggle: "Show intermediate transformations" (shows the graph at each step)
    - Challenge mode: Shows target graph and asks user to match it with transformations
    - Comparison mode: Display two transformed functions simultaneously

    Implementation notes:
    - Use p5.js for rendering
    - Store transformation state as object: {parentFunc, h, k, a, reflectX, reflectY}
    - Apply transformations in order: horizontal shift → stretch/compress → reflect → vertical shift
    - Animate transitions using lerp for smooth movement
    - For step-by-step mode, create transformation sequence array
    - Validate slider inputs to avoid division by zero or undefined operations
```

## Related Resources

- [Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md)
