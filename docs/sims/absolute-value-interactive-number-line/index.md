---
title: Absolute Value Interactive Number Line
description: Absolute Value Interactive Number Line
status: scaffold
library: TBD
bloom_level: TBD
---

# Absolute Value Interactive Number Line



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md).

```text
Type: microsim

    Learning objective: Understand absolute value as distance from zero using an interactive number line with dynamic measurement

    Canvas layout (800x400px):
    - Top area (800x300): Number line visualization
    - Bottom area (800x100): Controls and information

    Visual elements:
    - Horizontal number line from -10 to +10
    - Movable point (draggable circle) on the number line
    - Visual distance indicator: colored line segment from 0 to the point
    - Distance value displayed above the line segment
    - Equation displayed: |x| = [distance value]
    - Color coding: negative positions (red), positive positions (blue), zero (green)

    Interactive controls:
    - Slider: Position on number line (-10 to +10, step 0.5)
    - Input box: Enter a number directly
    - Draggable point: Click and drag along number line
    - Button: "Show multiple values" (displays several points simultaneously)
    - Checkbox: "Show mirror image" (shows both a and -a)

    Default parameters:
    - Initial position: -5
    - Show mirror image: false

    Behavior:
    - As point moves, distance line animates to follow
    - Distance value updates in real-time
    - Equation updates: |x| = [distance]
    - When "Show mirror image" is checked:
      - Display both points (e.g., 5 and -5)
      - Show both have same absolute value
      - Highlight symmetry around zero
    - Color of distance line changes: red for negative x, blue for positive x
    - Distance line always shows as positive length

    Visual features:
    - Measurement ticks along distance line
    - Zero point highlighted with larger marker
    - Grid background for easy counting
    - Smooth animations using lerp()

    Learning reinforcements:
    - Display: "Distance from 0 to [x] is [|x|]"
    - Display: "Note: Distance is always positive!"
    - When at mirror positions: "Notice: |a| = |-a|"

    Implementation: p5.js with mouse interaction for dragging, smooth animations, clear typography
```

## Related Resources

- [Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md)
