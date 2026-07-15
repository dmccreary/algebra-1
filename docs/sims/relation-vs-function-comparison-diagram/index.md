---
title: Relation vs. Function Comparison Diagram
description: Relation vs. Function Comparison Diagram
status: scaffold
library: TBD
bloom_level: TBD
---

# Relation vs. Function Comparison Diagram



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md).

```text
Type: diagram

    Purpose: Visually distinguish between relations that are functions and relations that are not functions

    Layout: Two side-by-side diagrams using mapping notation (arrows from domain to range)

    Left diagram - "This IS a Function":
    - Domain set (left): {1, 2, 3, 4}
    - Range set (right): {2, 4, 6, 8}
    - Arrows: 1→2, 2→4, 3→6, 4→8
    - Each domain element has exactly one arrow
    - Label: "Each input has exactly ONE output"
    - Color: Green border

    Right diagram - "This is NOT a Function":
    - Domain set (left): {1, 2, 3}
    - Range set (right): {1, 2, 3, 5}
    - Arrows: 1→1, 1→2, 2→3, 3→5
    - Note that element 1 has two arrows
    - Label: "Input 1 has TWO outputs!"
    - Color: Red border
    - Highlight the problematic element 1 with a red circle

    Visual style: Clean mapping diagram with oval shapes for sets
    Color scheme: Green for valid function, red for invalid

    Implementation: SVG or HTML/CSS diagram
```

## Related Resources

- [Chapter 8: Introduction To Functions](../../chapters/08-introduction-to-functions/index.md)
