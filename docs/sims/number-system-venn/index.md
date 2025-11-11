---
name: Number Systems Hierarchy Diagram
description: Visualize how natural, whole, integer, rational, and real numbers are nested within each other using a pastel-colored Venn diagram.
---
# Number Systems Hierarchy Diagram



<iframe src="main.html" height="800px" scrolling="no"></iframe>

[Run the Number Systems Hierarchy Diagram MicroSim Fullscreen](./main.html){ .md-button .md-button--primary }
[Edit ](https://editor.p5js.org/dmccreary/sketches/F8RjEHdw9)

```html
<iframe src="https://dmccreary.github.io/algebra-1/sims/number-system-venn/main.html" height="402px" scrolling="no"></iframe>
```
## Overview
This skill creates an educational Venn-style diagram that shows the hierarchical relationship among different number systems: **Natural Numbers (N)**, **Whole Numbers (W)**, **Integers (Z)**, **Rational Numbers (Q)**, and **Real Numbers (R)**.  
It also highlights **Irrational Numbers (I)** as a distinct region within the real numbers but outside the rationals.

## When to Use
Use this diagram in middle or high school mathematics lessons to help students:
- Understand the inclusion relationships between number sets  
- Recognize examples of each type of number  
- Visually distinguish rational vs. irrational numbers  

## Workflow
1. **Data Definition:** Define each set as a concentric region in the Venn data.
2. **Color Scheme:** Apply pastel colors (yellow → green → blue → purple → gray) with orange for irrational numbers.
3. **Labels:** Display set names and mathematical symbols (N, W, Z, Q, R, I).
4. **Tooltips:** On hover, show concise definitions and examples.
5. **Responsive Layout:** The diagram scales gracefully with the container size.

## Resources
- [venn.js reference guide](venn-js-reference.md)
- [MicroSims Framework Paper (v0.04)](microsims-v0.04.pdf)
- [D3.js API documentation](https://d3js.org)
