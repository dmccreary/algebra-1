# Quadratic Functions and Equations

## Summary

This chapter introduces quadratic functions and provides multiple strategies for solving quadratic equations. Students will learn to graph parabolas, identify key features including vertex, axis of symmetry, and maximum or minimum values, and work with different forms of quadratic functions. The chapter teaches four methods for solving quadratic equations: graphing, factoring, using square roots, completing the square, and the quadratic formula. Students will also learn about the discriminant to determine the nature of roots and encounter complex numbers and the imaginary unit when solving equations with no real solutions.

## Concepts Covered

This chapter covers the following 19 concepts from the learning graph:

1. Parabola
2. Vertex
3. Axis of Symmetry
4. Maximum Value
5. Minimum Value
6. Standard Form of Quadratic
7. Vertex Form
8. Graphing Quadratics
9. Quadratic Equation
10. Solving Quadratics by Graphing
11. Solving by Square Roots
12. Completing the Square
13. Quadratic Formula
14. Discriminant
15. Nature of Roots
16. Complex Numbers
17. Imaginary Unit
18. Applications of Quadratics
19. Projectile Motion

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Algebra](../01-foundations-of-algebra/index.md)
- [Chapter 3: Exponents and Powers](../03-exponents-and-powers/index.md)
- [Chapter 4: Polynomial Expressions](../04-polynomial-expressions/index.md)
- [Chapter 5: Factoring Polynomials](../05-factoring-polynomials/index.md)
- [Chapter 6: Solving Linear Equations](../06-solving-linear-equations/index.md)
- [Chapter 8: Introduction to Functions](../08-introduction-to-functions/index.md)
- [Chapter 9: Graphing and Linear Functions](../09-graphing-and-linear-functions/index.md)

---

## Introduction to Quadratic Functions

In previous chapters, you worked extensively with linear functions, which produce straight-line graphs. Now we'll explore **quadratic functions**, which produce U-shaped curves called **parabolas**.

A **quadratic function** has the form:

$$f(x) = ax^2 + bx + c$$

where $a$, $b$, and $c$ are constants and $a \neq 0$.

The key characteristic is that the highest power of the variable is 2, making this a second-degree polynomial function.

**Examples of quadratic functions:**
- $f(x) = x^2$
- $f(x) = 2x^2 - 3x + 1$
- $f(x) = -x^2 + 4x$
- $f(x) = 3x^2 + 5$

Quadratic functions model many real-world phenomena, including projectile motion, area problems, and profit optimization.

## Parabolas and Their Key Features

The graph of any quadratic function is a **parabola**—a symmetric U-shaped curve. Parabolas have several important features.

### Vertex

The **vertex** is the highest or lowest point on the parabola. It represents either the maximum or minimum value of the function.

- If $a > 0$, the parabola opens upward and the vertex is the **minimum value**
- If $a < 0$, the parabola opens downward and the vertex is the **maximum value**

**Example:** For $f(x) = x^2 - 4x + 3$, the vertex is at $(2, -1)$, which is the minimum point.

### Axis of Symmetry

The **axis of symmetry** is a vertical line that passes through the vertex and divides the parabola into two mirror-image halves.

The equation of the axis of symmetry is $x = h$, where $(h, k)$ is the vertex.

**Example:** For a parabola with vertex at $(2, -1)$, the axis of symmetry is the line $x = 2$.

### Maximum and Minimum Values

- A **minimum value** occurs at the vertex when the parabola opens upward ($a > 0$)
- A **maximum value** occurs at the vertex when the parabola opens downward ($a < 0$)

**Example:** The function $f(x) = -2x^2 + 8x - 3$ has a maximum value because $a = -2 < 0$.

### Direction of Opening

The sign of $a$ determines which way the parabola opens:
- $a > 0$: Opens upward (like a U)
- $a < 0$: Opens downward (like an upside-down U)

The magnitude of $|a|$ affects how "wide" or "narrow" the parabola is:
- $|a| > 1$: Narrower parabola
- $|a| < 1$: Wider parabola

## Forms of Quadratic Functions

Quadratic functions can be written in different forms, each revealing different information about the parabola.

### Standard Form

**Standard form:** $f(x) = ax^2 + bx + c$

where:
- $a$ determines opening direction and width
- $c$ is the y-intercept (where the parabola crosses the y-axis)
- The vertex can be found using formulas

**Y-intercept:** $(0, c)$

**Vertex:** $\left(-\frac{b}{2a}, f\left(-\frac{b}{2a}\right)\right)$

**Axis of symmetry:** $x = -\frac{b}{2a}$

**Example:** $f(x) = 2x^2 - 8x + 3$

- $a = 2$ (opens upward)
- Y-intercept: $(0, 3)$
- Axis of symmetry: $x = -\frac{-8}{2(2)} = \frac{8}{4} = 2$
- Vertex x-coordinate: $x = 2$
- Vertex y-coordinate: $f(2) = 2(2)^2 - 8(2) + 3 = 8 - 16 + 3 = -5$
- Vertex: $(2, -5)$

### Vertex Form

**Vertex form:** $f(x) = a(x - h)^2 + k$

where:
- $(h, k)$ is the vertex
- $a$ determines opening direction and width

This form makes the vertex immediately visible, which is very useful for graphing.

**Example:** $f(x) = 3(x - 2)^2 + 5$

- Vertex: $(2, 5)$
- Opens upward since $a = 3 > 0$
- Minimum value: 5

**Converting from standard to vertex form** requires completing the square (covered later in this chapter).

### Converting Between Forms

**Standard to vertex:** Use completing the square

**Vertex to standard:** Expand using algebra

**Example:** Convert $f(x) = 2(x - 3)^2 + 1$ to standard form

$f(x) = 2(x - 3)^2 + 1$

$= 2(x^2 - 6x + 9) + 1$

$= 2x^2 - 12x + 18 + 1$

$= 2x^2 - 12x + 19$

## Graphing Quadratic Functions

To **graph a quadratic function**, follow these steps:

1. Determine if the parabola opens up or down (check the sign of $a$)
2. Find the vertex
3. Find the axis of symmetry
4. Find the y-intercept (set $x = 0$)
5. Find additional points (use symmetry)
6. Sketch the parabola

**Example:** Graph $f(x) = x^2 - 4x + 3$

**Step 1:** $a = 1 > 0$, so opens upward

**Step 2:** Find vertex
- $x = -\frac{b}{2a} = -\frac{-4}{2(1)} = 2$
- $f(2) = (2)^2 - 4(2) + 3 = 4 - 8 + 3 = -1$
- Vertex: $(2, -1)$

**Step 3:** Axis of symmetry: $x = 2$

**Step 4:** Y-intercept: $f(0) = 3$, so $(0, 3)$

**Step 5:** Find symmetric point to $(0, 3)$
- $(0, 3)$ is 2 units left of axis $x = 2$
- Symmetric point is 2 units right: $(4, 3)$

Find another point: $f(1) = 1 - 4 + 3 = 0$, so $(1, 0)$
- Symmetric point: $(3, 0)$

**Step 6:** Plot all points and sketch the parabola

The x-intercepts (where $y = 0$) are $(1, 0)$ and $(3, 0)$.

## Quadratic Equations

A **quadratic equation** is an equation that can be written in the form:

$$ax^2 + bx + c = 0$$

where $a \neq 0$.

Solving a quadratic equation means finding all values of $x$ that make the equation true. These values are called the **solutions**, **roots**, or **zeros** of the equation.

Graphically, the solutions are the x-intercepts of the parabola.

A quadratic equation can have:
- **Two distinct real solutions** (parabola crosses x-axis twice)
- **One real solution** (parabola touches x-axis once—vertex on x-axis)
- **No real solutions** (parabola doesn't cross x-axis)

## Solving Quadratic Equations by Graphing

The **graphing method** involves graphing the related quadratic function and identifying where it crosses the x-axis.

**Steps:**
1. Write the equation in standard form: $ax^2 + bx + c = 0$
2. Graph the function $f(x) = ax^2 + bx + c$
3. Find the x-intercepts (where $y = 0$)
4. The x-coordinates of the intercepts are the solutions

**Example:** Solve $x^2 - 5x + 6 = 0$ by graphing

Graph $f(x) = x^2 - 5x + 6$

Find vertex: $x = -\frac{-5}{2(1)} = 2.5$, $f(2.5) = -0.25$

Y-intercept: $(0, 6)$

The parabola crosses the x-axis at $(2, 0)$ and $(3, 0)$.

**Solutions:** $x = 2$ and $x = 3$

**Check:**
- $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$ ✓
- $3^2 - 5(3) + 6 = 9 - 15 + 6 = 0$ ✓

## Solving by Factoring

If a quadratic can be factored, this is often the quickest algebraic method.

**Steps:**
1. Write in standard form: $ax^2 + bx + c = 0$
2. Factor the left side
3. Use the zero product property: set each factor equal to zero
4. Solve each resulting equation

**Example 1:** Solve $x^2 + 7x + 12 = 0$

Factor: $(x + 3)(x + 4) = 0$

Set each factor to zero:
- $x + 3 = 0 \Rightarrow x = -3$
- $x + 4 = 0 \Rightarrow x = -4$

**Solutions:** $x = -3$ and $x = -4$

**Example 2:** Solve $3x^2 - 5x - 2 = 0$

Factor: $(3x + 1)(x - 2) = 0$

Solutions:
- $3x + 1 = 0 \Rightarrow x = -\frac{1}{3}$
- $x - 2 = 0 \Rightarrow x = 2$

**Solutions:** $x = -\frac{1}{3}$ and $x = 2$

**Example 3:** Solve $2x^2 = 8x$

First, move all terms to one side:

$2x^2 - 8x = 0$

Factor out GCF:

$2x(x - 4) = 0$

Solutions:
- $2x = 0 \Rightarrow x = 0$
- $x - 4 = 0 \Rightarrow x = 4$

**Solutions:** $x = 0$ and $x = 4$

## Solving by Using Square Roots

When a quadratic equation has the form $x^2 = k$ or $(x - h)^2 = k$, we can solve by taking square roots.

**Square Root Property:** If $x^2 = k$, then $x = \pm\sqrt{k}$

**Example 1:** Solve $x^2 = 49$

$x = \pm\sqrt{49} = \pm 7$

**Solutions:** $x = 7$ and $x = -7$

**Example 2:** Solve $x^2 - 25 = 0$

$x^2 = 25$

$x = \pm\sqrt{25} = \pm 5$

**Solutions:** $x = 5$ and $x = -5$

**Example 3:** Solve $(x - 3)^2 = 16$

$x - 3 = \pm\sqrt{16} = \pm 4$

Two cases:
- $x - 3 = 4 \Rightarrow x = 7$
- $x - 3 = -4 \Rightarrow x = -1$

**Solutions:** $x = 7$ and $x = -1$

**Example 4:** Solve $3(x + 2)^2 = 27$

Divide by 3: $(x + 2)^2 = 9$

$x + 2 = \pm 3$

- $x + 2 = 3 \Rightarrow x = 1$
- $x + 2 = -3 \Rightarrow x = -5$

**Solutions:** $x = 1$ and $x = -5$

## Completing the Square

**Completing the square** is a method that transforms any quadratic equation into the form $(x - h)^2 = k$, which can then be solved using square roots.

### The Process

To complete the square for $x^2 + bx$:

1. Take half of the coefficient of $x$: $\frac{b}{2}$
2. Square it: $\left(\frac{b}{2}\right)^2$
3. Add this value to create a perfect square trinomial

**Example:** Complete the square for $x^2 + 6x$

Half of 6: $\frac{6}{2} = 3$

Square it: $3^2 = 9$

$x^2 + 6x + 9 = (x + 3)^2$

### Solving by Completing the Square

**Steps:**
1. Move the constant to the right side
2. If $a \neq 1$, divide all terms by $a$
3. Complete the square on the left side
4. Add the same value to the right side
5. Factor the left side as a perfect square
6. Solve using square roots

**Example 1:** Solve $x^2 + 8x + 5 = 0$

**Step 1:** $x^2 + 8x = -5$

**Step 2:** Already have $a = 1$

**Step 3-4:** Complete the square
- Half of 8: 4
- Square: 16
- Add 16 to both sides

$x^2 + 8x + 16 = -5 + 16$

**Step 5:** Factor

$(x + 4)^2 = 11$

**Step 6:** Square root

$x + 4 = \pm\sqrt{11}$

$x = -4 \pm \sqrt{11}$

**Solutions:** $x = -4 + \sqrt{11}$ and $x = -4 - \sqrt{11}$

**Example 2:** Solve $2x^2 - 12x + 10 = 0$

**Step 1:** $2x^2 - 12x = -10$

**Step 2:** Divide by 2

$x^2 - 6x = -5$

**Step 3-4:** Complete the square
- Half of -6: -3
- Square: 9

$x^2 - 6x + 9 = -5 + 9$

**Step 5:** $(x - 3)^2 = 4$

**Step 6:** $x - 3 = \pm 2$

- $x - 3 = 2 \Rightarrow x = 5$
- $x - 3 = -2 \Rightarrow x = 1$

**Solutions:** $x = 5$ and $x = 1$

## The Quadratic Formula

The **quadratic formula** is a universal method that works for any quadratic equation. It's derived by completing the square on the general form $ax^2 + bx + c = 0$.

### The Quadratic Formula

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

where $a$, $b$, and $c$ are the coefficients from $ax^2 + bx + c = 0$.

**Steps to use the quadratic formula:**
1. Write the equation in standard form
2. Identify $a$, $b$, and $c$
3. Substitute into the formula
4. Simplify

**Example 1:** Solve $x^2 - 5x + 3 = 0$

Identify: $a = 1$, $b = -5$, $c = 3$

Substitute:

$x = \frac{-(-5) \pm \sqrt{(-5)^2 - 4(1)(3)}}{2(1)}$

$= \frac{5 \pm \sqrt{25 - 12}}{2}$

$= \frac{5 \pm \sqrt{13}}{2}$

**Solutions:** $x = \frac{5 + \sqrt{13}}{2}$ and $x = \frac{5 - \sqrt{13}}{2}$

**Example 2:** Solve $2x^2 + 3x - 5 = 0$

$a = 2$, $b = 3$, $c = -5$

$x = \frac{-3 \pm \sqrt{9 - 4(2)(-5)}}{2(2)}$

$= \frac{-3 \pm \sqrt{9 + 40}}{4}$

$= \frac{-3 \pm \sqrt{49}}{4}$

$= \frac{-3 \pm 7}{4}$

Two solutions:
- $x = \frac{-3 + 7}{4} = \frac{4}{4} = 1$
- $x = \frac{-3 - 7}{4} = \frac{-10}{4} = -\frac{5}{2}$

**Solutions:** $x = 1$ and $x = -\frac{5}{2}$

## The Discriminant

The expression under the square root in the quadratic formula is called the **discriminant**:

$$\Delta = b^2 - 4ac$$

The discriminant determines the **nature of the roots** (solutions).

### Nature of Roots

| Discriminant | Nature of Roots | Graph |
|--------------|----------------|-------|
| $\Delta > 0$ | Two distinct real solutions | Parabola crosses x-axis twice |
| $\Delta = 0$ | One real solution (repeated root) | Parabola touches x-axis once |
| $\Delta < 0$ | No real solutions (two complex solutions) | Parabola doesn't cross x-axis |

**Example 1:** Determine the nature of roots for $x^2 - 6x + 9 = 0$

$a = 1$, $b = -6$, $c = 9$

$\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$

**Nature:** One real solution (the vertex is on the x-axis)

Indeed, factoring gives $(x - 3)^2 = 0$, so $x = 3$ (repeated root).

**Example 2:** Determine the nature of roots for $x^2 + 2x + 5 = 0$

$\Delta = (2)^2 - 4(1)(5) = 4 - 20 = -16 < 0$

**Nature:** No real solutions (the parabola doesn't cross the x-axis)

## Complex Numbers and the Imaginary Unit

When the discriminant is negative, the square root of a negative number appears in the quadratic formula. This leads to **complex numbers**.

### The Imaginary Unit

The **imaginary unit** is defined as:

$$i = \sqrt{-1}$$

Therefore: $i^2 = -1$

Using $i$, we can write square roots of negative numbers:
- $\sqrt{-4} = \sqrt{4 \cdot (-1)} = 2i$
- $\sqrt{-9} = 3i$
- $\sqrt{-16} = 4i$

### Complex Numbers

A **complex number** has the form:

$$a + bi$$

where:
- $a$ is the real part
- $b$ is the imaginary part
- $i$ is the imaginary unit

**Examples of complex numbers:**
- $3 + 2i$
- $-1 - 4i$
- $5i$ (when $a = 0$)
- $7$ (when $b = 0$, this is a real number)

### Solving Quadratics with Complex Solutions

**Example:** Solve $x^2 + 4x + 13 = 0$

Using the quadratic formula:

$a = 1$, $b = 4$, $c = 13$

$x = \frac{-4 \pm \sqrt{16 - 52}}{2}$

$= \frac{-4 \pm \sqrt{-36}}{2}$

$= \frac{-4 \pm 6i}{2}$

$= -2 \pm 3i$

**Solutions:** $x = -2 + 3i$ and $x = -2 - 3i$

These are complex conjugates—they always appear in pairs.

## Applications of Quadratic Equations

Quadratic equations model many real-world situations.

### Projectile Motion

One of the most common applications is **projectile motion**. When an object is thrown or launched, its height as a function of time follows a quadratic model:

$$h(t) = -16t^2 + v_0t + h_0$$

where:
- $h(t)$ is height in feet at time $t$ seconds
- $v_0$ is initial velocity in ft/s
- $h_0$ is initial height in feet
- $-16$ comes from gravity ($-9.8$ m/s² converts to about $-16$ ft/s²)

**Example:** A ball is thrown upward from a height of 5 feet with an initial velocity of 48 ft/s. When does it hit the ground?

$h(t) = -16t^2 + 48t + 5$

Set $h(t) = 0$ (ground level):

$-16t^2 + 48t + 5 = 0$

Using the quadratic formula:

$t = \frac{-48 \pm \sqrt{48^2 - 4(-16)(5)}}{2(-16)}$

$= \frac{-48 \pm \sqrt{2304 + 320}}{-32}$

$= \frac{-48 \pm \sqrt{2624}}{-32}$

$= \frac{-48 \pm 51.22}{-32}$

Two values:
- $t = \frac{-48 + 51.22}{-32} \approx -0.10$ (negative, not physical)
- $t = \frac{-48 - 51.22}{-32} \approx 3.10$ seconds

**Answer:** The ball hits the ground after approximately 3.1 seconds.

### Area Problems

**Example:** A rectangular garden has a length that is 3 meters longer than its width. If the area is 40 square meters, find the dimensions.

Let $w$ = width

Then $w + 3$ = length

Area: $w(w + 3) = 40$

$w^2 + 3w = 40$

$w^2 + 3w - 40 = 0$

Factor: $(w + 8)(w - 5) = 0$

$w = -8$ or $w = 5$

Since width must be positive, $w = 5$ meters.

Length = $5 + 3 = 8$ meters.

**Dimensions:** 5 meters by 8 meters

## Summary

In this chapter, you've learned about quadratic functions and equations:

**Quadratic Functions:**

- Graph as **parabolas** (U-shaped curves)
- Key features: **vertex**, **axis of symmetry**, **maximum/minimum values**
- **Standard form:** $f(x) = ax^2 + bx + c$
- **Vertex form:** $f(x) = a(x - h)^2 + k$

**Solving Quadratic Equations:**

1. **Graphing:** Find x-intercepts
2. **Factoring:** Use zero product property
3. **Square roots:** For $(x - h)^2 = k$
4. **Completing the square:** Transform to perfect square form
5. **Quadratic formula:** $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ (works for all quadratics)

**The Discriminant:**

- $\Delta = b^2 - 4ac$ determines the nature of roots
- $\Delta > 0$: Two real solutions
- $\Delta = 0$: One real solution
- $\Delta < 0$: Two complex solutions

**Complex Numbers:**

- Involve the **imaginary unit** $i = \sqrt{-1}$
- Form: $a + bi$
- Appear when quadratics have no real solutions

**Applications:**

- **Projectile motion:** Height vs. time
- Area and geometry problems
- Optimization problems

Quadratic functions and equations are fundamental in mathematics, physics, engineering, and many other fields where relationships involve squares or curved motion.
