# Number Systems and Properties

## Summary

This chapter explores the different types of numbers that form the foundation of algebra and the properties that govern mathematical operations. Students will learn about integers, rational numbers, and real numbers, understanding how these number systems build upon each other. The chapter also covers fundamental properties including commutative, associative, distributive, identity, and inverse properties, along with representations of numbers on the number line and coordinate system.

## Concepts Covered

This chapter covers the following 14 concepts from the learning graph:

1. Commutative Property
2. Associative Property
3. Distributive Property
4. Identity Property
5. Inverse Property
6. Integers
7. Rational Numbers
8. Real Numbers
9. Absolute Value
10. Number Line
11. Coordinate System
12. Base
13. Exponent
14. Power

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Algebra](../01-foundations-of-algebra/index.md)

---

## Introduction to Numbers and Their Properties

Think about all the numbers you use every day. You might count the number of steps you take, calculate the cost of lunch, or measure your height. In algebra, understanding different types of numbers and how they behave is essential for solving equations and modeling real-world situations. This chapter explores the organized system of numbers that mathematicians have developed over centuries and the fundamental properties that govern how we work with them.

Just as scientists classify living things into kingdoms and species, mathematicians organize numbers into different systems based on their characteristics. We'll begin with integers, expand to rational numbers, and then explore the complete system of real numbers. Along the way, you'll discover the powerful properties that make algebra work—properties that remain true whether you're adding small numbers or solving complex equations.

## Understanding Number Systems

### Integers: The Whole Story

**Integers** are the numbers you use for counting and measuring whole quantities, including positive numbers, negative numbers, and zero. The set of integers can be written as:

$\mathbb{Z} = \{..., -3, -2, -1, 0, 1, 2, 3, ...\}$

where:

- $\mathbb{Z}$ represents the set of all integers
- The three dots ($...$) indicate the pattern continues infinitely in both directions

Integers appear everywhere in daily life:

- Temperature changes (gained 5 degrees, dropped 3 degrees)
- Bank account transactions (deposit $50, withdraw $20)
- Elevation (200 feet above sea level, 50 feet below sea level)
- Sports scores and point differences

<iframe src="../../sims/integer-ops-number-line/main.html" height="402px" scrolling="no"></iframe>

[Run the Integer Operations MicroSim Fullscreen](../../sims/integer-ops-number-line/main.html){ .md-button .md-button--primary }


<details markdown="1">
    <summary>Integer Operations on the Number Line</summary>
    Type: microsim

    Learning objective: Visualize integer addition and subtraction as movements on the number line

    Canvas layout (800x400px):
    - Top area (800x300): Drawing area showing a horizontal number line
    - Bottom area (800x100): Control panel

    Visual elements:
    - Horizontal number line from -10 to +10 with tick marks and labels
    - Current position marked with a blue circle
    - Movement arrows showing operations (green for addition, red for subtraction)
    - Start position marked with a small gray circle
    - Operation history displayed as equation

    Interactive controls:
    - Button: "Add 1" through "Add 5"
    - Button: "Subtract 1" through "Subtract 5"
    - Button: "Reset to Zero"
    - Display: Current equation (e.g., "0 + 3 - 2 + 4 = 5")
    - Display: Current position value

    Default parameters:
    - Starting position: 0
    - Number line range: -10 to +10

    Behavior:
    - When add/subtract button clicked, animate a movement arrow from current position
    - For addition, arrow points right and is green
    - For subtraction, arrow points left and is red
    - Blue circle moves smoothly to new position
    - Equation updates to show the operation
    - If movement would go beyond -10 or +10, show warning message

    Implementation: p5.js with smooth animation using lerp() for position transitions
</details>

### Rational Numbers: Beyond Whole Values

While integers work well for counting discrete objects, many real-world measurements fall between whole numbers. **Rational numbers** include all numbers that can be expressed as a fraction of two integers, where the denominator is not zero.

Formally, a rational number can be written as:

$\frac{p}{q}$

where:

- $p$ is any integer (the numerator)
- $q$ is any non-zero integer (the denominator)
- $q \neq 0$

The set of rational numbers is denoted by $\mathbb{Q}$ (for "quotient"). Every integer is also a rational number because you can write it with a denominator of 1. For example, $5 = \frac{5}{1}$.

Common forms of rational numbers:

| Form | Examples | Use Cases |
|------|----------|-----------|
| Fractions | $\frac{3}{4}$, $\frac{-2}{5}$, $\frac{7}{3}$ | Recipes, measurements, probabilities |
| Decimals (terminating) | $0.5$, $2.75$, $-1.25$ | Money, scientific measurements |
| Decimals (repeating) | $0.\overline{3}$, $0.8\overline{18}$ | Division results, mathematical analysis |
| Mixed numbers | $2\frac{1}{3}$, $-5\frac{2}{7}$ | Practical measurements |

A key property of rational numbers: When you divide the numerator by the denominator, you get either a terminating decimal (like $\frac{1}{4} = 0.25$) or a repeating decimal (like $\frac{1}{3} = 0.\overline{3}$).

<details markdown="1">
    <summary>Rational Number Classification Interactive</summary>
    Type: infographic

    Purpose: Create an interactive classification tool where students identify whether given numbers are rational and practice expressing them in different forms

    Layout: Split-screen design (1000x600px)

    Left panel (500x600):
    - Title: "Is This Number Rational?"
    - Display area showing a number (randomly generated or user-entered)
    - Buttons: "Yes, it's rational" and "No, it's not rational"
    - Input field: "Express as p/q" (if rational)
    - Score tracker

    Right panel (500x600):
    - Visual representation of the number on a number line
    - Fraction bar diagram if applicable
    - Explanation panel that appears after answer
    - "Next Number" button

    Sample numbers to classify:
    - $\frac{3}{8}$ (rational)
    - $0.666...$ (rational, equals $\frac{2}{3}$)
    - $\sqrt{2}$ (not rational)
    - $-5$ (rational, equals $\frac{-5}{1}$)
    - $\pi$ (not rational)
    - $0.125$ (rational, equals $\frac{1}{8}$)
    - $\frac{22}{7}$ (rational approximation of $\pi$)
    - $0$ (rational, equals $\frac{0}{1}$)

    Interactive elements:
    - Click "Yes" or "No" for immediate feedback
    - If correct, green highlight with explanation
    - If incorrect, red highlight with correction and explanation
    - Hover over number on number line to see zoomed view
    - Click "Show me why" to see step-by-step proof

    Visual style: Clean, modern interface with color coding
    - Rational numbers: blue theme
    - Irrational numbers: orange theme
    - Correct answers: green confirmation
    - Incorrect answers: red with educational feedback

    Feedback examples:
    - For $0.666...$: "Correct! This is $\frac{2}{3}$. Repeating decimals are always rational."
    - For $\sqrt{2}$: "Not rational! Cannot be expressed as $\frac{p}{q}$ where p and q are integers."

    Implementation: HTML/CSS/JavaScript with random number generator and validation logic
</details>

### Real Numbers: The Complete Picture

The **real numbers** ($\mathbb{R}$) include all rational numbers plus all irrational numbers. Irrational numbers are numbers that cannot be expressed as a fraction of two integers. Their decimal representations neither terminate nor repeat.

Famous irrational numbers include:

- $\pi \approx 3.14159...$ (the ratio of a circle's circumference to its diameter)
- $e \approx 2.71828...$ (the base of natural logarithms)
- $\sqrt{2} \approx 1.41421...$ (the length of the diagonal of a unit square)
- $\phi \approx 1.61803...$ (the golden ratio)

The real number line extends infinitely in both directions and contains every possible number you can represent as a decimal—whether it terminates, repeats, or continues infinitely without repeating.

Here's how the number systems nest within each other:

<details markdown="1">
    <summary>Number Systems Hierarchy Diagram</summary>
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
</details>

### Exponents and Powers: A First Look

While we'll explore exponents in much greater depth in Chapter 3, you need to understand the basic terminology now because these concepts connect to number systems.

An **exponent** tells you how many times to multiply a number (called the **base**) by itself. The result is called a **power**.

In the expression $b^n$:

- $b$ is the **base** (the number being multiplied)
- $n$ is the **exponent** (how many times to multiply)
- $b^n$ is the **power** (the result)

For example, in $2^3 = 8$:

- Base = 2
- Exponent = 3
- Power = 8
- Meaning: $2 \times 2 \times 2 = 8$

#### Powers of Ten

Powers of ten are especially important in science and in understanding place value:

| Expression | Value | Name |
|------------|-------|------|
| $10^0$ | 1 | One |
| $10^1$ | 10 | Ten |
| $10^2$ | 100 | Hundred |
| $10^3$ | 1,000 | Thousand |
| $10^6$ | 1,000,000 | Million |
| $10^{-1}$ | 0.1 | One tenth |
| $10^{-2}$ | 0.01 | One hundredth |

## Fundamental Properties of Operations

Mathematics isn't just about numbers—it's about understanding the patterns and rules that govern how numbers behave. The properties you'll learn in this section are the foundation of algebra. They work for all real numbers and help you simplify expressions, solve equations, and prove mathematical statements.

### Commutative Property: Order Doesn't Matter

The **commutative property** states that you can change the order of numbers in addition or multiplication without changing the result.

#### Commutative Property of Addition

$a + b = b + a$

where:

- $a$ and $b$ are any real numbers

Example: $3 + 5 = 5 + 3$ (both equal 8)

#### Commutative Property of Multiplication

$a \times b = b \times a$

where:

- $a$ and $b$ are any real numbers

Example: $4 \times 7 = 7 \times 4$ (both equal 28)

**Important:** The commutative property does NOT apply to subtraction or division.

- Subtraction: $5 - 3 \neq 3 - 5$ (2 ≠ -2)
- Division: $12 \div 4 \neq 4 \div 12$ (3 ≠ 1/3)

### Associative Property: Grouping Doesn't Matter

The **associative property** states that when you add or multiply three or more numbers, the way you group them doesn't affect the result.

#### Associative Property of Addition

$(a + b) + c = a + (b + c)$

where:

- $a$, $b$, and $c$ are any real numbers

Example: $(2 + 3) + 4 = 2 + (3 + 4)$

- Left side: $5 + 4 = 9$
- Right side: $2 + 7 = 9$

#### Associative Property of Multiplication

$(a \times b) \times c = a \times (b \times c)$

where:

- $a$, $b$, and $c$ are any real numbers

Example: $(2 \times 5) \times 3 = 2 \times (5 \times 3)$

- Left side: $10 \times 3 = 30$
- Right side: $2 \times 15 = 30$

**Important:** The associative property does NOT apply to subtraction or division.

### Distributive Property: Multiplication Over Addition

The **distributive property** connects multiplication and addition. It states that multiplying a number by a sum is the same as multiplying the number by each addend and then adding the products.

#### Distributive Property

$a(b + c) = ab + ac$

where:

- $a$, $b$, and $c$ are any real numbers

Example: $3(4 + 5) = 3 \times 4 + 3 \times 5$

- Left side: $3(9) = 27$
- Right side: $12 + 15 = 27$

The distributive property is one of the most powerful tools in algebra. You'll use it constantly to expand expressions, factor polynomials, and solve equations.

<details markdown="1">
    <summary>Distributive Property Visual Model</summary>
    Type: microsim

    Learning objective: Visualize the distributive property using area models (rectangles) to show why a(b + c) = ab + ac

    Canvas layout (800x500px):
    - Top area (800x350): Drawing area showing rectangular area model
    - Bottom area (800x150): Control panel

    Visual elements:
    - Large rectangle divided into two sections
    - Left rectangle: width = b, height = a, area = ab (colored light blue)
    - Right rectangle: width = c, height = a, area = ac (colored light green)
    - Combined rectangle: width = (b + c), height = a, area = a(b + c)
    - Grid lines showing unit squares
    - Labels on all dimensions
    - Area calculations displayed for each section

    Interactive controls:
    - Slider: Value of a (1-10)
    - Slider: Value of b (1-10)
    - Slider: Value of c (1-10)
    - Display: Equation showing a(b + c) = ab + ac with current values
    - Display: "Left side = [value], Right side = [value], Equal? ✓"
    - Checkbox: "Show unit grid"
    - Checkbox: "Show calculations"

    Default parameters:
    - a = 3
    - b = 4
    - c = 5
    - Show unit grid: true

    Behavior:
    - When sliders move, rectangle dimensions update smoothly
    - Area of each section recalculates
    - Both sides of equation update to show they're equal
    - Unit grid helps students count squares to verify
    - Color coding helps distinguish ab from ac
    - Total area shown both as a(b+c) and as ab + ac

    Additional features:
    - Button: "Show me a different property" (cycles through numerical examples)
    - Animation: Can animate the "splitting" of the rectangle

    Implementation: p5.js with clear grid rendering and dynamic text labels
</details>

### Identity Properties: The "Do Nothing" Numbers

The **identity property** identifies special numbers that don't change other numbers when used in an operation.

#### Additive Identity Property

$a + 0 = a$

where:

- $a$ is any real number
- $0$ is the additive identity

Zero is the additive identity because adding zero to any number doesn't change its value.

Example: $15 + 0 = 15$

#### Multiplicative Identity Property

$a \times 1 = a$

where:

- $a$ is any real number
- $1$ is the multiplicative identity

One is the multiplicative identity because multiplying any number by one doesn't change its value.

Example: $27 \times 1 = 27$

### Inverse Properties: Getting Back to Identity

The **inverse property** describes how to "undo" an operation and return to the identity element.

#### Additive Inverse Property

$a + (-a) = 0$

where:

- $a$ is any real number
- $(-a)$ is the additive inverse of $a$

The additive inverse of a number is its opposite. When you add a number and its opposite, you get zero (the additive identity).

Examples:

- $8 + (-8) = 0$
- $-3 + 3 = 0$
- $\frac{1}{2} + (-\frac{1}{2}) = 0$

#### Multiplicative Inverse Property

$a \times \frac{1}{a} = 1$ (when $a \neq 0$)

where:

- $a$ is any non-zero real number
- $\frac{1}{a}$ is the multiplicative inverse (reciprocal) of $a$

The multiplicative inverse of a number is its reciprocal. When you multiply a number by its reciprocal, you get one (the multiplicative identity).

Examples:

- $5 \times \frac{1}{5} = 1$
- $\frac{2}{3} \times \frac{3}{2} = 1$
- $(-4) \times (-\frac{1}{4}) = 1$

**Note:** Zero has no multiplicative inverse because division by zero is undefined.

### Properties Summary Table

Here's a quick reference for all the properties:

| Property | Addition | Multiplication |
|----------|----------|----------------|
| **Commutative** | $a + b = b + a$ | $a \times b = b \times a$ |
| **Associative** | $(a + b) + c = a + (b + c)$ | $(a \times b) \times c = a \times (b \times c)$ |
| **Identity** | $a + 0 = a$ | $a \times 1 = a$ |
| **Inverse** | $a + (-a) = 0$ | $a \times \frac{1}{a} = 1$ (if $a \neq 0$) |
| **Distributive** | (connects multiplication and addition) | $a(b + c) = ab + ac$ |

<details markdown="1">
    <summary>Properties Practice Interactive Game</summary>
    Type: microsim

    Learning objective: Identify and apply mathematical properties in various equations and expressions

    Canvas layout (900x600px):
    - Main area (900x450): Game interface
    - Bottom area (900x150): Feedback and controls

    Visual elements:
    - Question display showing an equation or expression
    - Multiple choice buttons for property identification
    - Score display
    - Lives/attempts remaining (3 hearts)
    - Level indicator
    - Visual feedback (confetti for correct, shake for incorrect)

    Game mechanics:
    - Present an equation demonstrating a property
    - Student identifies which property is shown
    - Immediate feedback with explanation
    - Progressive difficulty (starts with simple, adds complexity)
    - Point system: +10 for correct first try, +5 for second try
    - Lose a life for wrong answer (but get explanation)

    Sample questions by difficulty:

    Level 1 (Direct application):
    - "Which property: 3 + 7 = 7 + 3?" → Commutative (Addition)
    - "Which property: 5 × 1 = 5?" → Identity (Multiplication)

    Level 2 (With variables):
    - "Which property: x + 0 = x?" → Identity (Addition)
    - "Which property: 2(x + 3) = 2x + 6?" → Distributive

    Level 3 (Recognition in context):
    - "Which property justifies: (2 × 3) × 4 = 2 × (3 × 4)?" → Associative (Multiplication)
    - "Which property: y + (-y) = 0?" → Inverse (Addition)

    Interactive controls:
    - Five buttons for property choices:
      1. Commutative
      2. Associative
      3. Distributive
      4. Identity
      5. Inverse
    - "Hint" button (costs 2 points)
    - "Next Question" button
    - "Reset Game" button

    Default parameters:
    - Starting level: 1
    - Questions per level: 5
    - Lives: 3
    - Score: 0

    Behavior:
    - When answer selected, show if correct with color coding
    - If correct: green highlight, show brief explanation, add points
    - If incorrect: red highlight, show correct answer and explanation, lose a life
    - Progress bar shows questions completed in current level
    - Level up after completing 5 questions correctly
    - Game over when all lives lost (but can restart)

    Feedback examples:
    - Correct: "✓ Correct! This is the Commutative Property of Addition. Order doesn't matter!"
    - Incorrect: "✗ Not quite. This is the Identity Property—adding 0 doesn't change the value."

    Implementation: p5.js with button interactions, JSON data for questions, animation library for visual feedback
</details>

## Absolute Value and the Number Line

### The Number Line: A Visual Tool

The **number line** is a visual representation of all real numbers arranged in order from left to right. It helps us understand the relationships between numbers, particularly for comparing values and understanding operations.

Key features of the number line:

- Zero is at the center (the origin)
- Positive numbers extend to the right
- Negative numbers extend to the left
- The line continues infinitely in both directions
- Each point on the line corresponds to exactly one real number
- Equal spacing between integers shows equal differences

Uses of the number line:

- Comparing numbers (numbers to the right are greater)
- Visualizing addition and subtraction
- Understanding absolute value
- Solving inequalities
- Representing intervals and ranges

### Absolute Value: Distance from Zero

The **absolute value** of a number is its distance from zero on the number line, regardless of direction. Distance is always positive (or zero), so absolute value is always non-negative.

Notation: The absolute value of $a$ is written as $|a|$.

#### Formal Definition

$|a| = \begin{cases} a & \text{if } a \geq 0 \\ -a & \text{if } a < 0 \end{cases}$

where:

- $a$ is any real number

This definition means:

- If the number is positive or zero, its absolute value is itself
- If the number is negative, its absolute value is its opposite (making it positive)

Examples:

- $|5| = 5$ (5 is already positive)
- $|-5| = 5$ (opposite of -5 is 5)
- $|0| = 0$ (zero's distance from zero is zero)
- $|-\frac{3}{4}| = \frac{3}{4}$

Key properties of absolute value:

- $|a| \geq 0$ for all real numbers $a$
- $|a| = |-a|$ (a number and its opposite have the same absolute value)
- $|ab| = |a||b|$ (absolute value of a product)
- $|\frac{a}{b}| = \frac{|a|}{|b|}$ when $b \neq 0$

<details markdown="1">
    <summary>Absolute Value Interactive Number Line</summary>
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
</details>

## The Coordinate System

While the number line represents one-dimensional space, the **coordinate system** (also called the Cartesian coordinate plane) extends this idea to two dimensions. This powerful tool allows us to represent pairs of numbers and graph relationships between variables.

### Components of the Coordinate System

The coordinate system consists of:

- **x-axis**: Horizontal number line
- **y-axis**: Vertical number line
- **Origin**: The point (0, 0) where the axes intersect
- **Quadrants**: Four regions created by the axes

Every point in the plane is identified by an **ordered pair** $(x, y)$:

- The first number ($x$) is the horizontal coordinate
- The second number ($y$) is the vertical coordinate
- Order matters: $(3, 5) \neq (5, 3)$

### The Four Quadrants

| Quadrant | Signs | Examples |
|----------|-------|----------|
| I (first) | $(+, +)$ | $(3, 5)$, $(1, 7)$ |
| II (second) | $(-, +)$ | $(-4, 2)$, $(-1, 6)$ |
| III (third) | $(-, -)$ | $(-2, -3)$, $(-5, -1)$ |
| IV (fourth) | $(+, -)$ | $(6, -2)$, $(1, -4)$ |

Points on the axes themselves are not in any quadrant:

- Points on the x-axis: $(x, 0)$
- Points on the y-axis: $(0, y)$
- The origin: $(0, 0)$

<details markdown="1">
    <summary>Coordinate Plane Interactive Plotter</summary>
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
</details>

### Distance in the Coordinate Plane

You can calculate the distance between two points using a formula derived from the Pythagorean Theorem (which you'll study in geometry). For now, know that the distance between points $(x_1, y_1)$ and $(x_2, y_2)$ is:

$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

where:

- $d$ is the distance between the two points
- $(x_1, y_1)$ is the first point
- $(x_2, y_2)$ is the second point

We'll explore this formula more in later chapters when we work with graphing and functions.

## Bringing It All Together

Understanding number systems and their properties forms the foundation for all of algebra. These concepts aren't isolated facts to memorize—they're interconnected tools that you'll use constantly:

- **Number systems** (integers, rational numbers, real numbers) give us the vocabulary to describe quantities precisely
- **Properties of operations** (commutative, associative, distributive, identity, inverse) provide the rules that make algebra work
- **Exponents and powers** offer a compact way to express repeated multiplication
- **Absolute value** captures the idea of magnitude without direction
- **The number line** and **coordinate system** give us visual ways to represent and analyze numbers and relationships

As you continue through this course, you'll see these foundational concepts appear again and again. The properties you learned here justify the steps you take when solving equations. The number systems help you understand what kinds of solutions are possible. The coordinate system becomes the canvas where you'll graph functions and analyze patterns.

Mastering these fundamentals now will make everything that follows much easier to understand.

## Key Takeaways

- **Integers** include whole numbers and their opposites: $\{..., -2, -1, 0, 1, 2, ...\}$
- **Rational numbers** can be written as fractions $\frac{p}{q}$ where $q \neq 0$
- **Real numbers** include all rational and irrational numbers
- The **commutative property** allows you to change order (addition and multiplication only)
- The **associative property** allows you to change grouping (addition and multiplication only)
- The **distributive property** connects multiplication with addition: $a(b + c) = ab + ac$
- **Identity elements** are 0 (for addition) and 1 (for multiplication)
- **Inverse elements** undo operations (opposites for addition, reciprocals for multiplication)
- **Absolute value** measures distance from zero: $|a| \geq 0$
- The **coordinate system** uses ordered pairs $(x, y)$ to locate points in a plane
- **Exponents** indicate repeated multiplication: in $b^n$, $b$ is the base and $n$ is the exponent
