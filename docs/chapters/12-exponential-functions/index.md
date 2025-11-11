# Exponential Functions

## Summary

This chapter introduces exponential functions and their applications to real-world growth and decay phenomena. Students will learn to distinguish between exponential growth and decay, understand growth and decay factors, and recognize the role of initial value in exponential models. The chapter includes practical applications such as compound interest and teaches students to compare linear and exponential functions, understanding when each model is appropriate. Students will also learn to graph exponential functions and identify their key characteristics.

## Concepts Covered

This chapter covers the following 10 concepts from the learning graph:

1. Exponential Function
2. Exponential Growth
3. Exponential Decay
4. Growth Factor
5. Decay Factor
6. Initial Value
7. Exponential Models
8. Comparing Linear and Exponential
9. Graphing Exponentials
10. Applications of Systems

## Prerequisites

This chapter builds on concepts from:

- [Chapter 2: Number Systems and Properties](../02-number-systems-and-properties/index.md)
- [Chapter 3: Exponents and Powers](../03-exponents-and-powers/index.md)
- [Chapter 8: Introduction to Functions](../08-introduction-to-functions/index.md)
- [Chapter 9: Graphing and Linear Functions](../09-graphing-and-linear-functions/index.md)
- [Chapter 10: Systems of Equations and Inequalities](../10-systems-of-equations-and-inequalities/index.md)

---

## Introduction to Exponential Functions

In previous chapters, you studied linear functions (where the variable is in the base) and quadratic functions (where the variable is squared). Now we'll explore **exponential functions**, where the variable appears in the exponent.

An **exponential function** has the form:

$$f(x) = a \cdot b^x$$

where:
- $a$ is the **initial value** (the value when $x = 0$)
- $b$ is the **base** (must be positive and not equal to 1)
- $x$ is the exponent (the independent variable)

**Examples of exponential functions:**
- $f(x) = 2^x$
- $f(x) = 5 \cdot 3^x$
- $f(x) = 100 \cdot (0.5)^x$
- $f(x) = 1000 \cdot (1.05)^x$

Exponential functions model situations where quantities change by constant factors (multiplication) rather than constant amounts (addition). This makes them perfect for modeling:
- Population growth
- Compound interest
- Radioactive decay
- Bacterial growth
- Depreciation

## Exponential Growth vs. Exponential Decay

Exponential functions behave very differently depending on whether the base $b$ is greater than or less than 1.

### Exponential Growth

**Exponential growth** occurs when the base $b > 1$. The function increases rapidly as $x$ increases.

**General form:** $f(x) = a \cdot b^x$ where $b > 1$

The **growth factor** is $b$. It tells you how much the quantity is multiplied by for each unit increase in $x$.

**Example:** $f(x) = 3 \cdot 2^x$
- Initial value: $a = 3$
- Growth factor: $b = 2$ (the quantity doubles with each unit increase in $x$)
- When $x = 0$: $f(0) = 3 \cdot 2^0 = 3 \cdot 1 = 3$
- When $x = 1$: $f(1) = 3 \cdot 2^1 = 6$ (doubled)
- When $x = 2$: $f(2) = 3 \cdot 2^2 = 12$ (doubled again)
- When $x = 3$: $f(3) = 3 \cdot 2^3 = 24$ (doubled again)

**Real-world example:** A population of 100 bacteria doubles every hour. The function modeling this is:

$$P(t) = 100 \cdot 2^t$$

where $t$ is time in hours.

### Exponential Decay

**Exponential decay** occurs when $0 < b < 1$. The function decreases rapidly as $x$ increases, approaching zero but never reaching it.

**General form:** $f(x) = a \cdot b^x$ where $0 < b < 1$

The **decay factor** is $b$. It tells you what fraction the quantity is multiplied by for each unit increase in $x$.

**Example:** $f(x) = 80 \cdot (0.5)^x$
- Initial value: $a = 80$
- Decay factor: $b = 0.5$ (the quantity is halved with each unit increase in $x$)
- When $x = 0$: $f(0) = 80 \cdot (0.5)^0 = 80$
- When $x = 1$: $f(1) = 80 \cdot 0.5 = 40$ (halved)
- When $x = 2$: $f(2) = 80 \cdot 0.25 = 20$ (halved again)
- When $x = 3$: $f(3) = 80 \cdot 0.125 = 10$ (halved again)

**Real-world example:** A car worth \$25,000 depreciates by 15% each year. The decay factor is $1 - 0.15 = 0.85$, so:

$$V(t) = 25000 \cdot (0.85)^t$$

where $t$ is time in years.

### Summary Table

| Type | Base | Behavior | Growth/Decay Factor | Example |
|------|------|----------|---------------------|---------|
| **Growth** | $b > 1$ | Increases rapidly | $b$ (multiply by $b$ each step) | $f(x) = 5 \cdot 3^x$ |
| **Decay** | $0 < b < 1$ | Decreases toward zero | $b$ (multiply by $b$ each step) | $f(x) = 100 \cdot (0.4)^x$ |

## Growth and Decay Factors

Understanding how to identify and work with growth and decay factors is essential for building exponential models.

### Growth Factor from Percent Increase

If a quantity increases by $r$ percent, the **growth factor** is:

$$b = 1 + \frac{r}{100}$$

**Example 1:** A population increases by 8% per year.
- Growth factor: $b = 1 + 0.08 = 1.08$
- If initial population is 5,000: $P(t) = 5000 \cdot (1.08)^t$

**Example 2:** An investment grows by 12% annually.
- Growth factor: $b = 1 + 0.12 = 1.12$
- If initial investment is \$2,000: $A(t) = 2000 \cdot (1.12)^t$

### Decay Factor from Percent Decrease

If a quantity decreases by $r$ percent, the **decay factor** is:

$$b = 1 - \frac{r}{100}$$

**Example 1:** A car depreciates by 20% per year.
- Decay factor: $b = 1 - 0.20 = 0.80$
- If initial value is \$30,000: $V(t) = 30000 \cdot (0.80)^t$

**Example 2:** Radioactive material decays by 5% per hour.
- Decay factor: $b = 1 - 0.05 = 0.95$
- If initial amount is 500 grams: $A(t) = 500 \cdot (0.95)^t$

### Initial Value

The **initial value** $a$ is the value of the function when $x = 0$ (or $t = 0$ in time-based models).

To find the initial value: $f(0) = a \cdot b^0 = a \cdot 1 = a$

**Example:** For $f(x) = 7 \cdot 2^x$, the initial value is $a = 7$.

The initial value represents:

- Starting population
- Original investment amount
- Initial quantity of substance
- Beginning value of an asset

## Building Exponential Models

To create an **exponential model** from a real-world situation:

1. **Identify the initial value** $a$
2. **Determine if it's growth or decay**
3. **Find the growth/decay factor** $b$
4. **Write the function:** $f(x) = a \cdot b^x$

**Example 1:** A town has a population of 12,000 and is growing at 3% per year. Write a function for the population after $t$ years.

- Initial value: $a = 12000$
- Growth (increasing): $b = 1 + 0.03 = 1.03$
- **Function:** $P(t) = 12000 \cdot (1.03)^t$

**Example 2:** You buy a computer for \$1,200. It loses 25% of its value each year. Write a function for its value after $t$ years.

- Initial value: $a = 1200$
- Decay (decreasing): $b = 1 - 0.25 = 0.75$
- **Function:** $V(t) = 1200 \cdot (0.75)^t$

**Example 3:** A bacterial culture contains 50 bacteria and triples every hour. Write a function for the number of bacteria after $t$ hours.

- Initial value: $a = 50$
- Growth (tripling means multiplying by 3): $b = 3$
- **Function:** $B(t) = 50 \cdot 3^t$

## Evaluating Exponential Functions

To evaluate an exponential function at a specific value:

1. Substitute the value for $x$
2. Calculate the power
3. Multiply by the initial value

**Example:** For $f(x) = 5 \cdot 2^x$, find $f(4)$.

$f(4) = 5 \cdot 2^4 = 5 \cdot 16 = 80$

**Real-world example:** A savings account has \$1,000 and grows at 6% annually. How much will be in the account after 10 years?

$A(t) = 1000 \cdot (1.06)^t$

$A(10) = 1000 \cdot (1.06)^{10} = 1000 \cdot 1.79085... \approx \$1,790.85$

**Example with decay:** A medication has a half-life in the body, decreasing by 30% every 4 hours. If you take 200 mg, how much remains after 12 hours?

$M(t) = 200 \cdot (0.70)^t$ where $t$ is in 4-hour periods

After 12 hours = 3 periods:

$M(3) = 200 \cdot (0.70)^3 = 200 \cdot 0.343 = 68.6$ mg

## Compound Interest

One of the most important applications of exponential functions is **compound interest**—when interest is earned not only on the principal but also on previously earned interest.

### Compound Interest Formula

$$A = P(1 + r)^t$$

where:
- $A$ = final amount
- $P$ = principal (initial investment)
- $r$ = annual interest rate (as a decimal)
- $t$ = time in years

**Example 1:** You invest \$5,000 at 4% annual interest. How much will you have after 8 years?

$A = 5000(1 + 0.04)^8 = 5000(1.04)^8 = 5000 \cdot 1.3686 \approx \$6,843$

**Example 2:** How long does it take for an investment to double at 7% annual interest?

We need: $2P = P(1.07)^t$

Divide by $P$: $2 = (1.07)^t$

Using trial and error or logarithms:
- $t = 10$: $(1.07)^{10} = 1.967$ (close!)
- $t = 11$: $(1.07)^{11} = 2.105$ (too high)

It takes approximately 10 years to double.

### Compound Interest with Multiple Periods

If interest compounds more frequently than annually:

$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$

where:
- $n$ = number of times interest compounds per year
- $t$ = time in years

**Example:** \$3,000 invested at 6% annual interest compounded monthly for 5 years.

$n = 12$ (monthly)

$A = 3000\left(1 + \frac{0.06}{12}\right)^{12 \cdot 5}$

$= 3000(1.005)^{60}$

$= 3000 \cdot 1.3489$

$\approx \$4,046.70$

## Comparing Linear and Exponential Functions

It's crucial to recognize when a situation is best modeled by a linear function versus an exponential function.

### Linear vs. Exponential Growth

**Linear functions** change by constant **amounts** (addition/subtraction):
- Form: $f(x) = mx + b$
- Each step adds/subtracts the same amount ($m$)
- Graph: straight line
- Example: Saving \$50 per month

**Exponential functions** change by constant **factors** (multiplication):
- Form: $f(x) = a \cdot b^x$
- Each step multiplies by the same amount ($b$)
- Graph: curved (J-shape for growth, decay curve for decay)
- Example: Population growing by 5% per year

### Comparison Table

| Feature | Linear: $f(x) = mx + b$ | Exponential: $f(x) = a \cdot b^x$ |
|---------|------------------------|----------------------------------|
| Change type | Constant difference | Constant ratio |
| Rate of change | Constant | Changes (accelerates or decelerates) |
| Graph shape | Straight line | Curved |
| Growth pattern | Steady | Accelerating (if $b > 1$) |
| Example | Adding $5 each time | Multiplying by $1.5$ each time |

### Identifying the Pattern

**Example 1:** Which type of function?

| $x$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| $f(x)$ | 3 | 6 | 12 | 24 | 48 |

Check differences: $6-3=3$, $12-6=6$, $24-12=12$ (not constant)

Check ratios: $\frac{6}{3}=2$, $\frac{12}{6}=2$, $\frac{24}{12}=2$, $\frac{48}{24}=2$ (constant!)

**Answer:** Exponential with $a = 3$ and $b = 2$

**Function:** $f(x) = 3 \cdot 2^x$

**Example 2:** Which type of function?

| $x$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| $g(x)$ | 5 | 8 | 11 | 14 | 17 |

Check differences: $8-5=3$, $11-8=3$, $14-11=3$, $17-14=3$ (constant!)

**Answer:** Linear with $m = 3$ and $b = 5$

**Function:** $g(x) = 3x + 5$

## Graphing Exponential Functions

**Graphing exponential functions** helps visualize growth and decay patterns.

### Key Features of Exponential Graphs

For $f(x) = a \cdot b^x$:

1. **Y-intercept:** Always at $(0, a)$
2. **Domain:** All real numbers $(-\infty, \infty)$
3. **Range:**
   - If $a > 0$: $(0, \infty)$ (positive values only)
   - If $a < 0$: $(-\infty, 0)$ (negative values only)
4. **Horizontal asymptote:** The x-axis ($y = 0$)
5. **End behavior:**
   - If $b > 1$ (growth): As $x \to \infty$, $f(x) \to \infty$; as $x \to -\infty$, $f(x) \to 0$
   - If $0 < b < 1$ (decay): As $x \to \infty$, $f(x) \to 0$; as $x \to -\infty$, $f(x) \to \infty$

### Graphing Steps

1. Find the y-intercept: $(0, a)$
2. Calculate a few key points (use negative, zero, and positive $x$-values)
3. Note the horizontal asymptote at $y = 0$
4. Determine if it's growth or decay
5. Sketch the curve through the points

**Example:** Graph $f(x) = 2 \cdot 3^x$

**Step 1:** Y-intercept: $(0, 2)$

**Step 2:** Calculate points:

| $x$ | $f(x) = 2 \cdot 3^x$ | Point |
|-----|---------------------|-------|
| $-2$ | $2 \cdot 3^{-2} = 2 \cdot \frac{1}{9} \approx 0.22$ | $(-2, 0.22)$ |
| $-1$ | $2 \cdot 3^{-1} = 2 \cdot \frac{1}{3} \approx 0.67$ | $(-1, 0.67)$ |
| $0$ | $2 \cdot 3^0 = 2$ | $(0, 2)$ |
| $1$ | $2 \cdot 3^1 = 6$ | $(1, 6)$ |
| $2$ | $2 \cdot 3^2 = 18$ | $(2, 18)$ |

**Step 3:** Horizontal asymptote: $y = 0$

**Step 4:** Growth function ($b = 3 > 1$)

**Step 5:** Plot points and draw smooth curve approaching the x-axis on the left and rising steeply on the right.

## Applications of Exponential Functions

Exponential functions model many real-world phenomena.

### Population Growth

**Example:** A city has a population of 50,000 and grows at 2.5% per year. What will the population be in 15 years?

$P(t) = 50000 \cdot (1.025)^t$

$P(15) = 50000 \cdot (1.025)^{15} = 50000 \cdot 1.4483 \approx 72,415$

**Answer:** Approximately 72,415 people

### Radioactive Decay

**Example:** A radioactive isotope has a half-life of 10 years (it decreases by 50% every 10 years). If you start with 200 grams, how much remains after 30 years?

After 10 years: $200 \cdot 0.5 = 100$ grams
After 20 years: $100 \cdot 0.5 = 50$ grams
After 30 years: $50 \cdot 0.5 = 25$ grams

Using the function: $A(t) = 200 \cdot (0.5)^{t/10}$

$A(30) = 200 \cdot (0.5)^3 = 200 \cdot 0.125 = 25$ grams

### Bacterial Growth

**Example:** A bacterial culture starts with 500 bacteria and doubles every 3 hours. How many bacteria after 12 hours?

Number of doubling periods: $\frac{12}{3} = 4$ periods

$B(t) = 500 \cdot 2^{t/3}$ where $t$ is in hours

$B(12) = 500 \cdot 2^4 = 500 \cdot 16 = 8,000$ bacteria

### Depreciation

**Example:** A car worth \$28,000 depreciates by 12% per year. What is its value after 6 years?

$V(t) = 28000 \cdot (0.88)^t$

$V(6) = 28000 \cdot (0.88)^6 = 28000 \cdot 0.4644 \approx \$13,003$

## Applications of Systems (with Exponential Functions)

When exponential and linear functions are combined in systems, we can solve problems involving when one quantity overtakes another.

**Example:** Company A has 1,000 customers and gains 50 new customers per month (linear). Company B has 500 customers and grows by 10% per month (exponential). When will Company B have more customers?

Company A: $A(t) = 1000 + 50t$ (linear)

Company B: $B(t) = 500 \cdot (1.10)^t$ (exponential)

We need to find when $B(t) > A(t)$.

Test values:

| Month | A(t) | B(t) |
|-------|------|------|
| 0 | 1000 | 500 |
| 5 | 1250 | 805 |
| 10 | 1500 | 1,297 |
| 15 | 1750 | 2,088 |

Between months 10 and 15, Company B overtakes Company A.

More precisely testing:
- Month 12: $A(12) = 1600$, $B(12) = 1,567$ (A still ahead)
- Month 13: $A(13) = 1650$, $B(13) = 1,724$ (B ahead!)

**Answer:** Company B overtakes Company A around month 13.

## Summary

In this chapter, you've learned about exponential functions and their applications:

**Exponential Functions:**

- Form: $f(x) = a \cdot b^x$
- **Initial value:** $a$ (value when $x = 0$)
- **Base:** $b$ (growth/decay factor)

**Growth vs. Decay:**

- **Exponential growth:** $b > 1$ (increases rapidly)
- **Exponential decay:** $0 < b < 1$ (decreases toward zero)

**Growth and Decay Factors:**

- Growth factor from $r$% increase: $b = 1 + \frac{r}{100}$
- Decay factor from $r$% decrease: $b = 1 - \frac{r}{100}$

**Linear vs. Exponential:**

- **Linear:** Constant differences (add/subtract same amount)
- **Exponential:** Constant ratios (multiply by same factor)

**Graphing:**

- Y-intercept at $(0, a)$
- Horizontal asymptote at $y = 0$
- Growth curves rise steeply; decay curves approach zero

**Applications:**

- **Compound interest:** $A = P(1 + r)^t$
- Population growth and decay
- Radioactive decay
- Bacterial growth
- Depreciation

Exponential functions are essential for modeling real-world phenomena involving rapid growth or decay, making them fundamental in biology, economics, physics, and many other fields.
