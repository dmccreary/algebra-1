# Data Analysis and Real-World Applications

## Summary

This final chapter synthesizes algebraic concepts by applying them to data analysis and real-world problems. Students will learn to create and interpret scatterplots, analyze correlation patterns, and determine lines of best fit using linear regression. The chapter covers arithmetic and geometric sequences, connecting these patterns to linear and exponential functions studied earlier. Students will also work with compound interest problems and various application scenarios, developing their ability to model real-world situations mathematically and interpret results in context.

## Concepts Covered

This chapter covers the following 12 concepts from the learning graph:

1. Data Set
2. Scatterplot
3. Correlation
4. Positive Correlation
5. Negative Correlation
6. No Correlation
7. Line of Best Fit
8. Linear Regression
9. Arithmetic Sequence
10. Geometric Sequence
11. Compound Interest
12. Exponential Function (applications)

## Prerequisites

This chapter builds on concepts from:

- [Chapter 1: Foundations of Algebra](../01-foundations-of-algebra/index.md)
- [Chapter 6: Solving Linear Equations](../06-solving-linear-equations/index.md)
- [Chapter 9: Graphing and Linear Functions](../09-graphing-and-linear-functions/index.md)
- [Chapter 11: Quadratic Functions and Equations](../11-quadratic-functions-and-equations/index.md)
- [Chapter 12: Exponential Functions](../12-exponential-functions/index.md)

---

## Introduction to Data Analysis

Throughout this course, you've learned powerful algebraic tools for solving equations, working with functions, and analyzing relationships between variables. In this final chapter, we'll apply these skills to analyze real-world data and solve practical problems that connect mathematics to everyday life.

**Data analysis** is the process of inspecting, organizing, and interpreting information to discover patterns and make informed decisions. Whether you're studying science, economics, sports statistics, or social trends, the ability to work with data is essential in today's world.

In this chapter, you'll learn to:

- Create and interpret scatterplots to visualize relationships between two variables
- Identify correlation patterns in data
- Find lines of best fit to model trends
- Work with sequences that model real-world patterns
- Apply exponential functions to compound interest and growth scenarios

## Data Sets and Scatterplots

### Understanding Data Sets

A **data set** is a collection of related data values, typically organized in a table or list. Data sets often contain pairs of values that show how two quantities are related.

**Example: Study Time and Test Scores**

| Student | Study Time (hours) | Test Score |
|---------|-------------------|------------|
| A | 1 | 68 |
| B | 2 | 72 |
| C | 3 | 78 |
| D | 4 | 85 |
| E | 5 | 88 |
| F | 6 | 92 |

This data set shows the relationship between study time (independent variable) and test score (dependent variable).

**Key components of a data set:**

- **Variables:** The quantities being measured (study time, test score)
- **Data points:** Individual measurements (Student A studied 1 hour and scored 68)
- **Independent variable:** The input or explanatory variable (study time)
- **Dependent variable:** The output or response variable (test score)

### Creating Scatterplots

A **scatterplot** is a graph that displays paired data as points on a coordinate plane. Each point represents one data pair, with the independent variable on the x-axis and the dependent variable on the y-axis.

**How to create a scatterplot:**

1. Draw and label both axes
2. Choose an appropriate scale for each axis
3. Plot each data point as an ordered pair $(x, y)$
4. Do NOT connect the points with lines

**Example:** Plotting the study time data above:

- Point for Student A: $(1, 68)$
- Point for Student B: $(2, 72)$
- Point for Student C: $(3, 78)$
- And so on...

The resulting scatterplot shows the points scattered in a pattern that generally rises from left to right, suggesting that more study time is associated with higher test scores.

**Why use scatterplots?**

- Visualize relationships between two variables
- Identify patterns and trends in data
- Spot outliers (unusual data points)
- Determine if a relationship exists and what type it might be

## Correlation

**Correlation** describes the relationship between two variables in a data set. When we look at a scatterplot, correlation tells us whether the variables tend to increase together, move in opposite directions, or show no clear pattern.

Understanding correlation helps us:

- Predict one variable from another
- Identify relationships between quantities
- Make informed decisions based on data patterns

**Important note:** Correlation does NOT prove causation. Just because two variables are correlated doesn't mean one causes the other!

### Types of Correlation

There are three main types of correlation patterns you'll encounter in scatterplots.

### Positive Correlation

**Positive correlation** occurs when both variables tend to increase together. As the x-values increase, the y-values also tend to increase.

**Scatterplot appearance:** Points form a pattern rising from left to right

**Examples of positive correlation:**

- Study time and test scores (more study → higher scores)
- Height and weight (taller people tend to weigh more)
- Years of education and income (more education → higher income)
- Temperature and ice cream sales (warmer weather → more sales)

**Strength of positive correlation:**

- **Strong positive:** Points lie close to a line rising from left to right
- **Moderate positive:** Points show upward trend but with more scatter
- **Weak positive:** Slight upward trend with considerable scatter

### Negative Correlation

**Negative correlation** occurs when one variable increases while the other decreases. As the x-values increase, the y-values tend to decrease.

**Scatterplot appearance:** Points form a pattern falling from left to right

**Examples of negative correlation:**

- Practice time and number of errors (more practice → fewer errors)
- Car age and resale value (older cars → lower value)
- Altitude and temperature (higher elevation → colder temperature)
- Speed and travel time (faster speed → less time)

**Strength of negative correlation:**

- **Strong negative:** Points lie close to a line falling from left to right
- **Moderate negative:** Points show downward trend but with more scatter
- **Weak negative:** Slight downward trend with considerable scatter

### No Correlation

**No correlation** (or zero correlation) occurs when there is no apparent relationship between the variables. Knowing the value of one variable tells you nothing about the other.

**Scatterplot appearance:** Points are randomly scattered with no clear pattern

**Examples of no correlation:**

- Shoe size and test scores
- Phone number and height
- Hair color and math ability
- Day of birth and running speed

**Visual summary:**

| Correlation Type | Pattern Direction | Example |
|-----------------|------------------|---------|
| Strong Positive | ↗ Steep upward | Height vs. arm span |
| Weak Positive | ↗ Gentle upward | Study time vs. happiness |
| No Correlation | Random scatter | Shoe size vs. GPA |
| Weak Negative | ↘ Gentle downward | Temperature vs. hot chocolate sales |
| Strong Negative | ↘ Steep downward | Car age vs. value |

## Line of Best Fit

A **line of best fit** (also called a **trend line** or **regression line**) is a straight line that best represents the overall pattern in a scatterplot. This line passes through or near most of the data points and minimizes the distances between the points and the line.

### Purpose of the Line of Best Fit

**Why do we use lines of best fit?**

- **Summarize the relationship:** One equation represents the entire data set
- **Make predictions:** Estimate y-values for new x-values (interpolation and extrapolation)
- **Identify trends:** Understand the direction and strength of the relationship
- **Simplify complex data:** Replace many points with a single model

### Characteristics of a Good Line of Best Fit

A well-drawn line of best fit should:

1. **Follow the trend:** Match the general direction of the data (positive or negative slope)
2. **Balance the points:** Have roughly equal numbers of points above and below the line
3. **Minimize errors:** Be as close as possible to all data points
4. **Pass through the centroid:** Usually passes through the point $(\bar{x}, \bar{y})$ where $\bar{x}$ and $\bar{y}$ are the means of the x and y values

### Drawing a Line of Best Fit by Hand

**Steps:**

1. Create the scatterplot
2. Identify the overall pattern (positive, negative, or no correlation)
3. If there's a linear pattern, sketch a line that:
   - Follows the direction of the points
   - Balances points above and below
   - Comes as close as possible to all points
4. Write the equation of your line in slope-intercept form: $y = mx + b$

**Example:** Study time and test scores data

From our earlier example:

```
Points: (1, 68), (2, 72), (3, 78), (4, 85), (5, 88), (6, 92)
```

By sketching a line through these points, we might estimate:

$y = 5x + 63$

Where:
- $x$ = study time (hours)
- $y$ = test score (points)
- Slope $m = 5$ means each additional hour of study increases the score by about 5 points
- y-intercept $b = 63$ represents the predicted score with 0 hours of study

### Making Predictions

Once you have a line of best fit, you can make predictions:

**Interpolation:** Predicting within the data range

If a student studies 3.5 hours:

$y = 5(3.5) + 63 = 17.5 + 63 = 80.5$

Predicted score: about 81 points

**Extrapolation:** Predicting outside the data range (use with caution!)

If a student studies 10 hours:

$y = 5(10) + 63 = 50 + 63 = 113$

This prediction (113 points) is unrealistic because test scores typically max out at 100. This shows why extrapolation can be unreliable!

## Linear Regression

**Linear regression** is a statistical method for finding the line of best fit using mathematical calculations rather than visual estimation. This technique produces the line that mathematically minimizes the sum of squared distances between the data points and the line.

### The Regression Equation

The regression line has the form:

$\hat{y} = mx + b$

Where:
- $\hat{y}$ (read as "y-hat") represents the predicted value
- $m$ is the slope of the regression line
- $b$ is the y-intercept
- $x$ is the independent variable value

**The formulas for calculating $m$ and $b$ are:**

$m = \frac{n(\sum xy) - (\sum x)(\sum y)}{n(\sum x^2) - (\sum x)^2}$

$b = \bar{y} - m\bar{x}$

Where:
- $n$ = number of data points
- $\sum xy$ = sum of products of x and y
- $\sum x$ = sum of x-values
- $\sum y$ = sum of y-values
- $\sum x^2$ = sum of squared x-values
- $\bar{x}$ = mean of x-values
- $\bar{y}$ = mean of y-values

**Note:** These calculations are typically done using a calculator or software, but understanding the process helps you interpret results!

### Example: Linear Regression Calculation

Let's use the study time data:

| $x$ | $y$ | $xy$ | $x^2$ |
|-----|-----|------|-------|
| 1 | 68 | 68 | 1 |
| 2 | 72 | 144 | 4 |
| 3 | 78 | 234 | 9 |
| 4 | 85 | 340 | 16 |
| 5 | 88 | 440 | 25 |
| 6 | 92 | 552 | 36 |
| **Sum:** 21 | **483** | **1778** | **91** |

Calculate the sums:
- $n = 6$
- $\sum x = 21$
- $\sum y = 483$
- $\sum xy = 1778$
- $\sum x^2 = 91$

Calculate means:
- $\bar{x} = \frac{21}{6} = 3.5$
- $\bar{y} = \frac{483}{6} = 80.5$

Calculate slope:

$m = \frac{6(1778) - (21)(483)}{6(91) - (21)^2} = \frac{10668 - 10143}{546 - 441} = \frac{525}{105} = 5$

Calculate y-intercept:

$b = 80.5 - 5(3.5) = 80.5 - 17.5 = 63$

**Regression equation:** $\hat{y} = 5x + 63$

This matches our earlier estimate! The regression line tells us:
- For each additional hour of study, test scores increase by 5 points on average
- A student who studies 0 hours would be predicted to score 63 points

### Correlation Coefficient

Linear regression also produces a **correlation coefficient** (denoted $r$) that measures the strength and direction of the linear relationship.

**Properties of $r$:**

- $r$ ranges from $-1$ to $1$
- $r > 0$: positive correlation
- $r < 0$: negative correlation
- $r = 0$: no linear correlation

**Interpreting $|r|$ (absolute value):**

- $0.9 < |r| \leq 1.0$: Very strong correlation
- $0.7 < |r| \leq 0.9$: Strong correlation
- $0.5 < |r| \leq 0.7$: Moderate correlation
- $0.3 < |r| \leq 0.5$: Weak correlation
- $0 \leq |r| \leq 0.3$: Very weak or no correlation

For our study time example, $r \approx 0.98$, indicating a very strong positive linear relationship.

### Using Technology

In practice, you'll typically use technology to perform linear regression:

**Calculator methods:**
- Graphing calculators (TI-83/84): Use STAT → CALC → LinReg
- Enter data in lists, calculate regression equation and $r$ value

**Software tools:**
- Spreadsheet programs (Excel, Google Sheets)
- Statistical software (R, Python, SPSS)
- Online calculators and graphing tools

The technology does the calculation work, but you still need to:
- Enter data correctly
- Interpret the equation
- Assess whether the model is appropriate
- Make reasonable predictions

## Arithmetic Sequences

An **arithmetic sequence** is a list of numbers in which each term after the first is found by adding a constant value called the **common difference**.

### Structure of Arithmetic Sequences

**General form:** $a_1, a_2, a_3, a_4, \ldots$

Where each term follows the pattern:

$a_n = a_{n-1} + d$

**Components:**
- $a_1$ = first term
- $d$ = common difference (the amount added each time)
- $a_n$ = the $n$th term
- $n$ = term number (position in sequence)

**Example 1:** The sequence $3, 7, 11, 15, 19, \ldots$

- First term: $a_1 = 3$
- Common difference: $d = 4$ (each term is 4 more than the previous)
- Pattern: $3, 3+4, 7+4, 11+4, 15+4, \ldots$

**Example 2:** The sequence $20, 15, 10, 5, 0, -5, \ldots$

- First term: $a_1 = 20$
- Common difference: $d = -5$ (decreasing sequence)
- Pattern: $20, 20-5, 15-5, 10-5, 5-5, 0-5, \ldots$

### Explicit Formula for Arithmetic Sequences

The **explicit formula** (also called the **general term formula**) allows you to find any term directly without listing all previous terms:

$a_n = a_1 + (n-1)d$

Where:
- $a_n$ = the term you're finding
- $a_1$ = first term
- $n$ = term number
- $d$ = common difference

**Example 1:** Find the 50th term of the sequence $3, 7, 11, 15, \ldots$

Given: $a_1 = 3$, $d = 4$, $n = 50$

$a_{50} = 3 + (50-1)(4) = 3 + 49(4) = 3 + 196 = 199$

**Example 2:** Find the 20th term of the sequence $100, 93, 86, 79, \ldots$

Given: $a_1 = 100$, $d = -7$, $n = 20$

$a_{20} = 100 + (20-1)(-7) = 100 + 19(-7) = 100 - 133 = -33$

### Finding the Common Difference

To find $d$, subtract any term from the next term:

$d = a_{n+1} - a_n$

**Example:** In the sequence $5, 12, 19, 26, \ldots$

$d = 12 - 5 = 7$

Check: $19 - 12 = 7$ ✓ and $26 - 19 = 7$ ✓

### Connection to Linear Functions

Arithmetic sequences are closely related to **linear functions**!

If we plot an arithmetic sequence with the term number $n$ on the x-axis and the term value $a_n$ on the y-axis, the points lie on a straight line.

The explicit formula $a_n = a_1 + (n-1)d$ can be rewritten as:

$a_n = dn + (a_1 - d)$

This is in the form $y = mx + b$ where:
- Slope $m = d$ (the common difference)
- y-intercept $b = a_1 - d$

**Example:** The sequence $3, 7, 11, 15, \ldots$ with $a_1 = 3$ and $d = 4$

Linear function: $a_n = 4n + (3-4) = 4n - 1$

Check: $a_1 = 4(1) - 1 = 3$ ✓, $a_2 = 4(2) - 1 = 7$ ✓

### Real-World Applications

**Example 1: Saving Money**

You start with $\$50$ in savings and add $\$25$ each week. How much will you have after 12 weeks?

This is an arithmetic sequence: $50, 75, 100, 125, \ldots$

- $a_1 = 50$
- $d = 25$
- $n = 12$

$a_{12} = 50 + (12-1)(25) = 50 + 275 = 325$

After 12 weeks, you'll have $\$325$.

**Example 2: Seating Capacity**

An auditorium has 20 seats in the first row, 24 in the second row, 28 in the third row, and so on. How many seats are in the 15th row?

- $a_1 = 20$
- $d = 4$
- $n = 15$

$a_{15} = 20 + (15-1)(4) = 20 + 56 = 76$

The 15th row has 76 seats.

## Geometric Sequences

A **geometric sequence** is a list of numbers in which each term after the first is found by multiplying by a constant value called the **common ratio**.

### Structure of Geometric Sequences

**General form:** $a_1, a_2, a_3, a_4, \ldots$

Where each term follows the pattern:

$a_n = a_{n-1} \cdot r$

**Components:**
- $a_1$ = first term
- $r$ = common ratio (the multiplier)
- $a_n$ = the $n$th term
- $n$ = term number

**Example 1:** The sequence $2, 6, 18, 54, 162, \ldots$

- First term: $a_1 = 2$
- Common ratio: $r = 3$ (each term is 3 times the previous)
- Pattern: $2, 2 \cdot 3, 6 \cdot 3, 18 \cdot 3, 54 \cdot 3, \ldots$

**Example 2:** The sequence $80, 40, 20, 10, 5, \ldots$

- First term: $a_1 = 80$
- Common ratio: $r = \frac{1}{2}$ or $0.5$ (each term is half the previous)
- Pattern: $80, 80 \cdot \frac{1}{2}, 40 \cdot \frac{1}{2}, 20 \cdot \frac{1}{2}, 10 \cdot \frac{1}{2}, \ldots$

### Explicit Formula for Geometric Sequences

The **explicit formula** allows you to find any term directly:

$a_n = a_1 \cdot r^{n-1}$

Where:
- $a_n$ = the term you're finding
- $a_1$ = first term
- $r$ = common ratio
- $n$ = term number

**Example 1:** Find the 8th term of the sequence $5, 15, 45, 135, \ldots$

Given: $a_1 = 5$, $r = 3$, $n = 8$

$a_8 = 5 \cdot 3^{8-1} = 5 \cdot 3^7 = 5 \cdot 2187 = 10935$

**Example 2:** Find the 6th term of the sequence $64, 32, 16, 8, \ldots$

Given: $a_1 = 64$, $r = \frac{1}{2}$, $n = 6$

$a_6 = 64 \cdot \left(\frac{1}{2}\right)^{6-1} = 64 \cdot \left(\frac{1}{2}\right)^5 = 64 \cdot \frac{1}{32} = 2$

### Finding the Common Ratio

To find $r$, divide any term by the previous term:

$r = \frac{a_{n+1}}{a_n}$

**Example:** In the sequence $4, 12, 36, 108, \ldots$

$r = \frac{12}{4} = 3$

Check: $\frac{36}{12} = 3$ ✓ and $\frac{108}{36} = 3$ ✓

### Growth and Decay in Geometric Sequences

**Growth sequences** ($r > 1$): Terms increase

- Example: $3, 6, 12, 24, \ldots$ where $r = 2$

**Decay sequences** ($0 < r < 1$): Terms decrease toward zero

- Example: $100, 50, 25, 12.5, \ldots$ where $r = 0.5$

**Alternating sequences** ($r < 0$): Terms alternate between positive and negative

- Example: $5, -10, 20, -40, \ldots$ where $r = -2$

### Connection to Exponential Functions

Geometric sequences are closely related to **exponential functions**!

The explicit formula $a_n = a_1 \cdot r^{n-1}$ can be rewritten as:

$a_n = \frac{a_1}{r} \cdot r^n$

This is in the form $y = a \cdot b^x$ where:
- Initial value adjusted: $a = \frac{a_1}{r}$
- Base $b = r$ (the common ratio)

**Example:** The sequence $3, 6, 12, 24, \ldots$ with $a_1 = 3$ and $r = 2$

Exponential function: $a_n = \frac{3}{2} \cdot 2^n = 1.5 \cdot 2^n$

Check: $a_1 = 1.5 \cdot 2^1 = 3$ ✓, $a_2 = 1.5 \cdot 2^2 = 6$ ✓

### Comparing Arithmetic and Geometric Sequences

| Feature | Arithmetic | Geometric |
|---------|-----------|----------|
| **Pattern** | Add constant | Multiply by constant |
| **Operation** | $a_n = a_{n-1} + d$ | $a_n = a_{n-1} \cdot r$ |
| **Explicit formula** | $a_n = a_1 + (n-1)d$ | $a_n = a_1 \cdot r^{n-1}$ |
| **Related function** | Linear $f(x) = mx + b$ | Exponential $f(x) = ab^x$ |
| **Graph** | Straight line | Exponential curve |
| **Example** | $2, 5, 8, 11, 14, \ldots$ | $2, 6, 18, 54, 162, \ldots$ |

**How to identify:**

- Check if consecutive terms have a **constant difference** → Arithmetic
- Check if consecutive terms have a **constant ratio** → Geometric
- If neither, it may be neither type or a different pattern

## Compound Interest

**Compound interest** is interest calculated on both the initial principal and the accumulated interest from previous periods. This creates exponential growth, making it one of the most important applications of exponential functions in finance.

### Simple Interest vs. Compound Interest

**Simple interest** is calculated only on the principal:

$A = P + Prt = P(1 + rt)$

**Compound interest** is calculated on the growing balance:

$A = P\left(1 + \frac{r}{n}\right)^{nt}$

Where:
- $A$ = final amount (balance)
- $P$ = principal (initial amount)
- $r$ = annual interest rate (as a decimal)
- $n$ = number of times interest is compounded per year
- $t$ = time in years

### Compounding Frequencies

Common compounding periods:

| Frequency | Value of $n$ |
|-----------|-------------|
| Annually | $n = 1$ |
| Semi-annually | $n = 2$ |
| Quarterly | $n = 4$ |
| Monthly | $n = 12$ |
| Daily | $n = 365$ |

**More frequent compounding** leads to higher returns because interest earns interest more often.

### Compound Interest Examples

**Example 1: Basic Compound Interest**

You invest $\$1000$ at $5\%$ annual interest compounded quarterly for 3 years. How much will you have?

Given:
- $P = 1000$
- $r = 0.05$
- $n = 4$ (quarterly)
- $t = 3$

$A = 1000\left(1 + \frac{0.05}{4}\right)^{4 \cdot 3} = 1000(1.0125)^{12} = 1000(1.1608) \approx 1160.80$

Final amount: $\$1160.80$

Interest earned: $\$1160.80 - \$1000 = \$160.80$

**Example 2: Comparing Compounding Frequencies**

Invest $\$5000$ at $6\%$ for 5 years. Compare annual vs. monthly compounding.

**Annual compounding** ($n = 1$):

$A = 5000(1.06)^5 = 5000(1.3382) = 6691.10$

**Monthly compounding** ($n = 12$):

$A = 5000\left(1 + \frac{0.06}{12}\right)^{60} = 5000(1.005)^{60} = 5000(1.3489) = 6744.50$

Difference: $\$6744.50 - \$6691.10 = \$53.40$ more with monthly compounding!

**Example 3: Finding Time**

How long will it take $\$2000$ to grow to $\$3000$ at $4\%$ compounded annually?

$3000 = 2000(1.04)^t$

Divide by 2000:

$1.5 = (1.04)^t$

To solve for $t$, we can use logarithms (covered in advanced courses) or guess-and-check:

- $t = 10$: $(1.04)^{10} = 1.48$ (too small)
- $t = 11$: $(1.04)^{11} = 1.54$ (close!)

It takes approximately 10.3 years.

### Connection to Geometric Sequences

When interest is compounded, your balance forms a **geometric sequence**!

Starting with $\$1000$ at $5\%$ compounded annually:

- Year 0: $\$1000$
- Year 1: $\$1000(1.05) = \$1050$
- Year 2: $\$1050(1.05) = \$1102.50$
- Year 3: $\$1102.50(1.05) = \$1157.63$

This is a geometric sequence with:
- $a_1 = 1000$
- $r = 1.05$
- Formula: $a_n = 1000(1.05)^{n}$

### The Power of Compound Interest

Albert Einstein reportedly called compound interest "the eighth wonder of the world." Here's why:

**Example: Long-term Growth**

Invest $\$1000$ at $7\%$ compounded annually:

- After 10 years: $\$1967$ (doubled!)
- After 20 years: $\$3870$ (almost quadrupled!)
- After 30 years: $\$7612$ (more than 7 times!)

**Key insight:** The longer the time period, the more dramatic the exponential growth becomes.

## Applications of Exponential Functions

Throughout this textbook, you've learned to solve many types of problems. This final section brings together multiple concepts to solve complex, real-world application problems.

### Population Growth

**Problem:** A town has a population of 50,000 and is growing at $2.5\%$ per year. What will the population be in 10 years?

**Solution:**

This is exponential growth: $P(t) = P_0(1 + r)^t$

Given: $P_0 = 50000$, $r = 0.025$, $t = 10$

$P(10) = 50000(1.025)^{10} = 50000(1.2801) = 64005$

The population will be approximately 64,005 people.

### Radioactive Decay

**Problem:** A radioactive substance has a half-life of 5 years. If you start with 200 grams, how much remains after 15 years?

**Solution:**

Half-life means the quantity is multiplied by $\frac{1}{2}$ every 5 years.

After 15 years = 3 half-lives:

$A = 200\left(\frac{1}{2}\right)^3 = 200 \cdot \frac{1}{8} = 25$ grams

Alternatively, using the exponential decay formula:

$A(t) = 200\left(\frac{1}{2}\right)^{t/5}$

$A(15) = 200\left(\frac{1}{2}\right)^{15/5} = 200\left(\frac{1}{2}\right)^3 = 25$ grams

### Comparing Investment Options

**Problem:** You have $\$10,000$ to invest for 8 years. Which is better?

- **Option A:** $6\%$ compounded monthly
- **Option B:** $6.2\%$ compounded annually

**Solution:**

**Option A:**

$A = 10000\left(1 + \frac{0.06}{12}\right)^{12 \cdot 8} = 10000(1.005)^{96} = 10000(1.6141) = 16141$

**Option B:**

$A = 10000(1.062)^8 = 10000(1.6145) = 16145$

Option B is slightly better by about $\$4$! The higher rate compensates for less frequent compounding.

### Temperature Change

**Problem:** A cup of coffee at $180°F$ is placed in a room at $70°F$. The temperature decreases by $8\%$ per minute. What is the temperature after 10 minutes?

**Solution:**

The temperature difference from room temperature decays exponentially:

Initial difference: $180 - 70 = 110°F$

After 10 minutes: $110(0.92)^{10} = 110(0.4344) = 47.8°F$ above room temp

Temperature: $70 + 47.8 = 117.8°F$

### Savings with Regular Deposits

**Problem:** You save $\$200$ per month in an account earning $6\%$ annual interest compounded monthly. How much will you have after 5 years?

**Solution:**

This requires the **future value of an annuity** formula (beyond basic Algebra 1, but worth seeing):

$FV = PMT \cdot \frac{(1 + i)^n - 1}{i}$

Where:
- $PMT = 200$ (monthly payment)
- $i = \frac{0.06}{12} = 0.005$ (monthly rate)
- $n = 60$ (months)

$FV = 200 \cdot \frac{(1.005)^{60} - 1}{0.005} = 200 \cdot \frac{1.3489 - 1}{0.005} = 200 \cdot 69.78 = 13956$

You'll have approximately $\$13,956$.

**Note:** This involves $\$12,000$ in deposits plus $\$1,956$ in interest earned.

### Analyzing Data Patterns

**Problem:** A scatterplot shows the value of a car over time:

| Years | Value |
|-------|-------|
| 0 | $\$25,000$ |
| 1 | $\$21,250$ |
| 2 | $\$18,063$ |
| 3 | $\$15,353$ |
| 4 | $\$13,050$ |

Is this pattern linear or exponential? Write an equation and predict the value after 6 years.

**Solution:**

Check for constant differences (linear):
- $21250 - 25000 = -3750$
- $18063 - 21250 = -3187$ (not constant)

Check for constant ratio (exponential):
- $\frac{21250}{25000} = 0.85$
- $\frac{18063}{21250} = 0.85$ ✓
- $\frac{15353}{18063} = 0.85$ ✓

This is exponential decay with $r = 0.85$ (depreciates $15\%$ per year).

Equation: $V(t) = 25000(0.85)^t$

After 6 years:

$V(6) = 25000(0.85)^6 = 25000(0.3771) = 9428$

The car will be worth approximately $\$9,428$.

## Problem-Solving Strategies

As you've worked through this chapter and this entire course, you've developed powerful problem-solving skills. Here's a summary of strategies to tackle complex real-world problems:

### 1. Understand the Problem

- Read carefully and identify what you're asked to find
- Identify the given information
- Determine what type of problem it is (linear, exponential, sequence, etc.)

### 2. Make a Plan

- Choose an appropriate model or strategy
- Decide which formulas or methods to use
- Consider whether to use tables, graphs, or equations

### 3. Execute the Plan

- Perform calculations carefully
- Keep track of units
- Use technology when appropriate
- Check that your work makes sense as you go

### 4. Review and Reflect

- Check your answer for reasonableness
- Verify units and context
- Ask: "Does this answer make sense in the real world?"
- Consider alternative methods

### Choosing the Right Model

| Pattern Type | How to Identify | Formula | Example |
|--------------|----------------|---------|---------|
| **Linear** | Constant rate of change | $y = mx + b$ | Constant speed, fixed salary increase |
| **Exponential Growth** | Constant percent increase | $y = a(1+r)^x$, $r > 0$ | Population growth, compound interest |
| **Exponential Decay** | Constant percent decrease | $y = a(1-r)^x$, $0 < r < 1$ | Radioactive decay, depreciation |
| **Arithmetic Sequence** | Add constant amount | $a_n = a_1 + (n-1)d$ | Saving fixed amount each month |
| **Geometric Sequence** | Multiply by constant | $a_n = a_1 \cdot r^{n-1}$ | Doubling pattern, half-life |

## Summary

In this final chapter, you've learned to apply algebraic concepts to analyze and model real-world situations:

**Data Analysis Skills:**

- **Data sets:** Collections of paired values showing relationships
- **Scatterplots:** Visual representations of data pairs on a coordinate plane
- **Correlation:** Relationships between variables (positive, negative, or none)
- **Line of best fit:** A line that models the trend in data
- **Linear regression:** Mathematical method for finding the best-fit line

**Sequences:**

- **Arithmetic sequences:** Add a constant difference ($d$)
  - Formula: $a_n = a_1 + (n-1)d$
  - Connection to linear functions
- **Geometric sequences:** Multiply by a constant ratio ($r$)
  - Formula: $a_n = a_1 \cdot r^{n-1}$
  - Connection to exponential functions

**Exponential Applications:**

- **Compound interest:** $A = P\left(1 + \frac{r}{n}\right)^{nt}$
- **Growth and decay models:** Population, radioactive decay, temperature
- **Comparing models:** Linear vs. exponential patterns

**Problem-Solving Framework:**

1. Understand the problem
2. Make a plan (choose the right model)
3. Execute carefully
4. Review for reasonableness

**Key Connections:**

You've seen how algebraic concepts build upon each other:
- Variables and expressions → equations → functions
- Linear equations → systems → linear models
- Quadratic functions → multiple solution methods
- Exponential functions → sequences → compound interest

These skills prepare you for advanced mathematics courses and real-world quantitative reasoning in science, economics, engineering, and beyond.

**Looking Forward:**

The algebraic thinking you've developed in this course is foundational for:
- Algebra 2: Advanced functions, logarithms, conic sections
- Precalculus: Trigonometry, advanced function analysis
- Calculus: Rates of change, optimization
- Statistics: Data analysis, probability
- Applied fields: Physics, chemistry, economics, computer science

Congratulations on completing Algebra 1! You now have powerful mathematical tools to understand and solve problems in the world around you.
