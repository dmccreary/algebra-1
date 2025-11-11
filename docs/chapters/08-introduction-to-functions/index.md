# Introduction to Functions

## Summary

This chapter introduces one of the most important concepts in mathematics: functions. Students will learn to distinguish between relations and functions, understand function notation, and work with domain and range. The chapter explores how to evaluate functions, identify independent and dependent variables, and introduces various types of functions including continuous, discrete, piecewise, step, and absolute value functions. Students will also learn about parent functions and function transformations including translations and reflections.

## Concepts Covered

This chapter covers the following 16 concepts from the learning graph:

1. Function
2. Domain
3. Range
4. Function Notation
5. Evaluating Functions
6. Vertical Line Test
7. Continuous Function
8. Piecewise Function
9. Step Function
10. Absolute Value Function
11. Parent Function
12. Function Transformation
13. Translation
14. Reflection
15. Linear Function
16. Quadratic Function

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Algebra](../01-foundations-of-algebra/index.md)
- [Chapter 2: Number Systems and Properties](../02-number-systems-and-properties/index.md)
- [Chapter 5: Factoring Polynomials](../05-factoring-polynomials/index.md)
- [Chapter 6: Solving Linear Equations](../06-solving-linear-equations/index.md)

---

## What is a Function?

A function is one of the most fundamental concepts in algebra and all of mathematics. At its core, a function is a special kind of relationship between two sets of numbers where each input value corresponds to exactly one output value. Think of a function like a machine: you put in a number, the machine processes it according to a specific rule, and you get exactly one number out.

In everyday life, we encounter functions constantly. When you buy items at a store, the total cost is a function of how many items you purchase. When you drive a car at constant speed, the distance traveled is a function of time. When you set your thermostat, the temperature in your room changes as a function of time.

### Relations vs. Functions

Before we dive deeper into functions, it's important to understand the broader concept of a **relation**. A relation is any set of ordered pairs $(x, y)$. For example:

- The relation $\{(1, 2), (2, 4), (3, 6), (4, 8)\}$ pairs each $x$-value with its double
- The relation $\{(1, 1), (1, 2), (2, 3), (3, 5)\}$ has the $x$-value 1 paired with two different $y$-values

A **function** is a special type of relation where each input (called the domain value or $x$-value) is paired with exactly one output (called the range value or $y$-value). Using this definition:

- The first relation above IS a function (each $x$-value appears only once)
- The second relation IS NOT a function ($x = 1$ is paired with both 1 and 2)

<details markdown="1">
    <summary>Relation vs. Function Comparison Diagram</summary>
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
</details>

### The Vertical Line Test

One of the most useful tools for determining whether a graph represents a function is the **vertical line test**. This simple visual test states: if you can draw a vertical line anywhere on the graph that intersects the curve at more than one point, then the graph does not represent a function.

Why does this work? Remember that a function requires each input ($x$-value) to have exactly one output ($y$-value). A vertical line represents a single $x$-value. If that vertical line crosses the graph twice, it means that single $x$-value has two different $y$-values, violating the definition of a function.

<details markdown="1">
    <summary>Vertical Line Test Interactive MicroSim</summary>
    Type: microsim

    Learning objective: Help students understand and apply the vertical line test to determine if a graph represents a function

    Canvas layout (800x500px):
    - Main drawing area (650x500): Graph with coordinate plane
    - Control panel (150x500): Interactive controls on right side

    Visual elements in main area:
    - Coordinate grid with x-axis from -5 to 5 and y-axis from -5 to 5
    - Pre-loaded graph (user-selectable from dropdown)
    - Moveable vertical line (dashed red) that user can drag horizontally
    - Intersection points highlighted as yellow circles when vertical line crosses graph
    - Result text at bottom: "This IS a function" (green) or "This is NOT a function" (red)

    Interactive controls:
    - Dropdown: "Select Graph"
      Options:
      1. "Linear function: y = 2x + 1"
      2. "Parabola: y = x²"
      3. "Circle: x² + y² = 9" (NOT a function)
      4. "Absolute value: y = |x|"
      5. "Sideways parabola: x = y²" (NOT a function)
      6. "Piecewise function"
    - Slider: "Move vertical line" (-5 to 5)
    - Button: "Auto-scan" (animates vertical line sweeping across graph)
    - Display: "Intersection count: X points"
    - Checkbox: "Show all intersections" (highlights all intersection points at current x-value)

    Default parameters:
    - Selected graph: Linear function
    - Vertical line position: x = 0
    - Auto-scan speed: 30 frames per second

    Behavior:
    - As user drags vertical line, count intersections in real-time
    - Highlight intersection points with yellow circles
    - If any position has >1 intersection, display "NOT a function" in red
    - If all positions have ≤1 intersection, display "IS a function" in green
    - Auto-scan mode sweeps line from left to right, pausing briefly when multiple intersections found

    Implementation notes:
    - Use p5.js for rendering
    - Define each graph as a mathematical function or parametric curve
    - Calculate intersections by checking y-values at current x-position
    - For circle and sideways parabola, show multiple y-values for same x

</details>

## Function Notation

Mathematicians use a special notation to represent functions efficiently. Instead of always writing "let $y$ equal some expression in terms of $x$," we use **function notation**.

The standard form is: $f(x)$

This is read as "f of x" and means "the function $f$ evaluated at $x$" or simply "the output when $x$ is the input."

For example, if $f(x) = 2x + 3$, then:

- $f(1) = 2(1) + 3 = 5$
- $f(0) = 2(0) + 3 = 3$
- $f(-2) = 2(-2) + 3 = -1$

The letter $f$ is commonly used for functions, but we can use other letters too: $g(x)$, $h(x)$, $P(t)$, $C(n)$, etc. The choice of letter often relates to what the function represents (C for cost, P for population, h for height, etc.).

### Key Components of Function Notation

When we write $f(x) = 2x + 3$:

- $f$ is the name of the function
- $x$ is the input variable (also called the **independent variable**)
- $f(x)$ is the output (also called the **dependent variable** because its value depends on $x$)
- $2x + 3$ is the rule that tells us how to calculate the output from the input

| Notation | Meaning | Example |
|----------|---------|---------|
| $f(x)$ | The output of function $f$ when input is $x$ | $f(3)$ means "evaluate $f$ at $x=3$" |
| $f(2) = 7$ | When the input is 2, the output is 7 | If $f(x) = 3x + 1$, then $f(2) = 7$ |
| $f(a+b)$ | Evaluate function at the input $a+b$ | $f(1+2) = f(3)$ |
| $g(x)$ | A different function named $g$ | $g(x) = x^2$ is different from $f(x) = 2x$ |

### Evaluating Functions

**Evaluating a function** means finding the output value for a specific input value. The process is straightforward:

1. Start with the function rule
2. Substitute the given input value for every occurrence of the variable
3. Simplify using order of operations

Let's look at several examples with the function $f(x) = x^2 - 3x + 2$:

- **Evaluate $f(4)$:**
  $f(4) = (4)^2 - 3(4) + 2 = 16 - 12 + 2 = 6$

- **Evaluate $f(-1)$:**
  $f(-1) = (-1)^2 - 3(-1) + 2 = 1 + 3 + 2 = 6$

- **Evaluate $f(0)$:**
  $f(0) = (0)^2 - 3(0) + 2 = 0 - 0 + 2 = 2$

Notice that different inputs can produce the same output ($f(4) = f(-1) = 6$). This is perfectly fine for functions—the rule is that each input must have exactly one output, not that each output must come from exactly one input.

We can also evaluate functions with algebraic expressions as inputs:

- **Evaluate $f(2a)$:**
  $f(2a) = (2a)^2 - 3(2a) + 2 = 4a^2 - 6a + 2$

- **Evaluate $f(x+1)$:**
  $f(x+1) = (x+1)^2 - 3(x+1) + 2 = x^2 + 2x + 1 - 3x - 3 + 2 = x^2 - x$

<details markdown="1">
    <summary>Function Evaluation Practice MicroSim</summary>
    Type: microsim

    Learning objective: Provide interactive practice for evaluating functions at different input values

    Canvas layout (800x600px):
    - Left side (500x600): Problem display and work area
    - Right side (300x600): Control panel and feedback

    Visual elements:
    - Display current function in large text at top: e.g., "$f(x) = 2x^2 - 3x + 1$"
    - Show current evaluation problem: "Evaluate $f(3)$"
    - Work area showing step-by-step evaluation:
      - Step 1: "Substitute 3 for x: $f(3) = 2(3)^2 - 3(3) + 1$"
      - Step 2: "Simplify exponents: $f(3) = 2(9) - 3(3) + 1$"
      - Step 3: "Multiply: $f(3) = 18 - 9 + 1$"
      - Step 4: "Add/subtract: $f(3) = 10$"
    - Input box for student answer
    - Feedback message (green for correct, red for incorrect)
    - Running score: "X out of Y correct"

    Interactive controls:
    - Dropdown: "Function type"
      Options:
      1. Linear ($ax + b$)
      2. Quadratic ($ax^2 + bx + c$)
      3. Cubic ($ax^3 + bx^2 + cx + d$)
      4. Absolute value ($a|x - h| + k$)
      5. Mixed (random)
    - Dropdown: "Difficulty"
      Options:
      1. Easy (single-digit positive inputs)
      2. Medium (negative inputs, two-digit)
      3. Hard (algebraic inputs like $2x$, $x+1$)
    - Button: "New Problem"
    - Button: "Show Steps" (toggles step-by-step work)
    - Button: "Reset Score"
    - Input field: "Your answer"
    - Button: "Check Answer"

    Default parameters:
    - Function type: Linear
    - Difficulty: Easy
    - Show steps: Off initially

    Behavior:
    - Generate random function based on selected type
    - Generate random input value based on difficulty level
    - When "Check Answer" clicked:
      - Compare student answer to correct answer
      - Show green "Correct!" or red "Incorrect. The answer is X"
      - Update score
      - After 2 seconds, generate new problem
    - "Show Steps" reveals complete step-by-step solution
    - Track accuracy percentage

    Implementation notes:
    - Use p5.js for rendering
    - Use MathJax or KaTeX for rendering equations
    - Store function as JavaScript function for evaluation
    - Generate random coefficients within reasonable ranges
    - For "Hard" difficulty, include algebraic inputs and require simplified algebraic expressions as answers
</details>

## Domain and Range

Two of the most important characteristics of any function are its **domain** and **range**.

The **domain** of a function is the complete set of all possible input values ($x$-values) for which the function is defined. Think of the domain as "what you're allowed to put into the function."

The **range** of a function is the complete set of all possible output values ($y$-values) that the function can produce. Think of the range as "what you can get out of the function."

### Determining Domain

For many basic functions, the domain is "all real numbers" (written as $\mathbb{R}$ or in interval notation as $(-\infty, \infty)$). However, some functions have restrictions on their domains:

**Division restrictions:** Functions cannot have zero in the denominator.

- For $f(x) = \frac{1}{x}$, the domain is all real numbers except $x = 0$
- In interval notation: $(-\infty, 0) \cup (0, \infty)$

**Square root restrictions:** For real-valued functions, we cannot take the square root of negative numbers.

- For $f(x) = \sqrt{x}$, the domain is $x \geq 0$
- In interval notation: $[0, \infty)$

**Combined restrictions:** Some functions have multiple restrictions.

- For $f(x) = \frac{\sqrt{x-2}}{x-3}$, we need $x \geq 2$ (for the square root) AND $x \neq 3$ (for the denominator)
- Domain: $[2, 3) \cup (3, \infty)$

### Determining Range

Finding the range can be more challenging than finding the domain. Common strategies include:

1. **Graphing the function** and observing what $y$-values are attained
2. **Analyzing the function algebraically** to find minimum/maximum values
3. **Testing boundary values** to see limiting behavior

For example:

- $f(x) = x^2$ has domain: all real numbers and range: $[0, \infty)$ (outputs are never negative)
- $f(x) = \sqrt{x}$ has domain: $[0, \infty)$ and range: $[0, \infty)$
- $f(x) = |x|$ has domain: all real numbers and range: $[0, \infty)$

<details markdown="1">
    <summary>Domain and Range Interactive Visualizer</summary>
    Type: microsim

    Learning objective: Help students visualize domain and range for various function types and understand restrictions

    Canvas layout (900x600px):
    - Left side (600x600): Coordinate grid with graph
    - Right side (300x600): Control panel and information

    Visual elements in main area:
    - Coordinate plane with adjustable viewing window
    - Function graph plotted in blue
    - Domain highlighted on x-axis with thick line (green if all reals, orange if restricted)
    - Range highlighted on y-axis with thick line (green if all reals, orange if restricted)
    - Restriction points marked with open circles (excluded) or closed dots (included)
    - Asymptotes shown as dashed red lines when applicable

    Interactive controls:
    - Dropdown: "Select function type"
      Options:
      1. Linear: $f(x) = mx + b$
      2. Quadratic: $f(x) = ax^2 + bx + c$
      3. Absolute value: $f(x) = a|x - h| + k$
      4. Square root: $f(x) = \sqrt{ax + b}$
      5. Reciprocal: $f(x) = \frac{a}{x - h} + k$
      6. Rational: $f(x) = \frac{ax + b}{cx + d}$
      7. Custom (enter your own)

    - Sliders for function parameters (vary based on selected type):
      - For linear: $m$ (slope), $b$ (intercept)
      - For quadratic: $a$, $b$, $c$
      - For others: relevant parameters

    - Display: "Domain: " (in both set notation and interval notation)
    - Display: "Range: " (in both set notation and interval notation)
    - Display: "Restrictions explained: " (text explaining why domain/range are limited)

    - Checkbox: "Show domain on x-axis"
    - Checkbox: "Show range on y-axis"
    - Checkbox: "Show asymptotes"
    - Checkbox: "Highlight restrictions"

    - Button: "Random function" (generates random coefficients)
    - Button: "Reset view"

    Default parameters:
    - Function type: Quadratic
    - Function: $f(x) = x^2$
    - Viewing window: $x \in [-10, 10]$, $y \in [-10, 10]$
    - All checkboxes: checked

    Behavior:
    - When user changes function type or parameters, immediately:
      - Replot the graph
      - Calculate and display domain
      - Calculate and display range
      - Update highlighting on axes
      - Show restriction explanations
    - Hovering over highlighted domain shows tooltip: "Valid inputs"
    - Hovering over highlighted range shows tooltip: "Possible outputs"
    - Hovering over restriction points shows reason (e.g., "Division by zero")
    - Users can zoom in/out with mouse wheel
    - Users can pan by dragging graph

    Domain/Range calculation logic:
    - For rational functions: exclude x-values making denominator zero
    - For square root functions: require radicand ≥ 0
    - For each function type, calculate range by analyzing:
      - Vertex (for parabolas)
      - Asymptotic behavior (for rational)
      - Starting point (for square root)

    Implementation notes:
    - Use p5.js for rendering
    - Use mathematical interval class to represent domain/range
    - Plot functions using parametric approach with sufficient sampling
    - Detect asymptotes by looking for discontinuities
    - Color code: green = unrestricted, orange = restricted, red = excluded

</details>

## Types of Functions

Functions come in many varieties, each with distinct characteristics and behaviors. Understanding different function types helps us model real-world situations and solve problems more effectively.

### Continuous Functions

A **continuous function** is one where the graph has no breaks, holes, or jumps. You can draw the entire graph without lifting your pencil from the paper. Most of the functions you'll work with in Algebra I are continuous, including:

- Linear functions: $f(x) = mx + b$
- Quadratic functions: $f(x) = ax^2 + bx + c$
- Polynomial functions in general

Continuous functions are smooth and predictable. If you know the function values at two points, you can be confident the function takes on every value in between.

### Discrete Functions

In contrast, some functions are defined only at specific, separate input values. These are called **discrete functions**. Real-world examples include:

- The cost of mailing a package based on weight (jumps at each ounce)
- Your age in years (jumps on each birthday)
- The number of students in a class (can only be whole numbers)

Discrete functions often appear as isolated points on a graph rather than connected curves.

### Piecewise Functions

A **piecewise function** is defined by different rules for different parts of its domain. The function literally has different "pieces." These are written with curly braces:

#### Piecewise Function Example

$$f(x) = \begin{cases}
x + 2 & \text{if } x < 0 \\
x^2 & \text{if } x \geq 0
\end{cases}$$

This means:
- When $x$ is negative, use the rule $f(x) = x + 2$
- When $x$ is zero or positive, use the rule $f(x) = x^2$

To evaluate a piecewise function:

1. Determine which piece of the domain your input falls into
2. Use the corresponding rule for that piece
3. Calculate the output

For our example:

- $f(-3) = -3 + 2 = -1$ (using first piece since $-3 < 0$)
- $f(0) = 0^2 = 0$ (using second piece since $0 \geq 0$)
- $f(2) = 2^2 = 4$ (using second piece since $2 \geq 0$)

<details markdown="1">
    <summary>Piecewise Function Interactive Grapher</summary>
    Type: microsim

    Learning objective: Help students understand piecewise functions by building, visualizing, and evaluating them interactively

    Canvas layout (900x700px):
    - Top section (900x500): Large coordinate grid
    - Bottom section (900x200): Control panel and definition builder

    Visual elements in graph area:
    - Coordinate plane with grid
    - Each "piece" of the function plotted in different color
    - Transition points between pieces marked with:
      - Closed dot (●) if point is included in that piece
      - Open circle (○) if point is excluded from that piece
    - Different pieces shown in alternating colors: blue, red, green, orange
    - Vertical dashed lines at transition points
    - Hover functionality: moving mouse shows coordinates and which piece applies

    Interactive controls:
    - Display: Current piecewise function definition (shown in mathematical notation)
    - Button: "Add piece"
    - For each piece:
      - Input field: "Rule" (e.g., "2*x + 1" or "x^2 - 3")
      - Input field: "Domain start" (e.g., "-5" or "-∞")
      - Input field: "Domain end" (e.g., "0")
      - Dropdown: "Include start?" (closed/open)
      - Dropdown: "Include end?" (closed/open)
      - Button: "Remove this piece" (trash icon)

    - Evaluation section:
      - Input field: "Evaluate at x = "
      - Display: "f(x) = " (shows result)
      - Display: "Using piece X: [rule]"

    - Preset examples dropdown:
      1. "Step function (postage)"
      2. "Absolute value as piecewise"
      3. "Tax bracket function"
      4. "Parking fee function"
      5. "Custom"

    - Button: "Clear all pieces"
    - Checkbox: "Show transition points"
    - Checkbox: "Color code pieces"

    Default parameters:
    - Preset: Absolute value as piecewise
    - Pieces:
      - Piece 1: $-x$ for $x < 0$
      - Piece 2: $x$ for $x \geq 0$
    - Viewing window: $x \in [-10, 10]$, $y \in [-10, 10]$

    Behavior:
    - As user adds/modifies pieces, graph updates in real-time
    - Warn if pieces overlap or leave gaps in domain
    - When evaluating at specific x-value:
      - Determine which piece applies
      - Highlight that piece on graph
      - Show calculation with that piece's rule
      - Display result
    - Mark discontinuities clearly with open/closed circles
    - If user selects preset example, populate with predefined pieces
    - Validate that domain intervals are properly formatted

    Example pieces for presets:

    **Preset 1: Step function (postage)**
    - $f(x) = 0.55$ for $0 < x \leq 1$
    - $f(x) = 0.75$ for $1 < x \leq 2$
    - $f(x) = 0.95$ for $2 < x \leq 3$
    - $f(x) = 1.15$ for $3 < x \leq 4$
    (where x = weight in ounces)

    **Preset 3: Tax bracket**
    - $f(x) = 0.10x$ for $0 \leq x \leq 10000$
    - $f(x) = 1000 + 0.12(x - 10000)$ for $10000 < x \leq 40000$
    - $f(x) = 4600 + 0.22(x - 40000)$ for $x > 40000$

    Implementation notes:
    - Use p5.js for rendering
    - Parse mathematical expressions using math.js library
    - Store pieces as array of objects with {rule, domainStart, domainEnd, includeStart, includeEnd}
    - Plot each piece separately with appropriate domain
    - Use filled circles for included endpoints, hollow circles for excluded
    - Implement robust interval checking for overlaps/gaps

</details>

### Step Functions

A **step function** is a special type of piecewise function where each piece is a constant value. The graph looks like a series of horizontal line segments or "steps." Step functions model situations where values change suddenly at certain points:

- Postage costs (increases at each ounce)
- Parking fees (increases at each hour)
- Tax brackets (changes at income thresholds)

The most famous step function is the **greatest integer function** (also called the **floor function**), denoted $f(x) = \lfloor x \rfloor$. This function outputs the greatest integer less than or equal to $x$:

- $\lfloor 3.7 \rfloor = 3$
- $\lfloor -1.5 \rfloor = -2$
- $\lfloor 5 \rfloor = 5$

### Absolute Value Function

The **absolute value function** is defined as:

$f(x) = |x|$

Recall that absolute value measures the distance from zero, so it always produces non-negative outputs:

- $|5| = 5$
- $|-5| = 5$
- $|0| = 0$

The graph of $y = |x|$ forms a distinctive V-shape, with the vertex at the origin. The function decreases for $x < 0$ and increases for $x \geq 0$.

The absolute value function can be written as a piecewise function:

$$f(x) = |x| = \begin{cases}
-x & \text{if } x < 0 \\
x & \text{if } x \geq 0
\end{cases}$$

Absolute value functions are useful for modeling situations involving distance, error, or deviation from a target value.

## Parent Functions

A **parent function** is the simplest form of a family of functions. It's the "basic" version before any transformations are applied. Understanding parent functions helps you quickly recognize and graph related functions.

Here are the key parent functions you should know:

| Function Family | Parent Function | Graph Shape | Domain | Range |
|----------------|-----------------|-------------|---------|--------|
| Linear | $f(x) = x$ | Straight line through origin (slope 1) | All real numbers | All real numbers |
| Quadratic | $f(x) = x^2$ | Parabola opening upward, vertex at origin | All real numbers | $[0, \infty)$ |
| Absolute Value | $f(x) = |x|$ | V-shape, vertex at origin | All real numbers | $[0, \infty)$ |
| Square Root | $f(x) = \sqrt{x}$ | Half of a sideways parabola | $[0, \infty)$ | $[0, \infty)$ |
| Cubic | $f(x) = x^3$ | S-shaped curve through origin | All real numbers | All real numbers |
| Reciprocal | $f(x) = \frac{1}{x}$ | Two curved branches (hyperbola) | $x \neq 0$ | $y \neq 0$ |

<details markdown="1">
    <summary>Parent Functions Reference Gallery</summary>
    Type: infographic

    Purpose: Provide visual reference for all major parent functions with key characteristics

    Layout: 3x2 grid of function cards (6 total parent functions)

    Each card contains:
    - Function name (large, bold heading)
    - Parent function equation
    - Small graph (200x200px) showing the function
    - Key characteristics list:
      - Domain
      - Range
      - Intercepts
      - Symmetry (if any)
      - Increasing/decreasing intervals

    Cards:

    **Card 1: Linear**
    - Equation: $f(x) = x$
    - Graph: Straight line through origin with slope 1
    - Domain: $(-\infty, \infty)$
    - Range: $(-\infty, \infty)$
    - $x$-intercept: 0, $y$-intercept: 0
    - Symmetry: Origin (odd function)
    - Increasing on: $(-\infty, \infty)$

    **Card 2: Quadratic**
    - Equation: $f(x) = x^2$
    - Graph: U-shaped parabola, vertex at origin
    - Domain: $(-\infty, \infty)$
    - Range: $[0, \infty)$
    - $x$-intercept: 0, $y$-intercept: 0
    - Symmetry: $y$-axis (even function)
    - Decreasing on: $(-\infty, 0)$
    - Increasing on: $(0, \infty)$

    **Card 3: Absolute Value**
    - Equation: $f(x) = |x|$
    - Graph: V-shape, vertex at origin
    - Domain: $(-\infty, \infty)$
    - Range: $[0, \infty)$
    - $x$-intercept: 0, $y$-intercept: 0
    - Symmetry: $y$-axis (even function)
    - Decreasing on: $(-\infty, 0)$
    - Increasing on: $(0, \infty)$

    **Card 4: Square Root**
    - Equation: $f(x) = \sqrt{x}$
    - Graph: Curved line starting at origin, increasing gradually
    - Domain: $[0, \infty)$
    - Range: $[0, \infty)$
    - $x$-intercept: 0, $y$-intercept: 0
    - Symmetry: None
    - Increasing on: $(0, \infty)$

    **Card 5: Cubic**
    - Equation: $f(x) = x^3$
    - Graph: S-shaped curve through origin
    - Domain: $(-\infty, \infty)$
    - Range: $(-\infty, \infty)$
    - $x$-intercept: 0, $y$-intercept: 0
    - Symmetry: Origin (odd function)
    - Increasing on: $(-\infty, \infty)$

    **Card 6: Reciprocal**
    - Equation: $f(x) = \frac{1}{x}$
    - Graph: Two curved branches in quadrants I and III
    - Domain: $(-\infty, 0) \cup (0, \infty)$
    - Range: $(-\infty, 0) \cup (0, \infty)$
    - $x$-intercept: None, $y$-intercept: None
    - Symmetry: Origin (odd function)
    - Decreasing on: $(-\infty, 0)$ and $(0, \infty)$
    - Asymptotes: $x = 0$ and $y = 0$

    Interactive features:
    - Hover over each card to highlight it
    - Click card to expand and show additional examples of that function family
    - Expanded view shows transformations: $f(x-h)$, $f(x)+k$, $a \cdot f(x)$
    - Compare mode: Click two cards to see side-by-side comparison

    Visual style: Modern card design with rounded corners
    Color scheme: Each card has unique accent color (red, blue, green, orange, purple, teal)
    Graphs: Clean coordinate grids with axes and scale markers

    Implementation: HTML/CSS/JavaScript with SVG or Canvas for graphs
</details>

## Function Transformations

**Function transformations** allow us to take a parent function and modify its graph in predictable ways. The four basic types of transformations are:

1. **Translations** (shifts up/down or left/right)
2. **Reflections** (flips across an axis)
3. **Vertical stretches/compressions** (makes graph taller or shorter)
4. **Horizontal stretches/compressions** (makes graph wider or narrower)

Understanding transformations lets you graph complex functions quickly by starting with a parent function and applying transformations step by step.

### Translations

**Translations** shift the graph without changing its shape. There are two types:

**Vertical translations:** Adding a constant $k$ to the function shifts the graph vertically.

- $g(x) = f(x) + k$ shifts the graph **up** by $k$ units if $k > 0$
- $g(x) = f(x) - k$ shifts the graph **down** by $k$ units if $k > 0$

**Horizontal translations:** Replacing $x$ with $(x - h)$ shifts the graph horizontally.

- $g(x) = f(x - h)$ shifts the graph **right** by $h$ units if $h > 0$
- $g(x) = f(x + h)$ shifts the graph **left** by $h$ units if $h > 0$

**Important:** Horizontal shifts can be counterintuitive! $f(x - 3)$ shifts right by 3, not left.

**Examples with the parent function $f(x) = x^2$:**

- $g(x) = x^2 + 4$ shifts the parabola up 4 units (vertex moves from $(0,0)$ to $(0,4)$)
- $g(x) = x^2 - 2$ shifts the parabola down 2 units (vertex moves from $(0,0)$ to $(0,-2)$)
- $g(x) = (x - 3)^2$ shifts the parabola right 3 units (vertex moves from $(0,0)$ to $(3,0)$)
- $g(x) = (x + 1)^2$ shifts the parabola left 1 unit (vertex moves from $(0,0)$ to $(-1,0)$)
- $g(x) = (x - 2)^2 + 3$ combines both: right 2 units and up 3 units (vertex at $(2,3)$)

### Reflections

**Reflections** flip the graph across an axis, creating a mirror image.

**Reflection across the $x$-axis:** Multiply the entire function by $-1$.

- $g(x) = -f(x)$ reflects the graph across the $x$-axis
- Every point $(x, y)$ becomes $(x, -y)$

**Reflection across the $y$-axis:** Replace $x$ with $-x$.

- $g(x) = f(-x)$ reflects the graph across the $y$-axis
- Every point $(x, y)$ becomes $(-x, y)$

**Examples:**

- $g(x) = -x^2$ reflects the parabola $f(x) = x^2$ across the $x$-axis (opens downward instead of upward)
- $g(x) = |-x|$ reflects the absolute value function across the $y$-axis (but it looks the same due to symmetry!)
- $g(x) = -|x|$ reflects the absolute value function across the $x$-axis (creates an upside-down V)

<details markdown="1">
    <summary>Function Transformations Interactive Explorer</summary>
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

</details>

## Linear and Quadratic Functions Preview

While we'll explore these function families in much greater detail in later chapters, it's helpful to introduce them here as important examples of functions you'll work with frequently.

### Linear Functions

A **linear function** has the form:

$f(x) = mx + b$

where:

- $m$ is the slope (rate of change)
- $b$ is the $y$-intercept (where the graph crosses the $y$-axis)

The graph of a linear function is always a straight line. Linear functions model situations with constant rates of change:

- Distance traveled at constant speed
- Total cost when price per item is fixed
- Temperature conversion (Fahrenheit to Celsius)

Key characteristics of linear functions:

- Domain: All real numbers
- Range: All real numbers (unless $m = 0$, then range is just $\{b\}$)
- Continuous
- One $x$-intercept (unless the line is horizontal)
- Constant rate of change (slope)

### Quadratic Functions

A **quadratic function** has the form:

$f(x) = ax^2 + bx + c$

where:

- $a$ determines whether the parabola opens up ($a > 0$) or down ($a < 0$)
- $b$ affects the position of the vertex
- $c$ is the $y$-intercept

The graph of a quadratic function is a parabola (U-shaped curve). Quadratic functions model many real-world phenomena:

- Projectile motion (height of a thrown ball over time)
- Area problems
- Profit/revenue in business
- Suspension bridge cables

Key characteristics of quadratic functions:

- Domain: All real numbers
- Range: Depends on whether parabola opens up or down
- Continuous
- Has a vertex (maximum or minimum point)
- Symmetric across vertical line through vertex
- Can have 0, 1, or 2 $x$-intercepts

We'll explore both of these important function types in much greater depth in Chapters 9 and 11.

## Real-World Applications of Functions

Functions are not just abstract mathematical concepts—they model countless real-world relationships. Here are some examples:

**Economics and Business:**

- Cost functions: $C(n) = 50 + 3n$ (total cost for $n$ items with fixed cost \$50 and variable cost \$3 per item)
- Revenue functions: $R(n) = 15n$ (revenue from selling $n$ items at \$15 each)
- Profit functions: $P(n) = R(n) - C(n)$ (profit is revenue minus cost)

**Science:**

- Temperature conversion: $C(F) = \frac{5}{9}(F - 32)$ (Celsius as a function of Fahrenheit)
- Distance: $d(t) = 60t$ (distance traveled at 60 mph for $t$ hours)
- Free fall: $h(t) = -16t^2 + v_0 t + h_0$ (height of object dropped or thrown)

**Everyday Life:**

- Cell phone plans: Piecewise function with different rates for different usage tiers
- Taxi fares: Step function based on distance
- Tax calculations: Piecewise function with tax brackets

Understanding functions empowers you to model these situations mathematically, make predictions, and solve practical problems.

<details markdown="1">
    <summary>Real-World Function Modeling Interactive Scenarios</summary>
    Type: microsim

    Learning objective: Apply function concepts to model and solve real-world problems across various contexts

    Canvas layout (1000x700px):
    - Top section (1000x100): Scenario description and problem statement
    - Middle-left (500x400): Visualization area (graph or animation)
    - Middle-right (500x400): Work area showing function and calculations
    - Bottom (1000x200): Interactive controls and inputs

    Scenarios (user-selectable):

    **Scenario 1: Cell Phone Plan**

    Description: "A cell phone plan costs \$40/month for up to 2GB of data. Each additional GB costs \$15. Model the monthly cost as a function of data usage."

    Visualization:
    - Bar chart showing cost for different data amounts (0-6 GB)
    - Highlight current selection

    Function display:
    $$C(d) = \begin{cases}
    40 & \text{if } 0 \leq d \leq 2 \\
    40 + 15(d-2) & \text{if } d > 2
    \end{cases}$$

    Interactive elements:
    - Slider: "Data usage (GB)" from 0 to 6
    - Display: "Your bill: $X"
    - Input: "How much data can I use for $100?"
    - Button: "Calculate"

    **Scenario 2: Projectile Motion**

    Description: "A ball is thrown upward from a height of 5 feet with initial velocity of 40 ft/s. Its height is given by $h(t) = -16t^2 + 40t + 5$. When does it hit the ground?"

    Visualization:
    - Animation of ball trajectory
    - Graph of height vs. time
    - Ground level marked at $y = 0$

    Function display:
    - $h(t) = -16t^2 + 40t + 5$
    - Domain: $t \geq 0$ (time cannot be negative)
    - Range: $[0, \text{max height}]$

    Interactive elements:
    - Slider: "Time (seconds)" from 0 to 3
    - Display: "Height at t = X seconds: Y feet"
    - Button: "Play animation"
    - Button: "Find maximum height"
    - Button: "Find when ball hits ground"

    **Scenario 3: Business Profit**

    Description: "A company sells widgets for \$25 each. Fixed costs are \$500/month and each widget costs \$10 to produce. Find the profit function and break-even point."

    Visualization:
    - Graph showing cost, revenue, and profit functions
    - Break-even point marked with star
    - Shaded region showing profit/loss

    Function display:
    - Revenue: $R(n) = 25n$
    - Cost: $C(n) = 500 + 10n$
    - Profit: $P(n) = R(n) - C(n) = 15n - 500$

    Interactive elements:
    - Slider: "Widgets sold" from 0 to 100
    - Display: "Revenue: $X"
    - Display: "Cost: $Y"
    - Display: "Profit: $Z" (green if positive, red if negative)
    - Button: "Find break-even point"
    - Input: "Widgets needed for $1000 profit?"

    **Scenario 4: Temperature Conversion**

    Description: "Convert between Fahrenheit and Celsius using the function $C(F) = \frac{5}{9}(F - 32)$."

    Visualization:
    - Dual thermometers showing Fahrenheit and Celsius
    - Important reference points marked (freezing, boiling, body temp)
    - Graph of conversion function

    Function display:
    - $C(F) = \frac{5}{9}(F - 32)$
    - Inverse: $F(C) = \frac{9}{5}C + 32$

    Interactive elements:
    - Slider: "Fahrenheit" from -40 to 212
    - Display: "Celsius: X°"
    - Slider: "Celsius" from -40 to 100
    - Display: "Fahrenheit: Y°"
    - Buttons for common temperatures: "Water freezes", "Room temp", "Body temp", "Water boils"

    **Scenario 5: Parking Garage Fees**

    Description: "A parking garage charges \$5 for the first hour and \$3 for each additional hour or part of an hour. Model this as a step function."

    Visualization:
    - Step function graph
    - Horizontal segments showing constant cost for each hour
    - Jumps at hour boundaries

    Function display:
    $$P(h) = \begin{cases}
    5 & \text{if } 0 < h \leq 1 \\
    5 + 3\lceil h-1 \rceil & \text{if } h > 1
    \end{cases}$$

    Where $\lceil x \rceil$ is the ceiling function (round up)

    Interactive elements:
    - Slider: "Hours parked" from 0 to 8 (decimal values allowed)
    - Display: "Parking fee: $X"
    - Note: "Partial hours are charged as full hours"
    - Input: "Maximum hours for $20?"

    General Features (all scenarios):
    - Dropdown: "Select scenario" (switches between the 5 scenarios)
    - Button: "Show solution steps" (reveals step-by-step algebraic work)
    - Button: "New problem" (generates variant with different numbers)
    - Display: Domain and range for current function
    - Checkbox: "Show grid"
    - Checkbox: "Show key points"

    Default parameters:
    - Scenario: Cell Phone Plan
    - All visualizations active
    - Step-by-step solutions hidden initially

    Implementation notes:
    - Use p5.js for graphs and animations
    - For projectile motion, use parametric plotting with time steps
    - For step functions, carefully plot discontinuities with open/closed circles
    - Include validation for user inputs (non-negative where appropriate)
    - Provide clear error messages for invalid inputs
    - Use color coding: green for profit/gain, red for loss/cost, blue for revenue
    - Animate transitions when switching scenarios

</details>

## Summary

In this chapter, you've been introduced to functions, one of the most powerful concepts in all of mathematics. Let's recap the key ideas:

**Core Concepts:**

- A **function** is a special relation where each input has exactly one output
- The **vertical line test** determines if a graph represents a function
- **Function notation** $f(x)$ provides a compact way to represent and evaluate functions
- The **domain** is the set of all possible inputs; the **range** is the set of all possible outputs

**Function Types:**

- **Continuous functions** have graphs with no breaks
- **Piecewise functions** use different rules for different parts of the domain
- **Step functions** are piecewise functions with constant pieces
- **Absolute value functions** measure distance from zero, creating V-shaped graphs

**Important Function Families:**

- **Parent functions** are the simplest forms of function families (like $f(x) = x^2$ for quadratics)
- **Linear functions** have constant rates of change and straight-line graphs
- **Quadratic functions** create parabolic graphs and model many natural phenomena

**Transformations:**

- **Translations** shift graphs vertically ($f(x) + k$) or horizontally ($f(x-h)$)
- **Reflections** flip graphs across axes

Functions provide a powerful framework for modeling relationships in the real world, from business applications to scientific phenomena. As you continue through Algebra I, you'll deepen your understanding of specific function types and develop expertise in using functions to solve complex problems.

In the next chapter, we'll explore graphing in detail and focus extensively on linear functions—their properties, representations, and applications.

## References

1. [Introduction to the domain and range of a function](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:introduction-to-the-domain-and-range-of-a-function/e/domain_and_range_0.5) - Khan Academy - Interactive exercises helping students understand domain and range concepts through graphs and function notation, with immediate feedback on practice problems.
