---
title: "Rational Number Classification Interactive"
description: "Decide whether each number is rational, write the rational ones as p/q, and see why with a number line, a zoomed view, a fraction bar, and step-by-step explanations."
quality_score: 95
image: /sims/rational-number-classification-interactive/rational-number-classification-interactive.png
og:image: /sims/rational-number-classification-interactive/rational-number-classification-interactive.png
twitter:image: /sims/rational-number-classification-interactive/rational-number-classification-interactive.png
social:
   cards: false
---

# Rational Number Classification Interactive

<iframe src="main.html" height="602px" width="100%" scrolling="no"></iframe>

[Run the Rational Number Classification Interactive MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

## About This MicroSim

A number is **rational** if it can be written as $\frac{p}{q}$, where $p$ and $q$ are integers and $q$ is not 0. That one sentence is easy to memorize and surprisingly tricky to use: is $0.666...$ rational? What about $\sqrt{9}$, or $\frac{22}{7}$, which looks so much like $\pi$?

This MicroSim gives you 16 numbers, one at a time and in random order. For each one you:

1. **Classify it.** Select **Yes, it's rational** or **No, it's not rational**. The number card turns blue for rational or orange for not rational, and you get immediate feedback in green (correct) or red (not quite) with a short reason.
2. **Write it as p/q.** When a rational number is not already shown as a fraction, type an equivalent fraction such as `2/3` and select **Check Fraction**. Any correct fraction counts, so `6/9` and `-10/2` are fine.
3. **See why.** Select **Show me why** to reveal the reasoning one step at a time, including the "let $x$ equal the repeating decimal" method and a short proof that $\sqrt{2}$ cannot be a fraction.
4. Select **Next Number** to continue.

The right side shows the number three ways. The **number line** marks where it sits between $-6$ and $6$. The **zoomed-in line** magnifies the surrounding interval 10 times; move your pointer over it to zoom 100 times, which is enough to see that $\frac{22}{7}$ and $\pi$ are different points. The **fraction bar** appears for rational numbers once you have written the fraction, showing $p$ shaded parts out of $q$ equal parts.

The score tracker counts first-try results separately for classifying and for writing fractions.

## Iframe Embed Code

Copy this iframe to your website:

```html
<iframe src="https://dmccreary.github.io/algebra-1/sims/rational-number-classification-interactive/main.html"
        height="602px" width="100%" scrolling="no"></iframe>
```

## Lesson Plan

### Learning Objective

Students will classify numbers as rational or not rational and express rational numbers in the form $\frac{p}{q}$, justifying each decision with the definition. (Bloom's level: Apply)

### Audience and Prerequisites

Designed for Algebra I students in grade 9. Students should know what integers are, be able to convert a terminating decimal to a fraction, and have seen the definition of a rational number.

### Suggested Activity

1. **Predict (3 minutes).** Before opening the MicroSim, write $0.666...$, $\sqrt{9}$, $\frac{22}{7}$, and $\pi$ on the board. Have students vote rational or not rational for each and keep the tally visible.
2. **Practice (8 minutes).** Students work through at least ten numbers. For every "Not quite," they select **Show me why** and read all of the steps before moving on.
3. **Zoom in (3 minutes).** When $\frac{22}{7}$ or $\pi$ comes up, have students hover over the zoomed-in line and describe what they see. Ask, "How close is close enough to be equal?"
4. **Sort and explain (5 minutes).** With a partner, students sort the numbers they saw into three groups: decimals that end, decimals that repeat, and decimals that do neither. They write one sentence explaining which groups are rational.
5. **Revisit the vote.** Return to the board tally and correct it together.

### Assessment

Students demonstrate mastery by classifying at least 8 of 10 numbers correctly on the first try, writing a correct fraction for a terminating decimal and for a repeating decimal, and explaining in their own words why $\sqrt{9}$ is rational but $\sqrt{2}$ is not.

### Common Misconceptions

- "A decimal that goes on forever is never rational." Repeating decimals such as $0.666...$ go on forever and are rational.
- "Every square root is irrational." $\sqrt{9} = 3$.
- "$\frac{22}{7}$ equals $\pi$." It is a rational approximation of an irrational number.
- "A decimal with a pattern is rational." $0.1010010001...$ has a pattern but no repeating block.

## References

1. [Related Algebra I chapter](../../chapters/02-number-systems-and-properties/index.md) - Course explanation and diagram specification.
2. [Rational number - Wikipedia](https://en.wikipedia.org/wiki/Rational_number) - Definition and properties.
3. [Irrational number - Wikipedia](https://en.wikipedia.org/wiki/Irrational_number) - Examples and proofs, including the square root of 2.
4. [Repeating decimal - Wikipedia](https://en.wikipedia.org/wiki/Repeating_decimal) - Why repeating decimals are rational and how to convert them to fractions.
5. [p5.js Reference](https://p5js.org/reference/) - Documentation for the interactive graphics library.
