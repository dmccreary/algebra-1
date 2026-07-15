---
title: Scientific Notation Converter and Calculator
description: Scientific Notation Converter and Calculator
status: scaffold
library: TBD
bloom_level: TBD
---

# Scientific Notation Converter and Calculator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Exponents And Powers](../../chapters/03-exponents-and-powers/index.md).

```text
Type: microsim

    Learning objective: Practice converting between standard form and scientific notation, and perform operations with numbers in scientific notation

    Canvas layout (900x650px):
    - Top area (900x250): Conversion tool
    - Middle area (900x250): Calculator for operations
    - Bottom area (900x150): Reference and examples

    Visual elements (Conversion section):
    - Input field: "Enter number in standard form"
    - Display: Number shown in scientific notation
    - Input fields: "a =" and "n =" for scientific notation
    - Display: Number shown in standard form
    - Visual number line showing powers of 10
    - Animation showing decimal point movement

    Visual elements (Calculator section):
    - Two input rows for scientific notation: "(a₁ × 10^n₁)" and "(a₂ × 10^n₂)"
    - Operation selector: multiply or divide
    - Step-by-step solution display
    - Final answer in scientific notation

    Interactive controls (Conversion):
    - Input: Standard form number
    - Button: "Convert to Scientific Notation"
    - Input: a value (1-9.99)
    - Input: n value (integer)
    - Button: "Convert to Standard Form"
    - Button: "Generate random example"

    Interactive controls (Calculator):
    - Input: a₁ and n₁ for first number
    - Input: a₂ and n₂ for second number
    - Radio buttons: Multiply / Divide
    - Button: "Calculate"
    - Button: "Show steps"

    Default parameters:
    - Standard form: 45000
    - Scientific notation: 4.5 × 10⁴

    Behavior (Conversion):
    - When standard form entered:
      - Animate decimal point moving
      - Count and display number of places moved
      - Show resulting scientific notation
      - Highlight on power-of-10 number line
    - When scientific notation entered:
      - Animate decimal point moving
      - Show resulting standard form
      - Validate that 1 ≤ |a| < 10

    Behavior (Calculator):
    - When "Calculate" clicked:
      - Show step 1: Identify parts
      - Show step 2: Apply operation to 'a' values
      - Show step 3: Apply exponent rule to powers of 10
      - Show step 4: Combine results
      - Show step 5: Adjust to proper scientific notation if needed
    - Real-time validation that inputs create valid scientific notation

    Visual features:
    - Power-of-10 number line (10^-6 to 10^6)
    - Decimal point movement animation with arrows
    - Color coding: coefficient (blue), exponent (red)
    - Step-by-step solution with highlights

    Reference section:
    - Quick reference card showing:
      - "Large numbers → positive exponent"
      - "Small numbers → negative exponent"
      - "Move left → positive exponent"
      - "Move right → negative exponent"

    Examples displayed:
    - Distance to Sun: 9.3 × 10⁷ miles
    - Size of atom: 1 × 10⁻¹⁰ meters
    - Avogadro's number: 6.02 × 10²³

    Implementation: p5.js with input validation, animation sequences, and clear typography
```

## Related Resources

- [Chapter 3: Exponents And Powers](../../chapters/03-exponents-and-powers/index.md)
