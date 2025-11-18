# Graphing and Linear Functions

## Summary

This chapter provides comprehensive coverage of the coordinate plane and linear functions. Students will learn to plot points, identify coordinates, and understand the structure of the coordinate plane including quadrants and the origin. The chapter extensively covers slope and rate of change, teaching students to calculate and interpret slope in multiple ways. Students will master three forms of linear equations (slope-intercept, point-slope, and standard form), learn to graph lines using various methods, and work with special cases including horizontal and vertical lines.

## Concepts Covered

This chapter covers the following 24 concepts from the learning graph:

1. Coordinate Plane
2. Ordered Pair
3. X-Coordinate
4. Y-Coordinate
5. Origin
6. Quadrants
7. Plotting Points
8. Graph of a Line
9. X-Intercept
10. Y-Intercept
11. Slope
12. Rise
13. Run
14. Rate of Change
15. Slope Formula
16. Positive Slope
17. Negative Slope
18. Zero Slope
19. Undefined Slope
20. Slope-Intercept Form
21. Point-Slope Form
22. Standard Form
23. Horizontal Line
24. Vertical Line

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Number Systems and Properties](../02-number-systems-and-properties/index.md)
- [Chapter 6: Solving Linear Equations](../06-solving-linear-equations/index.md)
- [Chapter 8: Introduction to Functions](../08-introduction-to-functions/index.md)

---

## The Coordinate Plane

The **coordinate plane** (also called the Cartesian plane, named after mathematician René Descartes) is one of the most powerful tools in mathematics. It provides a visual way to represent relationships between numbers and allows us to translate algebraic equations into geometric pictures.

Think of the coordinate plane as a map for mathematics. Just as you can locate any place on Earth using latitude and longitude, you can locate any point on the coordinate plane using two numbers called coordinates.

### Structure of the Coordinate Plane

The coordinate plane consists of two perpendicular number lines that intersect at their zero points:

- The horizontal number line is called the **x-axis**
- The vertical number line is called the **y-axis**
- The point where they intersect is called the **origin**, labeled $(0, 0)$

These two axes divide the plane into four regions called **quadrants**, numbered counterclockwise using Roman numerals:

- **Quadrant I:** Upper right (both $x$ and $y$ are positive)
- **Quadrant II:** Upper left ($x$ is negative, $y$ is positive)
- **Quadrant III:** Lower left (both $x$ and $y$ are negative)
- **Quadrant IV:** Lower right ($x$ is positive, $y$ is negative)

#### Diagram: Interactive Coordinate Plane Explorer

<details markdown="1">
    <summary>Interactive Coordinate Plane Explorer</summary>
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

</details>

### Ordered Pairs and Coordinates

An **ordered pair** is a set of two numbers written in parentheses and separated by a comma: $(x, y)$. The order matters! $(3, 5)$ and $(5, 3)$ represent completely different points.

In an ordered pair $(x, y)$:

- The **x-coordinate** (first number) tells you how far to move horizontally from the origin
  - Positive $x$: move right
  - Negative $x$: move left
  - Zero: stay at the origin (on the y-axis)

- The **y-coordinate** (second number) tells you how far to move vertically from the origin
  - Positive $y$: move up
  - Negative $y$: move down
  - Zero: stay at the origin (on the x-axis)

### Plotting Points

**Plotting a point** means marking its location on the coordinate plane. To plot the point $(x, y)$:

1. Start at the origin $(0, 0)$
2. Move horizontally according to the $x$-coordinate
3. Then move vertically according to the $y$-coordinate
4. Mark the point with a dot

**Examples:**

- **Point $(4, 2)$:** Start at origin, move 4 units right, then 2 units up → Quadrant I
- **Point $(−3, 5)$:** Start at origin, move 3 units left, then 5 units up → Quadrant II
- **Point $(−2, −4)$:** Start at origin, move 2 units left, then 4 units down → Quadrant III
- **Point $(6, −1)$:** Start at origin, move 6 units right, then 1 unit down → Quadrant IV
- **Point $(0, 3)$:** No horizontal movement, 3 units up → on the y-axis
- **Point $(−5, 0)$:** 5 units left, no vertical movement → on the x-axis

Points on the axes don't belong to any quadrant—they're on the boundary between quadrants.

## Linear Functions and Their Graphs

In Chapter 8, you learned that a **linear function** has the form $f(x) = mx + b$. Now we'll explore what these functions look like when we graph them.

### The Graph of a Line

The **graph of a line** is the visual representation of all points $(x, y)$ that satisfy a linear equation. When you plot all solutions to a linear equation, they form a perfectly straight line—hence the name "linear."

Key properties of the graph of any linear function:

- The graph is always a straight line
- The line extends infinitely in both directions
- Every point on the line is a solution to the equation
- Every solution to the equation is a point on the line

To graph a line, you only need two points (since two points determine a unique line), but plotting a third point is good practice to check for errors.

### Intercepts

**Intercepts** are special points where a line crosses the axes. They're particularly useful for graphing and understanding linear functions.

The **x-intercept** is the point where the line crosses the x-axis. At this point, the $y$-coordinate is always zero, so the x-intercept has the form $(a, 0)$.

To find the x-intercept algebraically:
1. Set $y = 0$ in your equation
2. Solve for $x$

The **y-intercept** is the point where the line crosses the y-axis. At this point, the $x$-coordinate is always zero, so the y-intercept has the form $(0, b)$.

To find the y-intercept algebraically:
1. Set $x = 0$ in your equation
2. Solve for $y$

**Example:** For the equation $y = 2x - 6$

**Find the y-intercept:**

Set $x = 0$: $y = 2(0) - 6 = -6$

Y-intercept: $(0, -6)$

**Find the x-intercept:**

Set $y = 0$: $0 = 2x - 6$

$2x = 6$

$x = 3$

X-intercept: $(3, 0)$

With these two intercepts, you can easily graph the line by plotting these points and drawing a straight line through them.

#### Diagram: Intercepts and Graphing Interactive Practice

<details markdown="1">
    <summary>Intercepts and Graphing Interactive Practice</summary>
    Type: microsim

    Learning objective: Help students find intercepts algebraically and use them to graph linear equations

    Canvas layout (900x650px):
    - Left side (450x650): Coordinate grid
    - Right side (450x650): Work area and controls

    Visual elements in graph area:
    - Coordinate plane from -10 to 10 on both axes
    - Line graphed based on current equation
    - X-intercept marked with red dot and label
    - Y-intercept marked with blue dot and label
    - Both intercepts connected by the line
    - Grid lines for accurate reading

    Work area (right side):
    - Current equation displayed: e.g., "$y = 3x - 6$"
    - Step-by-step solution section:

      **Finding y-intercept:**
      - "Set $x = 0$"
      - Substitution step shown
      - Result: "y-intercept = (0, b)"

      **Finding x-intercept:**
      - "Set $y = 0$"
      - Equation to solve shown
      - Solution steps
      - Result: "x-intercept = (a, 0)"

    - Student input section:
      - "Y-intercept: (" [0] "," [input box] ")"
      - "X-intercept: (" [input box] "," [0] ")"
      - Button: "Check Intercepts"
      - Feedback message area (green for correct, red for incorrect)

    Interactive controls:
    - Dropdown: "Equation type"
      Options:
      1. Slope-intercept form: $y = mx + b$
      2. Standard form: $Ax + By = C$
      3. Random
    - Button: "New Problem"
    - Button: "Show Solution" (toggles step-by-step work)
    - Checkbox: "Show intercepts on graph"
    - Checkbox: "Show line"
    - Slider: "Viewing window" (adjusts zoom)
    - Display: "Score: X/Y correct"

    Default parameters:
    - Equation: $y = 2x - 4$
    - Show intercepts: On
    - Show line: On
    - Viewing window: -10 to 10

    Behavior:
    - When "New Problem" clicked:
      - Generate random linear equation
      - Clear student inputs
      - Update graph
      - Hide solution initially
    - When student enters intercepts and clicks "Check":
      - Verify both intercepts are correct
      - If correct: Show green "Correct!" and increment score
      - If incorrect: Show red "Not quite" and highlight which intercept is wrong
      - Automatically generate new problem after 2 seconds if correct
    - "Show Solution" reveals step-by-step algebraic work
    - Graph updates in real-time with equation changes
    - Intercept markers pulse to draw attention

    Problem generation:
    - For slope-intercept: $y = mx + b$ where $m \in [-5, 5]$, $b \in [-10, 10]$, both integers
    - For standard form: $Ax + By = C$ where $A, B, C$ are integers, ensure both intercepts exist
    - Avoid trivial cases like $y = 0$ or $x = 0$

    Implementation notes:
    - Use p5.js for rendering
    - Calculate intercepts programmatically from equation
    - Plot line using two-point method
    - Validate student inputs with tolerance of 0.01 for rounding
    - Use MathJax or KaTeX for equation rendering
    - Provide hints if student struggles (after 2 wrong attempts)

</details>

## Slope and Rate of Change

**Slope** is one of the most important concepts in algebra. It measures the steepness and direction of a line. Understanding slope helps you describe and predict how quantities change in relation to each other.

### Understanding Slope

Slope tells you how much the $y$-value changes for every unit change in the $x$-value. Think of it as:

- How steep is the line?
- Is it going uphill or downhill (as you move from left to right)?
- How fast is one quantity changing relative to another?

In everyday terms, slope represents **rate of change**:

- A car's speed: miles per hour (distance changes over time)
- A salary: dollars per hour (money changes over time)
- A hill's steepness: vertical rise per horizontal distance

### Rise and Run

Slope is calculated using two components:

**Rise:** The vertical change between two points (change in $y$)

- Rise is positive if you move up
- Rise is negative if you move down

**Run:** The horizontal change between two points (change in $x$)

- Run is positive if you move right
- Run is negative if you move left (though we usually move left to right)

#### Slope Formula

$$m = \frac{\text{rise}}{\text{run}} = \frac{\text{change in } y}{\text{change in } x} = \frac{y_2 - y_1}{x_2 - x_1}$$

where:

- $m$ is the slope
- $(x_1, y_1)$ is the first point
- $(x_2, y_2)$ is the second point

**Example:** Find the slope of the line through $(2, 3)$ and $(6, 11)$.

Using the slope formula:

$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{11 - 3}{6 - 2} = \frac{8}{4} = 2$

The slope is $2$, meaning for every 1 unit you move right, the line rises 2 units.

**Important:** The slope is the same no matter which two points you choose on the line, and it doesn't matter which point you call $(x_1, y_1)$ and which you call $(x_2, y_2)$—just be consistent in your calculation.

### Types of Slope

Lines can have four different types of slope, each with distinct characteristics:

**Positive Slope:** The line rises from left to right (goes uphill)

- $m > 0$
- As $x$ increases, $y$ increases
- Example: $y = 3x + 1$ has slope $m = 3$

**Negative Slope:** The line falls from left to right (goes downhill)

- $m < 0$
- As $x$ increases, $y$ decreases
- Example: $y = -2x + 5$ has slope $m = -2$

**Zero Slope:** The line is horizontal (flat)

- $m = 0$
- The $y$-value never changes
- Equation form: $y = b$ (constant)
- Example: $y = 4$ has slope $m = 0$

**Undefined Slope:** The line is vertical (straight up and down)

- Slope cannot be calculated (division by zero)
- The $x$-value never changes
- Equation form: $x = a$ (constant)
- Example: $x = -3$ has undefined slope
- Note: Vertical lines are NOT functions!

#### Diagram: Slope Visualizer and Calculator

<details markdown="1">
    <summary>Slope Visualizer and Calculator</summary>
    Type: microsim

    Learning objective: Help students visualize slope, understand rise/run, and calculate slope between two points

    Canvas layout (950x700px):
    - Left side (550x700): Large coordinate grid
    - Right side (400x700): Controls and calculations

    Visual elements in graph area:
    - Coordinate plane from -10 to 10 on both axes
    - Two draggable points (Point A and Point B) connected by a line
    - Point A marked in red, labeled with coordinates
    - Point B marked in blue, labeled with coordinates
    - Line extending through both points (dashed beyond the points)
    - Rise shown as vertical line segment (red) from Point A level to Point B
    - Run shown as horizontal line segment (blue) from Point A to below Point B
    - Right triangle formed by rise and run (shaded lightly)
    - Slope value displayed on the line itself
    - Reference arrows showing direction: "↗ Positive", "↘ Negative", "→ Zero", "↕ Undefined"

    Control panel (right side):
    - Display: "Point A: (x₁, y₁) = ([value], [value])"
    - Display: "Point B: (x₂, y₂) = ([value], [value])"
    - Calculation shown step by step:
      - "Rise = y₂ − y₁ = [value]"
      - "Run = x₂ − x₁ = [value]"
      - "Slope = Rise ÷ Run = [value]"
      - Or "Slope = undefined" if vertical
    - Display: "Slope type: [Positive/Negative/Zero/Undefined]"
    - Display: "Interpretation: For every [run] units right, line goes [up/down] [rise] units"

    - Input section for practice:
      - "Enter Point A: (" [input] "," [input] ")"
      - "Enter Point B: (" [input] "," [input] ")"
      - Button: "Plot Points"
      - "Your slope calculation: " [input box]
      - Button: "Check Answer"

    - Preset examples:
      - Button: "Steep positive" (e.g., m = 5)
      - Button: "Gentle positive" (e.g., m = 0.5)
      - Button: "Steep negative" (e.g., m = −4)
      - Button: "Gentle negative" (e.g., m = −0.25)
      - Button: "Horizontal" (m = 0)
      - Button: "Vertical" (m = undefined)
      - Button: "Random"

    - Checkboxes:
      - "Show rise and run triangle"
      - "Show slope calculation"
      - "Show full line extension"
      - "Show direction indicators"

    Default parameters:
    - Point A: (1, 2)
    - Point B: (5, 6)
    - Slope: 1
    - All visual aids enabled

    Behavior:
    - Users can drag either point anywhere on the grid
    - As points move, rise/run triangle updates in real-time
    - Slope calculation updates automatically
    - Slope type identification updates (positive/negative/zero/undefined)
    - Visual feedback:
      - Positive slope: line and triangle shaded green
      - Negative slope: line and triangle shaded red
      - Zero slope: line and triangle shaded yellow
      - Undefined slope: vertical line shaded orange, triangle not shown
    - When user enters points manually:
      - Points jump to specified locations with animation
      - Line and calculations update
    - When user calculates slope manually and clicks "Check Answer":
      - Compare to correct slope
      - Show green "Correct!" or red "Incorrect. The slope is [value]"
    - Preset buttons set specific slope examples instantly
    - Random button generates two random integer points

    Special handling:
    - When points are very close, zoom in automatically
    - When slope is undefined, display clear message: "Vertical line: slope is undefined (division by zero)"
    - When slope is zero, emphasize horizontal nature: "Horizontal line: slope is zero (no rise)"
    - Display slope as fraction when possible (e.g., "3/2" instead of "1.5")

    Implementation notes:
    - Use p5.js for rendering
    - Implement draggable points with collision detection
    - Calculate slope with proper handling of special cases (vertical/horizontal)
    - Draw rise/run triangle using lines or shapes
    - Use color coding consistently throughout
    - Format slope display: show as fraction, decimal, or "undefined"
    - Add smooth transitions when switching between preset examples

</details>

## Forms of Linear Equations

Linear equations can be written in three different forms, each useful for different purposes. Understanding when to use each form will make you more efficient at solving problems.

### Slope-Intercept Form

**Slope-intercept form** is the most common and often the most useful form of a linear equation:

$$y = mx + b$$

where:

- $m$ is the slope
- $b$ is the y-intercept (the $y$-coordinate where the line crosses the y-axis)

**When to use slope-intercept form:**

- When you know the slope and y-intercept
- When you want to quickly graph a line
- When you want to easily identify the slope and y-intercept by inspection
- When comparing multiple lines

**Example:** The equation $y = 3x - 4$

- Slope: $m = 3$ (line rises 3 units for every 1 unit right)
- Y-intercept: $b = -4$ (line crosses y-axis at $(0, -4)$)

**Graphing from slope-intercept form:**

1. Plot the y-intercept $(0, b)$
2. Use the slope to find another point: from $(0, b)$, move right 1 unit and up $m$ units
3. Draw a line through the two points

### Point-Slope Form

**Point-slope form** is useful when you know one point on the line and the slope:

$$y - y_1 = m(x - x_1)$$

where:

- $m$ is the slope
- $(x_1, y_1)$ is a point on the line

**When to use point-slope form:**

- When you're given a point and the slope
- When you're given two points (calculate slope first, then use either point)
- As an intermediate step before converting to slope-intercept form

**Example:** Write an equation for the line with slope $m = 2$ passing through $(3, 5)$.

Using point-slope form:

$y - 5 = 2(x - 3)$

This can be left as-is, or converted to slope-intercept form:

$y - 5 = 2x - 6$

$y = 2x - 1$

### Standard Form

**Standard form** for a linear equation is:

$$Ax + By = C$$

where:

- $A$, $B$, and $C$ are integers
- $A$ should be non-negative (by convention)
- $A$ and $B$ cannot both be zero

**When to use standard form:**

- When working with systems of equations (easier to align equations)
- When both intercepts need to be found quickly
- For certain application problems
- When integers are preferred over fractions or decimals

**Example:** The equation $3x + 2y = 12$

To find intercepts in standard form:

**X-intercept** (set $y = 0$):

$3x + 2(0) = 12$

$3x = 12$

$x = 4$

X-intercept: $(4, 0)$

**Y-intercept** (set $x = 0$):

$3(0) + 2y = 12$

$2y = 12$

$y = 6$

Y-intercept: $(0, 6)$

### Converting Between Forms

You can convert between these three forms using algebraic manipulation:

| From | To | Method |
|------|-----|--------|
| Point-slope | Slope-intercept | Distribute and solve for $y$ |
| Slope-intercept | Standard | Move $x$ term to left side, multiply to clear fractions |
| Standard | Slope-intercept | Solve for $y$ |
| Slope-intercept | Point-slope | Use any point on the line with the slope |

#### Diagram: Linear Equation Forms Converter and Grapher

<details markdown="1">
    <summary>Linear Equation Forms Converter and Grapher</summary>
    Type: microsim

    Learning objective: Help students convert between different forms of linear equations and understand when each form is most useful

    Canvas layout (1000x750px):
    - Top (1000x550): Three panels side by side (330px each) showing the three forms
    - Middle (1000x50): Conversion controls
    - Bottom left (500x150): Coordinate graph
    - Bottom right (500x150): Information and interpretation panel

    Three form panels (top row):

    **Panel 1: Slope-Intercept Form**
    - Header: "Slope-Intercept Form"
    - Display: "$y = mx + b$"
    - Input fields: "$y =$ [m input] $x +$ [b input]"
    - Or: "Slope $m =$ [input]" and "Y-intercept $b =$ [input]"
    - Display current values: "Slope = [value]", "Y-intercept = (0, [value])"
    - Button: "Set as primary"
    - Visual indicator when this is the primary form (highlighted border)

    **Panel 2: Point-Slope Form**
    - Header: "Point-Slope Form"
    - Display: "$y - y_1 = m(x - x_1)$"
    - Input fields: "$y -$ [y₁ input] $= $ [m input] $(x -$ [x₁ input] $)$"
    - Or: "Point: (" [x₁ input] "," [y₁ input] ") and Slope: " [m input]
    - Display current values: "Point = ([x₁], [y₁])", "Slope = [m]"
    - Button: "Set as primary"
    - Visual indicator when this is the primary form

    **Panel 3: Standard Form**
    - Header: "Standard Form"
    - Display: "$Ax + By = C$"
    - Input fields: [A input] "$x +$" [B input] "$y =$" [C input]
    - Display current values: "A = [value]", "B = [value]", "C = [value]"
    - Button: "Set as primary"
    - Note displayed: "A, B, C should be integers; A ≥ 0"
    - Visual indicator when this is the primary form

    Conversion controls (middle section):
    - Dropdown: "Start with form:" [Slope-Intercept / Point-Slope / Standard]
    - Button: "Convert to all forms" (shows step-by-step conversion)
    - Button: "New random equation"
    - Display: "Conversion steps shown below ↓"

    Graph area (bottom left):
    - Small coordinate grid (-10 to 10)
    - Line plotted based on current equation
    - Intercepts marked
    - Slope triangle shown
    - Key point from point-slope form marked (if applicable)

    Information panel (bottom right):
    - "Current line characteristics:"
    - "Slope: [value] → [interpretation: rising/falling/horizontal/vertical]"
    - "X-intercept: ([value], 0)"
    - "Y-intercept: (0, [value])"
    - "Passes through: ([x₁], [y₁])" (from point-slope)
    - "When to use each form:" [shows context-sensitive advice]

    Default parameters:
    - Primary form: Slope-intercept
    - Equation: $y = 2x + 3$
    - Corresponding forms auto-calculated

    Behavior:

    **When user enters values in any form:**
    - Equation updates
    - Graph updates in real-time
    - Other two forms auto-calculate and display
    - Information panel updates

    **When "Convert to all forms" is clicked:**
    - Show step-by-step conversion animation
    - Display algebraic steps for each conversion
    - Highlight the algebra being performed at each step
    - Sequence:
      1. Show starting form (highlighted)
      2. Show first conversion step
      3. Show result in second form (highlighted)
      4. Show conversion to third form
      5. Show final result (highlighted)

    **When "New random equation" is clicked:**
    - Generate random linear equation
    - Display in currently selected primary form
    - Auto-calculate other forms
    - Update graph

    **Conversion step displays:**

    Example: Slope-intercept to Standard

    Starting: $y = 2x + 3$
    Step 1: Subtract $2x$ from both sides: $-2x + y = 3$
    Step 2: Multiply by $-1$ to make A positive: $2x - y = -3$
    Result (Standard form): $2x - y = -3$

    Example: Point-slope to Slope-intercept

    Starting: $y - 5 = 2(x - 3)$
    Step 1: Distribute: $y - 5 = 2x - 6$
    Step 2: Add 5 to both sides: $y = 2x - 1$
    Result (Slope-intercept): $y = 2x - 1$

    Special features:
    - Quiz mode: Show equation in one form, ask student to convert to another form
    - Validation: Check that standard form uses integers and A ≥ 0
    - Highlighting: When user hovers over a form, corresponding parts highlight on graph
      - Hover over slope → slope triangle highlights
      - Hover over y-intercept → y-intercept point highlights
      - Hover over point in point-slope → that point highlights on graph
    - Comparison mode: Display two different equations and compare slopes, intercepts

    Implementation notes:
    - Use p5.js for graph rendering
    - Implement algebraic conversion algorithms for all form pairs
    - Validate inputs to ensure equations are valid
    - Use MathJax or KaTeX for equation rendering
    - Store internal representation as slope-intercept, convert as needed
    - Handle special cases: vertical lines (cannot be in slope-intercept), horizontal lines
    - Display fractions in lowest terms when possible
    - Provide undo/redo functionality for equation changes

</details>

## Special Cases: Horizontal and Vertical Lines

Two special types of lines deserve extra attention because they behave differently from typical diagonal lines.

### Horizontal Lines

A **horizontal line** is perfectly flat—it runs parallel to the x-axis. All points on a horizontal line have the same $y$-coordinate.

**Equation form:** $y = b$ (where $b$ is a constant)

**Example:** $y = 4$ means every point has $y$-coordinate equal to 4: $(−3, 4)$, $(0, 4)$, $(5, 4)$, etc.

**Characteristics:**

- Slope: $m = 0$ (zero slope)
- Y-intercept: $(0, b)$
- X-intercept: None (unless $b = 0$, then every point is on the x-axis)
- It IS a function (passes vertical line test)

**Real-world examples:**

- Your height throughout a day (relatively constant)
- Room temperature when thermostat maintains exact temperature
- Price of an item with no tax or discounts

### Vertical Lines

A **vertical line** runs straight up and down—it's parallel to the y-axis. All points on a vertical line have the same $x$-coordinate.

**Equation form:** $x = a$ (where $a$ is a constant)

**Example:** $x = −2$ means every point has $x$-coordinate equal to $−2$: $(−2, 1)$, $(−2, 0)$, $(−2, 5)$, etc.

**Characteristics:**

- Slope: undefined (division by zero since run = 0)
- Y-intercept: None (unless $a = 0$, then it's the y-axis itself)
- X-intercept: $(a, 0)$
- It is NOT a function (fails vertical line test)

**Real-world examples:**

- The edge of a wall
- A specific time on a timeline (all events at noon, for example)
- A geographic boundary at a specific longitude

| Feature | Horizontal Line ($y = b$) | Vertical Line ($x = a$) |
|---------|---------------------------|-------------------------|
| Equation form | $y = b$ | $x = a$ |
| Slope | Zero ($m = 0$) | Undefined |
| Orientation | Parallel to x-axis | Parallel to y-axis |
| Is it a function? | YES | NO |
| X-intercept | None (unless $b=0$) | $(a, 0)$ |
| Y-intercept | $(0, b)$ | None (unless $a=0$) |

#### Diagram: Special Lines Explorer: Horizontal and Vertical

<details markdown="1">
    <summary>Special Lines Explorer: Horizontal and Vertical</summary>
    Type: microsim

    Learning objective: Help students understand horizontal and vertical lines, their equations, slopes, and special properties

    Canvas layout (850x700px):
    - Left side (500x700): Coordinate grid
    - Right side (350x700): Controls and information panel

    Visual elements in graph area:
    - Coordinate plane from -10 to 10 on both axes
    - One or two lines displayed (horizontal and/or vertical)
    - Lines drawn in bold colors (red for horizontal, blue for vertical)
    - Intercept points marked with dots
    - Shaded region along the line to emphasize it
    - Labels showing equation on the line itself

    Control panel (right side):

    **Horizontal Line Controls:**
    - Checkbox: "Show horizontal line"
    - Slider: "Value of b" (from -10 to 10)
    - Display equation: "$y = b$" with actual value
    - Display: "All points have y-coordinate = [b]"
    - Display: "Slope = 0 (zero slope)"
    - Display: "Y-intercept: (0, [b])"
    - Display: "X-intercept: [None / All points if b=0]"
    - Button: "Plot sample points" (shows several points on the line)

    **Vertical Line Controls:**
    - Checkbox: "Show vertical line"
    - Slider: "Value of a" (from -10 to 10)
    - Display equation: "$x = a$" with actual value
    - Display: "All points have x-coordinate = [a]"
    - Display: "Slope = undefined"
    - Display: "X-intercept: ([a], 0)"
    - Display: "Y-intercept: [None / All points if a=0]"
    - Button: "Plot sample points" (shows several points on the line)

    **Comparison Section:**
    - Display: "Is y = [b] a function? YES ✓"
    - Display: "Is x = [a] a function? NO ✗ (fails vertical line test)"
    - Button: "Show vertical line test" (demonstrates test on both lines)
    - When clicked, animates vertical line sweeping across graph:
      - For $y = b$: intersects at most once → IS a function
      - For $x = a$: intersects infinitely many times → NOT a function

    **Practice Mode:**
    - Button: "Quiz: Identify the line"
    - Shows random equation like "$y = 3$" or "$x = -5$"
    - Student clicks where line should be on graph
    - Feedback: "Correct!" or "Not quite. Remember: y = b is horizontal"
    - Score tracking

    **Preset Examples:**
    - Button: "X-axis" (sets $y = 0$)
    - Button: "Y-axis" (sets $x = 0$)
    - Button: "Both at origin" (shows $x = 0$ and $y = 0$ intersection)
    - Button: "Random horizontal"
    - Button: "Random vertical"
    - Button: "Random pair"

    Default parameters:
    - Horizontal line: $y = 3$ (shown)
    - Vertical line: $x = -2$ (shown)
    - Both checkboxes checked
    - Sample points not shown initially

    Behavior:

    **When slider moves:**
    - Line updates position in real-time
    - Equation display updates
    - Intercept information updates
    - Sample points (if shown) update to new line

    **When "Plot sample points" clicked:**
    - For horizontal line $y = b$:
      - Plot 5 points: $(−5,b)$, $(−2,b)$, $(0,b)$, $(3,b)$, $(7,b)$
      - Label each point
      - Highlight that all have same y-coordinate
    - For vertical line $x = a$:
      - Plot 5 points: $(a,−5)$, $(a,−2)$, $(a,0)$, $(a,3)$, $(a,7)$
      - Label each point
      - Highlight that all have same x-coordinate

    **When "Show vertical line test" clicked:**
    - Animate a dashed vertical test line sweeping from left to right
    - When it reaches the horizontal line $y = b$:
      - Pause
      - Highlight single intersection point
      - Display: "1 intersection ✓ Function!"
    - When it reaches the vertical line $x = a$:
      - Pause
      - Highlight multiple intersection points (or line overlap)
      - Display: "Infinite intersections ✗ Not a function!"

    **Quiz mode:**
    - Display equation: "Graph this equation: $y = −4$"
    - Student clicks where they think the line is
    - Check if click is close to correct line position
    - Provide feedback and explanation
    - Track consecutive correct answers

    **Special visual effects:**
    - Horizontal line: Add left-right arrows (← →) at ends
    - Vertical line: Add up-down arrows (↑ ↓) at ends
    - When hovering over line, show tooltip with all properties
    - Use color coding:
      - Red for horizontal (like red sunset on horizon)
      - Blue for vertical (like blue sky goes up vertically)
    - Highlight intercepts with pulsing dots

    Information displays:
    - "Key difference:" box explaining:
      - "Horizontal lines have equation $y = b$ (y is constant)"
      - "Vertical lines have equation $x = a$ (x is constant)"
    - "Slope comparison:" box showing:
      - "Horizontal: slope = 0 (no rise)"
      - "Vertical: slope = undefined (no run / division by zero)"

    Implementation notes:
    - Use p5.js for rendering
    - Draw lines using line() function with extended endpoints
    - Implement smooth slider-based line movement
    - Use alpha blending for shaded line regions
    - Animate vertical line test sweep using frameCount
    - Detect clicks within tolerance zone of correct line position
    - Store both lines' parameters independently
    - Add visual emphasis when special cases occur (a=0 or b=0)

</details>

## Graphing Linear Equations

Now that you understand slope, intercepts, and the forms of linear equations, let's put it all together and learn efficient methods for graphing lines.

### Method 1: Using Intercepts

This method works best when intercepts are easy to find (integer values).

**Steps:**
1. Find the x-intercept (set $y = 0$)
2. Find the y-intercept (set $x = 0$)
3. Plot both intercepts
4. Draw a line through them
5. Plot a third point as a check

**Example:** Graph $2x + 3y = 12$

X-intercept: Set $y = 0$

$2x + 3(0) = 12 \Rightarrow x = 6$

Point: $(6, 0)$

Y-intercept: Set $x = 0$

$2(0) + 3y = 12 \Rightarrow y = 4$

Point: $(0, 4)$

Plot $(6, 0)$ and $(0, 4)$, then draw the line.

### Method 2: Using Slope-Intercept Form

This method works best when the equation is in (or easily converted to) slope-intercept form.

**Steps:**
1. Convert equation to $y = mx + b$ if necessary
2. Plot the y-intercept $(0, b)$
3. Use the slope $m = \frac{\text{rise}}{\text{run}}$ to find a second point
4. Draw a line through the points

**Example:** Graph $y = -\frac{2}{3}x + 4$

- Y-intercept: $(0, 4)$ — plot this first
- Slope: $m = -\frac{2}{3} = \frac{-2}{3}$ — from $(0, 4)$, go down 2 and right 3
- Second point: $(3, 2)$
- Draw the line

**Tip:** If slope is negative, you can think of it as $\frac{\text{negative rise}}{\text{positive run}}$ or $\frac{\text{positive rise}}{\text{negative run}}$. Choose whichever is easier to visualize.

### Method 3: Using a Table of Values

This method works for any linear equation and is especially useful when other methods are cumbersome.

**Steps:**
1. Choose several $x$-values (usually including 0)
2. Calculate corresponding $y$-values using the equation
3. Create a table of ordered pairs
4. Plot all points
5. Draw a line through them

**Example:** Graph $y = 2x - 3$

| $x$ | $y = 2x - 3$ | Point $(x, y)$ |
|-----|--------------|----------------|
| -1  | $2(-1) - 3 = -5$ | $(-1, -5)$ |
| 0   | $2(0) - 3 = -3$ | $(0, -3)$ |
| 1   | $2(1) - 3 = -1$ | $(1, -1)$ |
| 2   | $2(2) - 3 = 1$ | $(2, 1)$ |

Plot these four points and draw the line through them.

#### Diagram: Interactive Line Graphing Practice

<details markdown="1">
    <summary>Interactive Line Graphing Practice</summary>
    Type: microsim

    Learning objective: Practice graphing linear equations using all three methods (intercepts, slope-intercept, table of values)

    Canvas layout (1000x750px):
    - Left side (600x750): Large coordinate grid
    - Right side (400x750): Method selection and work area

    Visual elements in graph area:
    - Coordinate plane from -10 to 10 on both axes
    - Grid lines for precision
    - Points plotted by student (draggable)
    - Solution line (can be shown/hidden)
    - Student's attempted line (drawn by connecting their points)
    - Feedback overlay showing accuracy

    Control panel (right side):

    **Problem Display:**
    - "Graph this equation:"
    - Equation shown in large font (e.g., "$2x + 3y = 12$" or "$y = -3x + 5$")
    - Dropdown: "Choose graphing method"
      Options:
      1. Intercepts method
      2. Slope-intercept method
      3. Table of values
      4. My choice (student decides)

    **Method-Specific Work Areas:**

    **If "Intercepts method" selected:**
    - Work area:
      - "Find x-intercept (set y = 0):"
      - Calculation space
      - "x-intercept = (" [input] ", 0)"
      - "Find y-intercept (set x = 0):"
      - Calculation space
      - "y-intercept = (0," [input] ")"
    - Button: "Show intercepts on graph"
    - Instructions: "Plot both intercepts, then draw line"

    **If "Slope-intercept method" selected:**
    - Work area:
      - "Convert to y = mx + b form:"
      - Calculation space
      - "Slope m = " [input]
      - "Y-intercept b = " [input]
      - "Starting point: (0, b)"
      - "Rise = " [input] ", Run = " [input]
    - Button: "Show y-intercept and slope triangle"
    - Instructions: "Plot y-intercept, use slope to find second point"

    **If "Table of values" selected:**
    - Work area:
      - Table with columns: x | y | Plot?
      - Pre-filled x-values: -2, -1, 0, 1, 2 (editable)
      - Input fields for y-values
      - Checkboxes to select which points to plot
    - Button: "Calculate all y-values"
    - Button: "Plot checked points"

    **Graphing Tools:**
    - "Add point" mode: Click on graph to add point
    - "Move point" mode: Drag existing points
    - "Draw line" button: Connects plotted points with line
    - "Erase" button: Clear student work
    - "Show solution" toggle: Display correct line
    - "Check my work" button: Verify accuracy

    **Feedback Section:**
    - Accuracy meter: "Your line matches: [%]"
    - Specific feedback:
      - "✓ Your y-intercept is correct!"
      - "✗ Your slope is too steep. Try making the run larger."
      - "Almost! Your line is slightly off. Check your calculations."
    - Score: "Problems correct: X/Y"

    **Additional Controls:**
    - Button: "New problem" (random equation)
    - Dropdown: "Difficulty"
      Options:
      1. Easy (integer slope and intercepts)
      2. Medium (fractional slopes)
      3. Hard (requires form conversion)
    - Dropdown: "Equation form"
      Options:
      1. Slope-intercept
      2. Standard form
      3. Point-slope form
      4. Mixed (random)
    - Checkbox: "Show grid numbers"
    - Checkbox: "Snap to grid" (points snap to integer coordinates)
    - Button: "Hint" (provides guided help based on selected method)

    Default parameters:
    - Equation: $y = 2x - 3$
    - Method: Slope-intercept
    - Difficulty: Easy
    - Snap to grid: On

    Behavior:

    **When problem is presented:**
    - Display equation prominently
    - Clear graph of previous work
    - Activate selected method's work area
    - Hide solution line initially

    **When student uses intercepts method:**
    - They enter calculated intercepts in input fields
    - "Show intercepts" button plots those points on graph
    - They click "Add point" and click graph to add points
    - They click "Draw line" to connect points
    - "Check my work" compares their line to solution

    **When student uses slope-intercept method:**
    - They convert equation and enter m and b values
    - System validates their conversion
    - "Show y-intercept and slope triangle" highlights starting point and slope visualization
    - They plot points using the slope guidance
    - They draw line and check accuracy

    **When student uses table method:**
    - They enter y-values for given x-values
    - "Calculate all" auto-fills correct values (can toggle to check work)
    - They select which points to plot
    - "Plot checked points" adds those to graph
    - They draw line through points

    **Accuracy checking:**
    - Compare student's line to solution using several sample points
    - Calculate percentage match based on:
      - Slope accuracy (±0.1 tolerance)
      - Intercept accuracy (±0.3 tolerance)
      - Overall fit (sample multiple points along line)
    - Provide specific feedback on what's wrong:
      - "Your slope is correct, but y-intercept is off by 2 units"
      - "Your line is parallel to the solution (same slope) but shifted"

    **Hint system:**
    - First hint: Reminds student of method steps
    - Second hint: Shows first calculation step
    - Third hint: Reveals one key value (intercept or slope)
    - Fourth hint: Shows complete solution

    **Progressive difficulty:**
    - Easy: $y = 2x + 3$, $y = -x + 5$ (integer slope in slope-intercept form)
    - Medium: $2x + 3y = 12$, $y = \frac{3}{4}x - 2$ (fractional slopes or standard form)
    - Hard: $5x - 3y = 15$, $y - 4 = -\frac{2}{3}(x + 1)$ (requires conversion, fractional slopes)

    Implementation notes:
    - Use p5.js for coordinate plane and interactive elements
    - Implement click and drag for point placement
    - Calculate line equation from two student points
    - Compare lines by checking slope and y-intercept
    - Use MathJax or KaTeX for equation rendering
    - Store solution as slope and y-intercept internally
    - Provide visual feedback with color coding (green = correct, yellow = close, red = incorrect)
    - Animate "solution reveal" by gradually fading in correct line
    - Track time spent and number of hints used for each problem

</details>

## Writing Equations of Lines

Now that you can graph lines, let's work in reverse: given information about a line, how do you write its equation?

### Given Slope and Y-Intercept

This is the easiest case—just plug the values directly into slope-intercept form.

**Example:** Write an equation for a line with slope $m = 4$ and y-intercept $b = -3$.

$y = mx + b$

$y = 4x + (-3)$

$y = 4x - 3$

### Given Slope and a Point

Use point-slope form, then convert to slope-intercept form if needed.

**Example:** Write an equation for a line with slope $m = -2$ passing through $(5, 3)$.

Using point-slope form with $(x_1, y_1) = (5, 3)$:

$y - y_1 = m(x - x_1)$

$y - 3 = -2(x - 5)$

This is a valid equation. To convert to slope-intercept form:

$y - 3 = -2x + 10$

$y = -2x + 13$

### Given Two Points

First calculate the slope using the two points, then use point-slope form with either point.

**Example:** Write an equation for the line through $(1, 4)$ and $(3, 10)$.

**Step 1:** Calculate slope

$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{10 - 4}{3 - 1} = \frac{6}{2} = 3$

**Step 2:** Use point-slope form with either point (let's use $(1, 4)$)

$y - 4 = 3(x - 1)$

**Step 3:** Convert to slope-intercept form

$y - 4 = 3x - 3$

$y = 3x + 1$

**Verify:** Check that both points satisfy the equation:

- $(1, 4)$: $4 = 3(1) + 1 = 4$ ✓
- $(3, 10)$: $10 = 3(3) + 1 = 10$ ✓

### Given a Graph

If you're given a graph of a line:

1. **Identify the y-intercept** $(0, b)$ by seeing where the line crosses the y-axis
2. **Calculate the slope** by choosing two clear points and using the slope formula, or by counting rise over run
3. **Write the equation** in slope-intercept form: $y = mx + b$

#### Diagram: Write Equation of a Line Practice Scenarios

<details markdown="1">
    <summary>Write Equation of a Line Practice Scenarios</summary>
    Type: microsim

    Learning objective: Practice writing equations of lines given various types of information

    Canvas layout (900x700px):
    - Top section (900x100): Problem statement and scenario type
    - Middle-left (450x450): Visual representation (graph or information display)
    - Middle-right (450x450): Work area and solution steps
    - Bottom (900x150): Input area and feedback

    Scenario types (randomly selected or user-chosen):

    **Scenario 1: Given slope and y-intercept**
    Visual area:
    - Display: "Slope: m = [value]"
    - Display: "Y-intercept: (0, [value])"
    - Small coordinate grid showing y-intercept marked

    Work area:
    - "Use slope-intercept form: $y = mx + b$"
    - "Substitute: $y =$ [show work]"

    **Scenario 2: Given slope and a point**
    Visual area:
    - Display: "Slope: m = [value]"
    - Display: "Point on line: ([x₁], [y₁])"
    - Coordinate grid showing the point marked

    Work area:
    - "Use point-slope form: $y - y_1 = m(x - x_1)$"
    - "Substitute: [show work]"
    - "Convert to slope-intercept form: [show work]"

    **Scenario 3: Given two points**
    Visual area:
    - Display: "Point A: ([x₁], [y₁])"
    - Display: "Point B: ([x₂], [y₂])"
    - Coordinate grid showing both points marked and connected by line

    Work area:
    - "Step 1: Find slope using $m = \frac{y_2 - y_1}{x_2 - x_1}$"
    - Calculation: [show work]
    - "Slope: m = [value]"
    - "Step 2: Use point-slope form with Point A:"
    - Calculation: [show work]
    - "Step 3: Convert to slope-intercept form:"
    - Final equation: [show work]

    **Scenario 4: Given a graph**
    Visual area:
    - Full coordinate grid with line drawn
    - Grid clearly marked
    - Line passes through easily identifiable points

    Work area:
    - "Step 1: Identify y-intercept from graph"
    - "Y-intercept: (0, [input box])"
    - "Step 2: Choose two clear points and calculate slope"
    - "Point 1: (" [input] "," [input] ")"
    - "Point 2: (" [input] "," [input] ")"
    - "Slope calculation: m = " [work shown]
    - "Slope: m = [input box]"
    - "Step 3: Write equation"

    **Scenario 5: Given slope and x-intercept**
    Visual area:
    - Display: "Slope: m = [value]"
    - Display: "X-intercept: ([value], 0)"
    - Coordinate grid showing x-intercept marked

    Work area:
    - "Use point-slope form with x-intercept point:"
    - Calculation: [show work]
    - "Convert to slope-intercept form:"
    - Final equation: [show work]

    Input and feedback area (bottom):
    - "Your equation (slope-intercept form):"
    - Large input box: "y = " [student input]
    - Button: "Check Answer"
    - Button: "Show Solution Steps"
    - Feedback display:
      - Green check and "Correct!" if right
      - Red X and "Not quite. Try again." if wrong
      - Specific hint: "Check your slope calculation" or "Your y-intercept is off"
    - Display: "Score: X/Y problems correct"
    - Display: "Average time: [time] per problem"

    Control buttons:
    - Dropdown: "Scenario type"
      Options:
      1. Slope and y-intercept
      2. Slope and a point
      3. Two points
      4. From a graph
      5. Slope and x-intercept
      6. Random mix
    - Dropdown: "Difficulty"
      Options:
      1. Easy (integer slopes and intercepts)
      2. Medium (fractional slopes, may need conversion)
      3. Hard (challenging calculations, negative fractions)
    - Button: "New Problem"
    - Button: "Hint" (provides progressive hints)
    - Checkbox: "Show step-by-step work area"
    - Checkbox: "Require simplified form"

    Default parameters:
    - Scenario: Two points
    - Difficulty: Medium
    - Show work area: Yes
    - Points: (2, 5) and (6, 13)

    Behavior:

    **When "New Problem" clicked:**
    - Generate random parameters based on selected scenario and difficulty
    - Update visual display
    - Clear student input
    - Reset work area
    - Hide solution

    **When student enters equation and clicks "Check Answer":**
    - Parse student input to extract slope and y-intercept
    - Compare to correct values
    - If correct:
      - Display green "Correct!"
      - Show optional encouragement
      - Auto-generate new problem after 2 seconds
      - Increment score
    - If incorrect:
      - Display red "Not quite"
      - Provide specific feedback on what's wrong:
        - "Your slope is correct, but check the y-intercept"
        - "You have the right y-intercept, but recalculate the slope"
        - "Both slope and y-intercept need adjustment"
      - Allow student to try again or show solution

    **When "Show Solution Steps" clicked:**
    - Reveal complete step-by-step solution in work area
    - Highlight each algebraic step
    - Show intermediate forms (point-slope before slope-intercept)
    - Display final answer in color

    **Hint system:**
    - Hint 1: "Start by [finding the slope / using point-slope form / etc.]"
    - Hint 2: Shows first calculation step
    - Hint 3: Reveals slope value
    - Hint 4: Shows full solution

    **Answer validation:**
    - Accept equivalent forms:
      - $y = 2x + 3$ same as $y = 2.0x + 3.0$
      - $y = \frac{1}{2}x + 4$ same as $y = 0.5x + 4$
    - Provide partial credit messages:
      - "Your equation is equivalent but not in simplest form"
      - "Correct! You could also write this as [alternative form]"

    **Difficulty adjustments:**
    - Easy:
      - Integer slopes between -5 and 5
      - Integer y-intercepts
      - Points with integer coordinates
    - Medium:
      - Fractional slopes (halves, thirds, quarters)
      - Fractional or decimal y-intercepts
      - Mixed integer and fractional values
    - Hard:
      - Complex fractional slopes (like $\frac{5}{7}$)
      - Negative fractions
      - Points requiring more calculation
      - Scenarios requiring multiple conversions

    **Graph generation (Scenario 4):**
    - Draw line passing through at least 3 clearly marked grid points
    - Ensure y-intercept is visible
    - Scale graph to show relevant portion of line
    - Optional: Add slight variation so line doesn't always pass through origin

    Special features:
    - Timer: Track how long student takes per problem
    - Streak counter: "5 in a row correct!"
    - Practice history: Track which scenario types student struggles with
    - Adaptive difficulty: Suggest easier/harder problems based on performance

    Implementation notes:
    - Use p5.js for visual displays and graphs
    - Implement equation parser to handle various input formats
    - Use MathJax or KaTeX for rendering equations
    - Store correct answer as slope and y-intercept internally
    - Compare student answer with tolerance for rounding (±0.01)
    - Generate random values within reasonable ranges for each difficulty
    - Ensure generated problems have integer solutions at Easy level
    - For graph scenarios, plot line from calculated equation
    - Validate that student input is a valid linear equation

</details>

## Applications of Linear Functions

Linear functions model countless real-world situations where there's a constant rate of change. Understanding how to write and interpret linear models is a powerful skill.

### Real-World Rate of Change Scenarios

**Example 1: Cell phone plan**

A cell phone plan costs \$30 per month plus \$0.10 per text message.

Let $C$ = total monthly cost and $t$ = number of texts

$C(t) = 0.10t + 30$

- Slope: $m = 0.10$ (each text costs \$0.10)
- Y-intercept: $b = 30$ (fixed monthly fee)

**Example 2: Temperature conversion**

The formula to convert Celsius to Fahrenheit:

$F(C) = \frac{9}{5}C + 32$

- Slope: $m = \frac{9}{5} = 1.8$ (Fahrenheit changes 1.8 degrees for each 1 degree Celsius)
- Y-intercept: $b = 32$ (when $C = 0°$, $F = 32°$ — freezing point of water)

**Example 3: Rental car pricing**

A car rental costs \$45 per day plus a one-time \$20 processing fee.

Let $C$ = total cost and $d$ = number of days

$C(d) = 45d + 20$

- Slope: $m = 45$ (daily rate)
- Y-intercept: $b = 20$ (initial fee)

To find the cost for 5 days: $C(5) = 45(5) + 20 = 225 + 20 = 245$ dollars

**Example 4: Savings account**

You have \$500 in savings and deposit \$75 each week.

Let $S$ = savings balance and $w$ = number of weeks

$S(w) = 75w + 500$

- Slope: $m = 75$ (weekly deposit rate)
- Y-intercept: $b = 500$ (initial amount)

To find when you'll have \$1,250: Solve $1250 = 75w + 500$

$750 = 75w$

$w = 10$ weeks

## Summary

In this chapter, you've developed comprehensive skills for working with the coordinate plane and linear functions. Let's review the key concepts:

**The Coordinate Plane:**

- The **coordinate plane** consists of two perpendicular axes that divide the plane into four quadrants
- Points are located using **ordered pairs** $(x, y)$ where $x$ is the horizontal coordinate and $y$ is the vertical
- The **origin** $(0, 0)$ is where the axes intersect

**Graphing and Intercepts:**

- The **graph of a line** is the visual representation of all solutions to a linear equation
- **X-intercepts** occur where $y = 0$ (crossing the x-axis)
- **Y-intercepts** occur where $x = 0$ (crossing the y-axis)

**Slope:**

- **Slope** measures the steepness and direction of a line: $m = \frac{\text{rise}}{\text{run}} = \frac{y_2 - y_1}{x_2 - x_1}$
- **Positive slope** rises from left to right; **negative slope** falls from left to right
- **Zero slope** is horizontal; **undefined slope** is vertical
- Slope represents **rate of change** in real-world contexts

**Forms of Linear Equations:**

- **Slope-intercept form:** $y = mx + b$ (most common, easy to graph)
- **Point-slope form:** $y - y_1 = m(x - x_1)$ (useful when given point and slope)
- **Standard form:** $Ax + By = C$ (useful for systems and finding intercepts)

**Special Lines:**

- **Horizontal lines:** $y = b$ (zero slope, IS a function)
- **Vertical lines:** $x = a$ (undefined slope, NOT a function)

**Writing Equations:**

- Given slope and y-intercept → use slope-intercept form directly
- Given slope and a point → use point-slope form
- Given two points → find slope first, then use point-slope form
- Given a graph → identify y-intercept and calculate slope

Linear functions are everywhere in the real world, from pricing models to scientific formulas to financial planning. Mastering these concepts gives you powerful tools for modeling and solving real-world problems.

In the next chapter, we'll extend these ideas to work with **systems** of linear equations—situations involving two or more linear relationships simultaneously.

## References

1. [Straight-Line Equations: Slope-Intercept Form](https://www.purplemath.com/modules/strtlneq.htm) - Purplemath - Comprehensive tutorial on the slope-intercept form y = mx + b, explaining how to read slope and intercept directly from the equation and demonstrating graphing techniques with worked examples.
