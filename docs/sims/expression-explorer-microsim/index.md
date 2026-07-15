---
title: Expression Explorer MicroSim
description: Help students identify and understand the different parts of an algebraic expression interactively
status: scaffold
library: TBD
bloom_level: TBD
---

# Expression Explorer MicroSim



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations Of Algebra](../../chapters/01-foundations-of-algebra/index.md).

```text
Type: MicroSim

Learning objective: Help students identify and understand the different parts of an algebraic expression interactively

Canvas layout (800x600px):
- Top section (800x100): Title and instructions
- Left side (600x450): Main visualization area
- Right side (200x450): Control panel
- Bottom (800x50): Current analysis display

Visual elements:
- Display a randomly generated algebraic expression in large font
- Color-code different parts:
  - Coefficients in blue
  - Variables in green
  - Constants in orange
  - Operation signs in gray
- Highlight current selection with yellow background

Interactive controls:
- Button: "New Expression" (generates new random expression)
- Dropdown: "Expression Complexity" (Simple, Medium, Complex)
- Checkbox options to show/hide:
  - "Show Coefficients"
  - "Show Variables"
  - "Show Constants"
  - "Show Terms"
- Button: "Check My Understanding" (quiz mode)

Default parameters:
- Complexity: Simple
- All checkboxes checked
- Starting expression: $3x + 5y - 7$

Behavior:
- User can hover over any part to see its classification
- Click on checkboxes to highlight only selected element types
- "New Expression" button generates expressions based on complexity:
  - Simple: 2-3 terms, single variables, small coefficients
  - Medium: 3-5 terms, may include exponents, larger coefficients
  - Complex: 4-6 terms, multiple variables, exponents, negative terms
- "Check My Understanding" mode: Shows expression without colors, user clicks to identify parts, system provides feedback

Display area shows:
- Number of terms
- List of coefficients found
- List of variables found
- List of constants found

Implementation notes:
- Use p5.js for rendering
- Store expression as parsed components
- Generate random expressions using arrays of coefficients, variables, and operations
- Track user interactions for assessment

**MicroSim Recommendation:** Use **microsim-p5** (Score: 95/100). This specification requires text parsing, color-coded highlighting, multiple interactive controls, and quiz functionality. P5.js provides complete control over text rendering, color highlighting, dynamic expression generation, and tracking user interactions for assessment.
```

## Related Resources

- [Chapter 1: Foundations Of Algebra](../../chapters/01-foundations-of-algebra/index.md)
