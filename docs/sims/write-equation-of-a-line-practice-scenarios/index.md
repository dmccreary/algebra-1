---
title: Write Equation of a Line Practice Scenarios
description: Write Equation of a Line Practice Scenarios
status: scaffold
library: TBD
bloom_level: TBD
---

# Write Equation of a Line Practice Scenarios



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Graphing And Linear Functions](../../chapters/09-graphing-and-linear-functions/index.md).

```text
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
```

## Related Resources

- [Chapter 9: Graphing And Linear Functions](../../chapters/09-graphing-and-linear-functions/index.md)
