# Factoring Polynomials

## Summary

This chapter develops students' ability to factor polynomial expressions using multiple techniques. Building on knowledge of special products from the previous chapter, students will learn to reverse the multiplication process through factoring by greatest common factor, factoring trinomials, recognizing and factoring difference of squares and perfect square trinomials, and using the grouping method. The chapter culminates with the zero product property and solving equations by factoring, connecting algebraic manipulation to equation solving.

## Concepts Covered

This chapter covers the following 15 concepts from the learning graph:

1. Factoring by GCF
2. Factoring Trinomials
3. Factoring Difference of Squares
4. Factoring Perfect Squares
5. Factoring by Grouping
6. Zero Product Property
7. Solving by Factoring
8. Factoring Completely
9. Factoring Quadratic Form
10. Relation
11. Independent Variable
12. Dependent Variable
13. Input
14. Output
15. Discrete Function

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Algebra](../01-foundations-of-algebra/index.md)
- [Chapter 2: Number Systems and Properties](../02-number-systems-and-properties/index.md)
- [Chapter 3: Exponents and Powers](../03-exponents-and-powers/index.md)
- [Chapter 4: Polynomial Expressions](../04-polynomial-expressions/index.md)

---

## Introduction to Factoring

**Factoring** is the process of breaking down a polynomial into simpler expressions (called **factors**) that, when multiplied together, give you the original polynomial. Think of factoring as the reverse of multiplication—instead of expanding $(x + 3)(x + 5)$ to get $x^2 + 8x + 15$, we start with $x^2 + 8x + 15$ and work backwards to find $(x + 3)(x + 5)$.

Factoring is one of the most important skills in algebra because it allows us to:

- Simplify complex expressions
- Solve quadratic equations
- Find zeros of polynomial functions
- Simplify rational expressions
- Solve real-world problems

In this chapter, you'll learn several factoring techniques, each useful for different types of polynomials.

## Factoring by Greatest Common Factor (GCF)

The first and most fundamental factoring technique is **factoring out the greatest common factor (GCF)**. This method applies the distributive property in reverse.

### Finding the GCF

The **GCF** of a polynomial is the largest expression that divides evenly into every term. To find it:

1. Find the GCF of the coefficients (numbers)
2. Find the lowest power of each variable that appears in all terms
3. Multiply these together

**Example 1:** Factor $12x^3 + 18x^2$

- GCF of coefficients: GCF(12, 18) = 6
- Lowest power of $x$: $x^2$ (appears in both terms)
- GCF = $6x^2$

Now factor it out:

$12x^3 + 18x^2 = 6x^2(2x) + 6x^2(3) = 6x^2(2x + 3)$

**Check:** $6x^2(2x + 3) = 12x^3 + 18x^2$ ✓

**Example 2:** Factor $15a^4b^2 - 10a^2b^3 + 5a^3b$

- GCF of coefficients: GCF(15, 10, 5) = 5
- Lowest power of $a$: $a^2$
- Lowest power of $b$: $b$
- GCF = $5a^2b$

$15a^4b^2 - 10a^2b^3 + 5a^3b = 5a^2b(3a^2b - 2b^2 + a)$

**Important:** Always factor out the GCF first before using any other factoring method. This simplifies the remaining expression and makes other techniques easier to apply.

## Factoring Trinomials

A **trinomial** is a polynomial with three terms. The most common trinomials you'll factor have the form $ax^2 + bx + c$.

### Factoring $x^2 + bx + c$ (when $a = 1$)

When the coefficient of $x^2$ is 1, we look for two numbers that:

- **Multiply** to give $c$ (the constant term)
- **Add** to give $b$ (the coefficient of $x$)

**Example:** Factor $x^2 + 7x + 12$

We need two numbers that multiply to 12 and add to 7.

Factors of 12: 1×12, 2×6, 3×4

Check sums:
- 1 + 12 = 13 ✗
- 2 + 6 = 8 ✗
- 3 + 4 = 7 ✓

Therefore: $x^2 + 7x + 12 = (x + 3)(x + 4)$

**Check:** $(x + 3)(x + 4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12$ ✓

**Example with negative terms:** Factor $x^2 - 5x - 14$

Need two numbers that multiply to −14 and add to −5.

Since the product is negative, one number must be positive and one negative.

Factors of −14: 1×(−14), (−1)×14, 2×(−7), (−2)×7

Check sums:
- 1 + (−14) = −13 ✗
- (−1) + 14 = 13 ✗
- 2 + (−7) = −5 ✓

Therefore: $x^2 - 5x - 14 = (x + 2)(x - 7)$

### Factoring $ax^2 + bx + c$ (when $a ≠ 1$)

When the leading coefficient is not 1, we can use the **AC method** (also called factoring by grouping for trinomials):

1. Multiply $a$ and $c$ to get $AC$
2. Find two numbers that multiply to $AC$ and add to $b$
3. Rewrite the middle term using these two numbers
4. Factor by grouping

**Example:** Factor $3x^2 + 11x + 6$

- $AC = 3 \times 6 = 18$
- Need two numbers that multiply to 18 and add to 11
- Numbers: 2 and 9 (since $2 \times 9 = 18$ and $2 + 9 = 11$)

Rewrite: $3x^2 + 11x + 6 = 3x^2 + 2x + 9x + 6$

Factor by grouping:

$= x(3x + 2) + 3(3x + 2)$

$= (x + 3)(3x + 2)$

**Check:** $(x + 3)(3x + 2) = 3x^2 + 2x + 9x + 6 = 3x^2 + 11x + 6$ ✓

## Special Factoring Patterns

Certain polynomial forms have special factoring patterns that you should memorize. Recognizing these patterns makes factoring much faster.

### Difference of Squares

The **difference of squares** pattern is one of the most useful:

#### Difference of Squares Formula

$$a^2 - b^2 = (a + b)(a - b)$$

where:

- $a^2$ is a perfect square
- $b^2$ is a perfect square
- There is a subtraction sign between them

**Key point:** The sum of squares $a^2 + b^2$ does NOT factor using real numbers!

**Example 1:** Factor $x^2 - 25$

Recognize: $x^2 - 25 = x^2 - 5^2$

Apply formula: $x^2 - 25 = (x + 5)(x - 5)$

**Example 2:** Factor $9x^2 - 49$

Recognize: $9x^2 - 49 = (3x)^2 - 7^2$

Apply formula: $9x^2 - 49 = (3x + 7)(3x - 7)$

**Example 3:** Factor $16a^4 - 81b^2$

Recognize: $16a^4 - 81b^2 = (4a^2)^2 - (9b)^2$

Apply formula: $16a^4 - 81b^2 = (4a^2 + 9b)(4a^2 - 9b)$

### Perfect Square Trinomials

A **perfect square trinomial** is the result of squaring a binomial. These have special patterns:

#### Perfect Square Trinomial Formulas

$$a^2 + 2ab + b^2 = (a + b)^2$$

$$a^2 - 2ab + b^2 = (a - b)^2$$

**How to recognize a perfect square trinomial:**

1. The first and last terms are perfect squares: $a^2$ and $b^2$
2. The middle term equals $\pm 2ab$

**Example 1:** Factor $x^2 + 10x + 25$

Check if it's a perfect square trinomial:
- First term: $x^2$ is a perfect square ($a = x$)
- Last term: 25 is a perfect square ($b = 5$)
- Middle term: $10x = 2(x)(5) = 2ab$ ✓

Therefore: $x^2 + 10x + 25 = (x + 5)^2$

**Example 2:** Factor $9x^2 - 12x + 4$

Check:
- First: $9x^2 = (3x)^2$ so $a = 3x$
- Last: $4 = 2^2$ so $b = 2$
- Middle: $12x = 2(3x)(2)$ ✓

Therefore: $9x^2 - 12x + 4 = (3x - 2)^2$

## Factoring by Grouping

**Factoring by grouping** is a technique used for polynomials with four or more terms. The strategy is to group terms with common factors and then factor out a common binomial.

**Steps:**

1. Group terms (usually in pairs)
2. Factor out the GCF from each group
3. Factor out the common binomial factor

**Example 1:** Factor $ax + ay + bx + by$

Group: $(ax + ay) + (bx + by)$

Factor each group:

$= a(x + y) + b(x + y)$

Factor out common binomial:

$= (a + b)(x + y)$

**Example 2:** Factor $6x^3 - 9x^2 + 4x - 6$

Group: $(6x^3 - 9x^2) + (4x - 6)$

Factor each group:

$= 3x^2(2x - 3) + 2(2x - 3)$

Factor out common binomial:

$= (3x^2 + 2)(2x - 3)$

**Note:** Sometimes you may need to rearrange terms or factor out a negative to make the binomial factors match.

## The Zero Product Property

The **zero product property** is a fundamental principle that connects factoring to equation solving:

**If $ab = 0$, then $a = 0$ or $b = 0$ (or both).**

This property is true because zero multiplied by anything equals zero, so if a product is zero, at least one of the factors must be zero.

### Solving Equations by Factoring

To solve a polynomial equation by factoring:

1. Move all terms to one side (get zero on the other side)
2. Factor the polynomial completely
3. Set each factor equal to zero
4. Solve each resulting equation

**Example 1:** Solve $x^2 + 5x + 6 = 0$

Factor: $(x + 2)(x + 3) = 0$

Apply zero product property:

$x + 2 = 0$ or $x + 3 = 0$

$x = -2$ or $x = -3$

**Check $x = -2$:** $(-2)^2 + 5(-2) + 6 = 4 - 10 + 6 = 0$ ✓

**Check $x = -3$:** $(-3)^2 + 5(-3) + 6 = 9 - 15 + 6 = 0$ ✓

**Example 2:** Solve $3x^2 = 12x$

First, move all terms to one side:

$3x^2 - 12x = 0$

Factor out GCF:

$3x(x - 4) = 0$

Apply zero product property:

$3x = 0$ or $x - 4 = 0$

$x = 0$ or $x = 4$

**Example 3:** Solve $x^2 - 25 = 0$

Recognize difference of squares:

$(x + 5)(x - 5) = 0$

$x + 5 = 0$ or $x - 5 = 0$

$x = -5$ or $x = 5$

## Factoring Completely

When we say **factor completely**, we mean continue factoring until no factor can be factored further using integers. This often requires using multiple factoring techniques in sequence.

**Strategy for factoring completely:**

1. **Always factor out the GCF first**
2. **Count the terms:**
   - 2 terms: Look for difference of squares
   - 3 terms: Look for perfect square trinomial, then try trinomial factoring
   - 4+ terms: Try factoring by grouping
3. **Check if any factors can be factored further**

**Example 1:** Factor $2x^3 - 50x$ completely

Step 1: Factor out GCF: $2x(x^2 - 25)$

Step 2: Recognize difference of squares in second factor:

$= 2x(x + 5)(x - 5)$

**Example 2:** Factor $3x^4 - 12x^3 + 12x^2$ completely

Step 1: Factor out GCF: $3x^2(x^2 - 4x + 4)$

Step 2: Recognize perfect square trinomial:

$= 3x^2(x - 2)^2$

**Example 3:** Factor $x^4 - 16$ completely

Step 1: No GCF to factor out

Step 2: Recognize difference of squares: $x^4 - 16 = (x^2)^2 - 4^2$

$= (x^2 + 4)(x^2 - 4)$

Step 3: The second factor is also a difference of squares!

$= (x^2 + 4)(x + 2)(x - 2)$

Note: $x^2 + 4$ cannot be factored further using real numbers.

## Applications and Relation to Functions

Factoring polynomials is directly related to understanding polynomial functions. The factored form reveals important information about the function's behavior.

### Finding Zeros of Functions

If $f(x)$ is a polynomial function and we can write it in factored form $f(x) = (x - r_1)(x - r_2)...(x - r_n)$, then the values $r_1, r_2, ..., r_n$ are the **zeros** (or **roots** or **x-intercepts**) of the function.

**Example:** If $f(x) = x^2 - 3x - 10$, find the zeros.

Factor: $f(x) = (x - 5)(x + 2)$

Set equal to zero: $(x - 5)(x + 2) = 0$

Zeros: $x = 5$ and $x = -2$

This means the graph of $f(x)$ crosses the x-axis at $(5, 0)$ and $(-2, 0)$.

### Relations, Variables, and Functions

In this chapter, we're also introduced to foundational concepts about **relations** and **functions**:

A **relation** is any pairing of input values with output values. For example, the equation $y = x^2 - 4$ describes a relation where each $x$-value (input) is paired with a $y$-value (output).

- **Independent variable:** The input variable (usually $x$)
- **Dependent variable:** The output variable (usually $y$), which depends on the value of the independent variable
- **Input:** The value substituted for the independent variable
- **Output:** The resulting value of the dependent variable

**Example:** In the equation $C = 2\pi r$ (circumference of a circle):
- Independent variable: $r$ (radius)
- Dependent variable: $C$ (circumference)
- If input $r = 5$, then output $C = 2\pi(5) = 10\pi$

A **discrete function** is a function where the inputs are isolated, distinct values (not continuous). For example, the number of students in a class over the years is discrete—you can have 25 or 26 students, but not 25.7 students.

## Summary

In this chapter, you've learned powerful factoring techniques that are essential for success in algebra:

**Factoring Methods:**

- **Factoring by GCF:** Always the first step—factor out the greatest common factor
- **Factoring trinomials:** For $x^2 + bx + c$, find two numbers that multiply to $c$ and add to $b$
- **Difference of squares:** $a^2 - b^2 = (a + b)(a - b)$
- **Perfect square trinomials:** $a^2 \pm 2ab + b^2 = (a \pm b)^2$
- **Factoring by grouping:** Group terms and factor out common binomials

**Problem-Solving Strategy:**

1. Factor out GCF first
2. Identify the pattern based on number of terms
3. Apply appropriate factoring technique
4. Check if factors can be factored further
5. Always verify by expanding

**Solving Equations:**

- **Zero product property:** If $ab = 0$, then $a = 0$ or $b = 0$
- To solve by factoring: get zero on one side, factor, set each factor equal to zero

**Key Vocabulary:**

- **Factors:** Expressions that multiply together
- **Factoring completely:** Factor until no further factoring is possible
- **Zeros/roots:** Values that make the function equal zero

Mastering factoring takes practice, but these techniques will serve you throughout algebra and beyond. In the next chapter, you'll apply factoring skills to solve linear equations systematically.

## References

1. [Factoring Polynomials](https://math.libretexts.org/Courses/Hope_College/Math_125:_Hope_College/01:_Algebra_Essentials/1.05:_Factoring_Polynomials) - 2024 - Mathematics LibreTexts - Comprehensive guide to factoring techniques including GCF, difference of squares, perfect square trinomials, and factoring by grouping with extensive examples and practice problems.
