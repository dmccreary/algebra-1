---
title: Coordinate Plane Interactive Plotter
description: Coordinate Plane Interactive Plotter
status: scaffold
library: TBD
bloom_level: TBD
---

# Coordinate Plane Interactive Plotter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md).

```text
Type: microsim

    Learning objective: Practice plotting points on the coordinate plane and identifying quadrants

    Canvas layout (700x700px):
    - Main area (600x600): Coordinate grid
    - Right panel (100x600): Information and controls
    - Bottom panel (700x100): Instructions and feedback

    Visual elements:
    - Coordinate grid from -10 to +10 on both axes
    - Major gridlines every 1 unit (light gray)
    - Minor gridlines every 0.5 units (very light gray)
    - x-axis and y-axis (bold black lines)
    - Origin marked with special indicator
    - Four quadrants shaded in different pastel colors
    - Plotted points shown as colored circles
    - Point labels showing coordinates

    Interactive controls:
    - Input: x-coordinate (-10 to 10)
    - Input: y-coordinate (-10 to 10)
    - Button: "Plot Point"
    - Button: "Clear All Points"
    - Dropdown: "Challenge Mode" (on/off)
    - Display: List of plotted points with quadrant identification

    Game mode (Challenge):
    - Show coordinates and ask student to click where point should be
    - Immediate feedback on accuracy
    - Score tracking
    - Progressive difficulty (starts with integer coordinates, adds decimals)

    Default parameters:
    - Grid range: -10 to +10
    - Challenge mode: off
    - Points plotted: none

    Behavior:
    - When coordinates entered and "Plot" clicked:
      - Animate a point appearing at that location
      - Add point to list with quadrant identification
      - Highlight the quadrant briefly
    - Mouse hover over grid: show current coordinates
    - Click on grid: show coordinates and option to plot there
    - In challenge mode:
      - Display target coordinates
      - Student clicks location
      - Show distance from correct position
      - Award points based on accuracy

    Visual features:
    - Quadrant colors:
      - Quadrant I: light yellow
      - Quadrant II: light blue
      - Quadrant III: light green
      - Quadrant IV: light pink
    - Plotted points: bold colors with labels
    - Hover effects: highlight nearest gridpoint

    Information display:
    - Current mouse position coordinates
    - Quadrant name for current position
    - List of all plotted points:
      - "(3, 5) - Quadrant I"
      - "(-2, 4) - Quadrant II"
      - etc.

    Implementation: p5.js with mouse interaction, input validation, smooth animations
```

## Related Resources

- [Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md)
