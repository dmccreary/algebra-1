---
title: Number Systems Hierarchy Diagram
description: Number Systems Hierarchy Diagram
status: scaffold
library: TBD
bloom_level: TBD
---

# Number Systems Hierarchy Diagram



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md).

```text
Type: diagram

    Purpose: Show how different number systems are nested within each other, from natural numbers to real numbers

    Components to show:
    - Concentric rectangles or ovals representing each number system
    - Innermost: Natural Numbers (N) - {1, 2, 3, ...}
    - Second layer: Whole Numbers (W) - {0, 1, 2, 3, ...}
    - Third layer: Integers (Z) - {..., -2, -1, 0, 1, 2, ...}
    - Fourth layer: Rational Numbers (Q) - all fractions p/q
    - Outermost: Real Numbers (R) - all numbers on the number line
    - Separate region within Real but outside Rational: Irrational Numbers (I)

    Connections:
    - Arrows showing "is a subset of" relationships (⊂)
    - Labels: N ⊂ W ⊂ Z ⊂ Q ⊂ R

    Example elements in each region:
    - Natural numbers: 1, 2, 3, 15
    - Whole numbers only: 0
    - Integers only: -5, -12
    - Rational numbers only: 1/2, 0.75, -2/3
    - Irrational numbers: π, √2, e

    Style: Venn diagram style with nested regions, each with a different pastel color
    - Natural: light yellow
    - Whole: light green
    - Integers: light blue
    - Rational: light purple
    - Real: light gray background
    - Irrational: orange accent (separate region)

    Labels:
    - Clear text labels for each number system
    - Mathematical notation for each set (N, W, Z, Q, R, I)
    - "⊂" symbols between layers
    - Examples of numbers in each category

    Color scheme: Progressive shading from warm (inner) to cool (outer) colors

    Implementation: SVG or canvas-based diagram with clear layering
```

## Related Resources

- [Chapter 2: Number Systems And Properties](../../chapters/02-number-systems-and-properties/index.md)
