# Systems of Equations and Inequalities

## Summary

This chapter teaches students how to work with multiple equations or inequalities simultaneously. Students will learn three methods for solving systems of linear equations: graphing, substitution, and elimination (linear combination). The chapter covers how to classify systems as consistent or inconsistent, and independent or dependent, understanding what these classifications mean graphically. Students will also learn to solve and graph systems of inequalities, identifying solution regions and boundary lines, and apply these techniques to real-world problems.

## Concepts Covered

This chapter covers the following 14 concepts from the learning graph:

1. System of Equations
2. Solution of a System
3. Consistent System
4. Inconsistent System
5. Independent System
6. Dependent System
7. Graphing Method
8. Substitution Method
9. Elimination Method
10. Linear Combination
11. System of Inequalities
12. Graphing Systems
13. Solution Region
14. Boundary Line

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Algebra](../01-foundations-of-algebra/index.md)
- [Chapter 6: Solving Linear Equations](../06-solving-linear-equations/index.md)
- [Chapter 7: Linear Inequalities and Absolute Value](../07-linear-inequalities-and-absolute-value/index.md)
- [Chapter 9: Graphing and Linear Functions](../09-graphing-and-linear-functions/index.md)

---

## Introduction to Systems of Equations

In previous chapters, you learned to solve single linear equations with one variable. But many real-world situations involve multiple relationships between variables that must be satisfied simultaneously. This is where **systems of equations** come in.

A **system of equations** is a set of two or more equations with the same variables. A **solution of a system** is an ordered pair (or ordered triple, etc.) that satisfies all equations in the system simultaneously.

**Example:** Consider the system:

$$\begin{cases}
y = 2x + 1 \\
y = -x + 7
\end{cases}$$

The point $(2, 5)$ is a solution because:
- In the first equation: $5 = 2(2) + 1 = 5$ ✓
- In the second equation: $5 = -(2) + 7 = 5$ ✓

Both equations are satisfied, so $(2, 5)$ is the solution to the system.

### Real-World Examples

Systems of equations model many practical situations:

**Example 1:** A movie theater charges \$12 for adults and \$8 for children. If 150 tickets were sold for a total of \$1,520, how many of each type were sold?

Let $a$ = adult tickets and $c$ = child tickets

$$\begin{cases}
a + c = 150 \\
12a + 8c = 1520
\end{cases}$$

**Example 2:** Two cars leave from the same point traveling in opposite directions. One travels at 60 mph and the other at 50 mph. When will they be 330 miles apart?

Let $t$ = time in hours

$$\begin{cases}
d_1 = 60t \\
d_2 = 50t \\
d_1 + d_2 = 330
\end{cases}$$

## Types of Systems

Systems of linear equations can be classified based on the number of solutions they have.

### Consistent vs. Inconsistent Systems

A **consistent system** has at least one solution. The lines intersect at one or more points.

An **inconsistent system** has no solution. The lines are parallel and never intersect.

**Example of consistent system:**

$$\begin{cases}
y = 2x + 1 \\
y = -x + 4
\end{cases}$$

These lines have different slopes (2 and -1), so they intersect at exactly one point.

**Example of inconsistent system:**

$$\begin{cases}
y = 3x + 2 \\
y = 3x - 5
\end{cases}$$

These lines have the same slope (3) but different y-intercepts, so they're parallel. No solution exists.

### Independent vs. Dependent Systems

An **independent system** has exactly one solution. The two lines intersect at exactly one point.

A **dependent system** has infinitely many solutions. The two equations represent the same line.

**Example of independent system:**

$$\begin{cases}
y = x + 1 \\
y = 2x - 3
\end{cases}$$

Different slopes mean one intersection point.

**Example of dependent system:**

$$\begin{cases}
y = 2x + 3 \\
2y = 4x + 6
\end{cases}$$

The second equation is just the first multiplied by 2, so they're the same line. Every point on the line is a solution.

### Summary Table

| System Type | Number of Solutions | Graphical Representation |
|-------------|-------------------|------------------------|
| Consistent & Independent | Exactly one | Two lines intersecting at one point |
| Consistent & Dependent | Infinitely many | Same line (coincident) |
| Inconsistent | No solution | Parallel lines |

## Method 1: Solving by Graphing

The **graphing method** involves graphing both equations on the same coordinate plane and finding their point of intersection.

**Steps:**
1. Write both equations in slope-intercept form ($y = mx + b$) if possible
2. Graph both lines on the same coordinate plane
3. Identify the point of intersection
4. Check the solution in both original equations

**Example 1:** Solve the system by graphing:

$$\begin{cases}
y = 2x - 1 \\
y = -x + 5
\end{cases}$$

**Graph the first line:** $y = 2x - 1$
- Y-intercept: $(0, -1)$
- Slope: 2 (rise 2, run 1)
- Plot and draw

**Graph the second line:** $y = -x + 5$
- Y-intercept: $(0, 5)$
- Slope: -1 (fall 1, run 1)
- Plot and draw

**Find intersection:** The lines intersect at $(2, 3)$

**Check:**
- First equation: $3 = 2(2) - 1 = 3$ ✓
- Second equation: $3 = -(2) + 5 = 3$ ✓

**Solution:** $(2, 3)$

**Example 2:** Solve by graphing:

$$\begin{cases}
x + y = 6 \\
2x - y = 3
\end{cases}$$

First, rewrite in slope-intercept form:

First equation: $y = -x + 6$

Second equation: $2x - y = 3 \Rightarrow -y = -2x + 3 \Rightarrow y = 2x - 3$

Graph both lines and find that they intersect at $(3, 3)$.

**Check:**
- $3 + 3 = 6$ ✓
- $2(3) - 3 = 3$ ✓

### Advantages and Limitations of Graphing

**Advantages:**
- Visual representation helps understand the system
- Good for systems with integer solutions
- Shows the type of system (consistent/inconsistent, independent/dependent)

**Limitations:**
- Difficult when solutions aren't integers
- Imprecise for solutions with fractions or decimals
- Time-consuming for exact answers

## Method 2: Solving by Substitution

The **substitution method** is an algebraic approach where you solve one equation for one variable and substitute that expression into the other equation.

**Steps:**
1. Solve one equation for one variable (choose the easiest)
2. Substitute that expression into the other equation
3. Solve the resulting equation for the remaining variable
4. Substitute back to find the other variable
5. Check the solution in both original equations

**Example 1:** Solve using substitution:

$$\begin{cases}
y = 3x - 5 \\
2x + y = 10
\end{cases}$$

**Step 1:** The first equation is already solved for $y$: $y = 3x - 5$

**Step 2:** Substitute into the second equation:

$2x + (3x - 5) = 10$

**Step 3:** Solve for $x$:

$2x + 3x - 5 = 10$

$5x - 5 = 10$

$5x = 15$

$x = 3$

**Step 4:** Substitute $x = 3$ back into $y = 3x - 5$:

$y = 3(3) - 5 = 9 - 5 = 4$

**Solution:** $(3, 4)$

**Check:**
- $4 = 3(3) - 5 = 4$ ✓
- $2(3) + 4 = 10$ ✓

**Example 2:** Solve using substitution:

$$\begin{cases}
3x + 2y = 16 \\
x - y = 2
\end{cases}$$

**Step 1:** Solve the second equation for $x$ (easier):

$x = y + 2$

**Step 2:** Substitute into the first equation:

$3(y + 2) + 2y = 16$

**Step 3:** Solve for $y$:

$3y + 6 + 2y = 16$

$5y + 6 = 16$

$5y = 10$

$y = 2$

**Step 4:** Find $x$:

$x = 2 + 2 = 4$

**Solution:** $(4, 2)$

**Check:**
- $3(4) + 2(2) = 12 + 4 = 16$ ✓
- $4 - 2 = 2$ ✓

**Example 3:** Solve using substitution:

$$\begin{cases}
2x - 3y = 11 \\
x + 4y = -6
\end{cases}$$

**Step 1:** Solve second equation for $x$:

$x = -6 - 4y$

**Step 2:** Substitute:

$2(-6 - 4y) - 3y = 11$

**Step 3:** Solve:

$-12 - 8y - 3y = 11$

$-12 - 11y = 11$

$-11y = 23$

$y = -\frac{23}{11}$

**Step 4:** Find $x$:

$x = -6 - 4\left(-\frac{23}{11}\right) = -6 + \frac{92}{11} = -\frac{66}{11} + \frac{92}{11} = \frac{26}{11}$

**Solution:** $\left(\frac{26}{11}, -\frac{23}{11}\right)$

## Method 3: Solving by Elimination (Linear Combination)

The **elimination method** (also called **linear combination**) involves adding or subtracting the equations to eliminate one variable.

**Steps:**
1. Arrange both equations in standard form: $Ax + By = C$
2. Multiply one or both equations by constants so that the coefficients of one variable are opposites
3. Add the equations to eliminate one variable
4. Solve for the remaining variable
5. Substitute back to find the other variable
6. Check the solution

**Example 1:** Solve using elimination:

$$\begin{cases}
3x + 2y = 12 \\
5x - 2y = 4
\end{cases}$$

Notice that the $y$-coefficients are already opposites (2 and -2).

**Add the equations:**

$$\begin{array}{rcrcr}
3x & + & 2y & = & 12 \\
5x & - & 2y & = & 4 \\
\hline
8x & & & = & 16
\end{array}$$

**Solve for $x$:**

$8x = 16$

$x = 2$

**Substitute into first equation:**

$3(2) + 2y = 12$

$6 + 2y = 12$

$2y = 6$

$y = 3$

**Solution:** $(2, 3)$

**Check:**
- $3(2) + 2(3) = 6 + 6 = 12$ ✓
- $5(2) - 2(3) = 10 - 6 = 4$ ✓

**Example 2:** Solve using elimination (requires multiplication):

$$\begin{cases}
2x + 3y = 7 \\
3x - y = 5
\end{cases}$$

To eliminate $y$, multiply the second equation by 3:

$$\begin{cases}
2x + 3y = 7 \\
9x - 3y = 15
\end{cases}$$

**Add the equations:**

$$\begin{array}{rcrcr}
2x & + & 3y & = & 7 \\
9x & - & 3y & = & 15 \\
\hline
11x & & & = & 22
\end{array}$$

$x = 2$

**Substitute into first equation:**

$2(2) + 3y = 7$

$4 + 3y = 7$

$3y = 3$

$y = 1$

**Solution:** $(2, 1)$

**Example 3:** Solve using elimination (multiply both equations):

$$\begin{cases}
3x + 4y = 10 \\
5x + 6y = 16
\end{cases}$$

To eliminate $x$, multiply first equation by 5 and second by -3:

$$\begin{cases}
15x + 20y = 50 \\
-15x - 18y = -48
\end{cases}$$

**Add:**

$$\begin{array}{rcrcr}
15x & + & 20y & = & 50 \\
-15x & - & 18y & = & -48 \\
\hline
& & 2y & = & 2
\end{array}$$

$y = 1$

**Substitute:**

$3x + 4(1) = 10$

$3x = 6$

$x = 2$

**Solution:** $(2, 1)$

### Choosing the Best Method

| Method | Best When |
|--------|-----------|
| **Graphing** | Quick visual understanding needed; solutions are integers |
| **Substitution** | One equation is already solved for a variable, or easily solvable |
| **Elimination** | Coefficients can easily be made opposites; neither equation is solved for a variable |

## Special Cases When Solving Systems

### Case 1: Inconsistent System (No Solution)

**Example:** Solve:

$$\begin{cases}
2x + y = 5 \\
2x + y = 1
\end{cases}$$

Using elimination (subtract the equations):

$(2x + y) - (2x + y) = 5 - 1$

$0 = 4$

This is false! The system is **inconsistent** (no solution).

Graphically, these lines are parallel (same slope, different y-intercepts).

### Case 2: Dependent System (Infinitely Many Solutions)

**Example:** Solve:

$$\begin{cases}
x + 2y = 6 \\
2x + 4y = 12
\end{cases}$$

Notice the second equation is just the first multiplied by 2.

Using elimination (multiply first by -2):

$$\begin{cases}
-2x - 4y = -12 \\
2x + 4y = 12
\end{cases}$$

Add: $0 = 0$

This is always true! The system is **dependent** (infinitely many solutions).

Any point on the line $x + 2y = 6$ is a solution.

## Systems of Inequalities

A **system of inequalities** consists of two or more inequalities with the same variables. The solution is the set of all ordered pairs that satisfy all inequalities in the system.

### Graphing Systems of Inequalities

To **graph a system of inequalities**, we graph each inequality and find the region where the shadings overlap.

**Steps:**
1. Graph each inequality separately:
   - Graph the **boundary line** (use solid line for ≤ or ≥, dashed for < or >)
   - Shade the appropriate region (test a point if needed)
2. The **solution region** is where all shadings overlap
3. Check a point in the solution region to verify

**Example 1:** Graph the system:

$$\begin{cases}
y \leq 2x + 1 \\
y > -x + 3
\end{cases}$$

**Graph first inequality:** $y \leq 2x + 1$
- Boundary line: $y = 2x + 1$ (solid line)
- Test $(0, 0)$: $0 \leq 2(0) + 1 = 1$ ✓
- Shade below the line (includes the line)

**Graph second inequality:** $y > -x + 3$
- Boundary line: $y = -x + 3$ (dashed line)
- Test $(0, 0)$: $0 > -(0) + 3 = 3$ ✗
- Shade above the line (doesn't include the line)

**Solution region:** The overlap of both shaded regions

**Example 2:** Graph the system:

$$\begin{cases}
x + y < 5 \\
2x - y \geq 1
\end{cases}$$

**First inequality:** $y < -x + 5$
- Boundary: Dashed line through $(0, 5)$ with slope -1
- Shade below

**Second inequality:** $2x - y \geq 1 \Rightarrow y \leq 2x - 1$
- Boundary: Solid line through $(0, -1)$ with slope 2
- Shade below

**Solution region:** Where both shadings overlap

### Solution Region and Boundary Lines

The **solution region** is the area where all inequalities in the system are satisfied. Points inside this region (and on solid boundary lines) are solutions.

**Boundary lines** separate the coordinate plane into regions. They can be:
- **Solid** (included in solution): for ≤ or ≥
- **Dashed** (not included in solution): for < or >

**Testing points:** To verify the solution region, test a point:
- If the point satisfies all inequalities → it's in the solution region
- If it doesn't satisfy even one inequality → it's not in the solution region

**Example:** For the system:

$$\begin{cases}
x \geq 0 \\
y \geq 0 \\
x + y \leq 4
\end{cases}$$

The solution region is a triangle in Quadrant I with vertices at $(0, 0)$, $(4, 0)$, and $(0, 4)$.

Test point $(1, 1)$:
- $1 \geq 0$ ✓
- $1 \geq 0$ ✓
- $1 + 1 = 2 \leq 4$ ✓

Point $(1, 1)$ is in the solution region.

## Applications of Systems

Systems of equations and inequalities model many real-world scenarios.

**Example 1: Ticket Sales**

Adult tickets cost \$8 and student tickets cost \$5. The theater wants to sell at least 200 tickets and earn at least \$1,200. Write and graph a system of inequalities.

Let $a$ = adult tickets and $s$ = student tickets

$$\begin{cases}
a + s \geq 200 \\
8a + 5s \geq 1200 \\
a \geq 0 \\
s \geq 0
\end{cases}$$

The solution region shows all feasible combinations of ticket sales.

**Example 2: Mixture Problem**

A coffee shop mixes two types of beans. Type A costs \$9/lb and Type B costs \$12/lb. They want to create 50 pounds of mixture costing \$10.50/lb. How many pounds of each should they use?

Let $a$ = pounds of Type A and $b$ = pounds of Type B

$$\begin{cases}
a + b = 50 \\
9a + 12b = 525
\end{cases}$$

Using elimination: multiply first equation by -9:

$$\begin{cases}
-9a - 9b = -450 \\
9a + 12b = 525
\end{cases}$$

Add: $3b = 75$, so $b = 25$

Then $a = 50 - 25 = 25$

**Solution:** 25 pounds of each type.

**Example 3: Investment Problem**

You invest \$5,000 in two accounts. One pays 4% annual interest and the other pays 6% annual interest. If you earn \$260 in interest after one year, how much did you invest in each account?

Let $x$ = amount in 4% account and $y$ = amount in 6% account

$$\begin{cases}
x + y = 5000 \\
0.04x + 0.06y = 260
\end{cases}$$

Multiply second equation by 100:

$$\begin{cases}
x + y = 5000 \\
4x + 6y = 26000
\end{cases}$$

Using substitution or elimination: $x = 2000$ and $y = 3000$

## Summary

In this chapter, you've learned to solve systems of equations and inequalities:

**Key Concepts:**

- **System of equations:** Multiple equations with the same variables
- **Solution:** Ordered pair satisfying all equations
- **System types:**
  - Consistent (has solution) vs. Inconsistent (no solution)
  - Independent (one solution) vs. Dependent (infinite solutions)

**Solution Methods:**

1. **Graphing:** Visual method, best for integer solutions
2. **Substitution:** Solve one equation for a variable, substitute into other
3. **Elimination:** Add/subtract equations to eliminate a variable

**Systems of Inequalities:**

- **Solution region:** Area where all inequalities are satisfied
- **Boundary lines:** Solid (≤, ≥) or dashed (<, >)
- **Graphing:** Shade each inequality, find overlap

**Applications:**

- Mixture problems
- Investment problems
- Rate/distance/time problems
- Optimization with constraints

These techniques are essential for modeling situations with multiple constraints and finding optimal solutions in business, science, engineering, and everyday life.

## References

1. [Solving Systems of Equations: Graphing, Substitution, Elimination](https://courses.lumenlearning.com/csn-precalculusv2/chapter/cr-24-solving-systems-of-equations-graphing-substitution-elimination/) - 2024 - Lumen Learning - Comprehensive comparison of all three methods for solving systems of equations with guidance on when to use each approach and extensive practice problems.
