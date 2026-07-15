---
title: Interactive Coordinate Plane Explorer
description: Interactive Coordinate Plane Explorer
status: scaffold
library: TBD
bloom_level: TBD
---

# Interactive Coordinate Plane Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Graphing And Linear Functions](../../chapters/09-graphing-and-linear-functions/index.md).

```text
Type: microsim

    Learning objective: Help students understand the structure of the coordinate plane, including quadrants, axes, origin, and point location

    Canvas layout (700x700px):
    - Main coordinate grid (650x650): Centered coordinate plane
    - Control panel (650x50): Bottom panel with controls

    Visual elements in main area:
    - Coordinate grid from -10 to 10 on both axes
    - Bold axes lines for x-axis and y-axis (different color from grid)
    - Origin marked with large dot and label "(0, 0)"
    - Quadrants labeled with Roman numerals I, II, III, IV
    - Each quadrant shaded with different subtle color:
      - Quadrant I: light blue
      - Quadrant II: light green
      - Quadrant III: light yellow
      - Quadrant IV: light pink
    - Moveable point that user can drag anywhere on the plane
    - Current point coordinates displayed prominently
    - Dotted lines from point to both axes showing x and y values

    Interactive controls:
    - Display: "Point coordinates: (x, y)"
    - Display: "Quadrant: [I, II, III, IV, or on axis]"
    - Display: "x-coordinate: [value]" with color-coded bar
    - Display: "y-coordinate: [value]" with color-coded bar
    - Input fields: "Enter x:" and "Enter y:" with "Plot" button
    - Button: "Random point" (generates random coordinates)
    - Button: "Quiz mode" (challenges user to plot given point)
    - Checkbox: "Show quadrant shading"
    - Checkbox: "Show grid lines"
    - Checkbox: "Show reference lines from point"

    Default parameters:
    - Point at (3, 4)
    - All visual aids enabled
    - Grid from -10 to 10

    Behavior:
    - User can drag point anywhere on coordinate plane
    - As point moves, coordinates update in real-time
    - Quadrant identification updates automatically
    - Reference lines show distance from axes
    - When user enters coordinates, point jumps to that location with smooth animation
    - Quiz mode presents coordinate like "(−3, 5)" and checks if user plots correctly
    - Color code coordinates: positive = green, negative = red, zero = black
    - Hover over quadrant labels shows rules: "Q1: x > 0, y > 0"

    Quiz mode specifics:
    - Display target coordinates: "Plot the point (−2, 3)"
    - User drags point to location
    - When user clicks "Check answer":
      - If within 0.5 units: "Correct!" (green)
      - Otherwise: "Try again" with hint about which coordinate is wrong
    - Track score: "X out of Y correct"

    Implementation notes:
    - Use p5.js for rendering
    - Implement smooth dragging with mousePressed, mouseDragged, mouseReleased
    - Map pixel coordinates to mathematical coordinates
    - Use lerp for smooth point animations
    - Implement collision detection for "Check answer" in quiz mode
```

## Related Resources

- [Chapter 9: Graphing And Linear Functions](../../chapters/09-graphing-and-linear-functions/index.md)
