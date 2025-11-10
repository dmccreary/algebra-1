# Equation Rendering Test

This page tests the rendering of mathematical equations using MathJax in LaTeX format.

## Linear Equations

### Equation 1: Slope-Intercept Form
The slope-intercept form of a linear equation:

$$y = mx + b$$

where $m$ is the slope and $b$ is the y-intercept.

### Equation 2: Point-Slope Form
The point-slope form of a line passing through point $(x_1, y_1)$ with slope $m$:

$$y - y_1 = m(x - x_1)$$

## Quadratic Equations

### Equation 3: Standard Form of a Quadratic
The standard form of a quadratic equation:

$$ax^2 + bx + c = 0$$

where $a \neq 0$.

### Equation 4: Quadratic Formula
The quadratic formula for solving $ax^2 + bx + c = 0$:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Equation 5: Vertex Form
The vertex form of a quadratic function:

$$y = a(x - h)^2 + k$$

where $(h, k)$ is the vertex of the parabola.

## Exponents and Radicals

### Equation 6: Product Rule for Exponents
When multiplying powers with the same base:

$$a^m \cdot a^n = a^{m+n}$$

### Equation 7: Power Rule for Exponents
When raising a power to a power:

$$(a^m)^n = a^{mn}$$

### Equation 8: Radical Expression
Converting between radical and exponential form:

$$\sqrt[n]{a^m} = a^{\frac{m}{n}}$$

## Systems and Factoring

### Equation 9: Difference of Squares
Factoring the difference of two squares:

$$a^2 - b^2 = (a + b)(a - b)$$

### Equation 10: System of Linear Equations
A system of two linear equations in two variables:

$$\begin{cases}
ax + by = c \\
dx + ey = f
\end{cases}$$

## Inline Equations Test

You can also use inline equations like $x^2 + 5x + 6 = 0$ or the discriminant $\Delta = b^2 - 4ac$ within regular text.

The distance formula $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ is essential for coordinate geometry.

## Complex Expressions

### Completing the Square
To complete the square for $x^2 + bx$:

$$x^2 + bx + \left(\frac{b}{2}\right)^2 = \left(x + \frac{b}{2}\right)^2$$

### Compound Interest Formula
The compound interest formula:

$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$

where:
- $A$ = final amount
- $P$ = principal (initial amount)
- $r$ = annual interest rate (decimal)
- $n$ = number of times interest is compounded per year
- $t$ = time in years

## Rendering Verification

If MathJax is configured correctly, all equations above should render beautifully with proper mathematical notation. If you see raw LaTeX code (e.g., `$$y = mx + b$$`), then MathJax is not loading properly.

**Expected behavior:**
- Block equations centered and displayed on their own lines
- Inline equations properly integrated with text
- Fractions, square roots, and exponents properly formatted
- Greek letters and mathematical symbols rendered correctly
