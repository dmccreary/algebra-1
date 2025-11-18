# Prime Factorization Tree Builder

<iframe src="main.html" width="100%" height="900px" style="border: 1px solid #ccc; border-radius: 5px;"></iframe>

## About This MicroSim

The **Prime Factorization Tree Builder** is an interactive tool that helps students learn how to find the prime factorization of composite numbers by building factor trees step by step.

## Learning Objectives

After using this simulation, students will be able to:

1. Build factor trees to decompose composite numbers into prime factors
2. Identify prime and composite numbers
3. Understand that prime factorization is unique for each number
4. Apply divisibility rules to find factors
5. Express numbers in prime factorization form using exponents

## How to Use

1. **Choose a Number**: Enter a number (4-200) or click "Random Number"
2. **Build the Tree**: Click on a blue (composite) number to factor it
3. **Enter Factors**: Type two factors that multiply to make the number
4. **Continue**: Keep factoring until all numbers are prime (green)
5. **Complete**: When done, see the prime factorization in exponential form

## Controls

- **Number Input**: Enter any number from 4 to 200
- **Start New Problem**: Begin factoring the entered number
- **Difficulty Selector**: Choose range (Easy: 4-50, Medium: 50-100, Hard: 100-200)
- **Random Number**: Generate a random composite number
- **Give Hint**: Highlights a composite number and suggests divisibility
- **Show Answer**: Displays the complete factorization tree

## Visual Guide

- **🟢 Green Nodes**: Prime numbers (cannot be factored further)
- **🔵 Blue Nodes**: Composite numbers (click to factor)
- **⚪ Gray Nodes**: Already factored parent numbers

## Key Concepts

### Prime Numbers
A prime number has exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13...

### Composite Numbers
A composite number has more than two factors. Examples: 4, 6, 8, 9, 10, 12...

### Prime Factorization
Every composite number can be expressed uniquely as a product of prime numbers.

**Example:** 24 = 2³ × 3

### Divisibility Rules

- **Divisible by 2**: Even numbers (ends in 0, 2, 4, 6, 8)
- **Divisible by 3**: Sum of digits is divisible by 3
- **Divisible by 5**: Ends in 0 or 5

## Educational Notes

### For Teachers

This MicroSim supports the following mathematical concepts:

- **Number Theory**: Prime and composite numbers
- **Factorization**: Breaking numbers into prime factors
- **Tree Structures**: Visual representation of hierarchical decomposition
- **Uniqueness**: Fundamental Theorem of Arithmetic

### Pedagogical Approach

1. **Visual Learning**: Tree structure makes factorization process transparent
2. **Interactive Discovery**: Students construct trees themselves
3. **Immediate Feedback**: Validates factors and guides correction
4. **Progressive Difficulty**: Adjustable number ranges
5. **Self-Paced**: Students can work at their own speed

### Common Student Misconceptions

1. **Using 1 as a factor**: The simulation prevents factoring by 1
2. **Stopping too early**: Gray nodes indicate the number has been factored
3. **Incorrect factors**: Shake animation helps students recognize errors
4. **Forgetting to check for primes**: Color coding helps identify primes

## Classroom Integration

### Suggested Activities

1. **Exploration**: Start with small numbers (12, 18, 24) to understand the process
2. **Challenge**: Factor larger numbers (100-200) using divisibility rules
3. **Comparison**: Factor the same number using different starting factors
4. **Competition**: Race to factor numbers correctly in the least time
5. **Verification**: Use calculators to verify prime factorizations

### Assessment Ideas

- Ask students to predict prime factorization before building the tree
- Have students explain why different factor trees lead to the same result
- Challenge students to find the prime factorization of numbers with many factors
- Ask students to identify patterns (e.g., powers of 2)

## Technical Implementation

- **Library**: Vis-Network for interactive graph visualization
- **Algorithms**: Prime checking, recursive factorization
- **Interactivity**: Click-to-factor interface with validation
- **Visual Feedback**: Color coding, animations, celebrations

## Concept Alignment

This MicroSim addresses these concepts from the Algebra I learning graph:

- **Prime Factorization**: Finding prime factors of integers
- **Greatest Common Factor (GCF)**: Understanding factor relationships
- **Number Theory**: Properties of prime and composite numbers
- **Exponents**: Expressing repeated factors in exponential form

## Related Concepts

- [Greatest Common Factor](../../glossary.md#greatest-common-factor)
- [Prime Numbers](../../glossary.md#prime-numbers)
- [Composite Numbers](../../glossary.md#composite-numbers)
- [Factoring](../../chapters/05-factoring-polynomials/index.md)

## Suggested Explorations

1. Factor perfect squares (16, 36, 64, 100) - notice the pattern
2. Factor powers of primes (8, 27, 32, 81) - observe the tree structure
3. Factor highly composite numbers (24, 48, 60) - see multiple branching
4. Compare factorizations of consecutive numbers
5. Find the prime factorization of your age, birth year, or phone number

## Version History

- **v1.0** (2025-11-17): Initial release with core factorization features

## Credits

Created as part of the Algebra I intelligent textbook project using vis-network for graph visualization.
