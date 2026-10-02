// Prime Factorization Tree Builder MicroSim — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "prime-factorization-tree-builder-microsim",
  "title": "Prime Factorization Tree Builder MicroSim",
  "kind": "factor-tree",
  "objective": "Practice building factor trees to find prime factorization of composite numbers through interactive tree construction",
  "actionLabel": "Check / Explain",
  "aMin": 4,
  "aMax": 100,
  "aDefault": 24,
  "aStep": 1,
  "bMin": 2,
  "bMax": 10,
  "bDefault": 2,
  "bStep": 1,
  "aLabel": "Composite number",
  "bLabel": "Candidate factor",
  "choices": [
    "Build",
    "Hint",
    "Check primes"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
// Learning objective: Practice building factor trees to find prime factorization of composite numbers through interactive tree construction
//
// Canvas layout (900x700px):
// - Top (900x100): Number to factor, instructions, and score
// - Main area (900x500): Interactive factor tree workspace
// - Bottom (900x100): Controls, prime number reference, and feedback
//
// Visual elements:
// - Root node at top showing the number to factor
// - Branching tree structure growing downward
// - Circular nodes for each number in factorization
// - Connecting lines between parent and child nodes
// - Prime numbers highlighted in gold/green
// - Composite numbers in blue (can be split further)
// - Final prime factorization displayed at bottom
//
// Interactive controls:
// - Input field: "Enter a number to factor" (range 4-200)
// - Button: "Start New Problem"
// - Button: "Random Number"
// - Dropdown: "Difficulty" (Easy: 4-50, Medium: 50-100, Hard: 100-200)
// - Button: "Give Hint" (highlights one composite number that can be split)
// - Button: "Check Tree" (verifies if factorization is complete)
// - Button: "Show Answer"
// - Display: Prime number reference list (primes up to 20)
//
// Default parameters:
// - Number: 24
// - Difficulty: Easy
// - Tree partially built or blank (selectable)
//
// Behavior:
// - User clicks on a composite number node
// - Input boxes appear below asking for two factors
// - User enters two factors that multiply to the number
// - System checks if factors are correct
// - If correct: creates two child nodes with those factors
// - If incorrect: shakes and shows error message
// - Prime numbers automatically highlighted and cannot be split
// - When all nodes are prime, tree is complete
//
// Visual feedback:
// - Correct factors: Smooth animation creating child nodes
// - Incorrect factors: Red shake animation, error message
// - Prime numbers: Gold border and fill color
// - Composite numbers: Blue with "click to factor" cursor
// - Completed tree: Celebration animation
//
// Tree visualization:
// - Hierarchical layout with proper spacing
// - Nodes arranged to avoid overlap
// - Animated growth as factors are added
// - Lines connecting parent to children
// - Node size based on number magnitude (optional)
//
// Final answer display:
// - Show prime factorization in exponential form
// - Example: "$24 = 2^3 \times 3$"
// - List all prime factors with multiplicity
// - Option to copy prime factorization
//
// Hint system:
// - Level 1: Highlights one composite number
// - Level 2: Shows that number is divisible by 2, 3, or 5
// - Level 3: Shows one factor
// - Level 4: Shows both factors
//
// Game modes:
// 1. **Free Build**: User factors any number step by step
// 2. **Guided Mode**: System suggests next number to factor
// 3. **Challenge Mode**: Timed factorization race
// 4. **Quiz Mode**: Factor 5 numbers, track accuracy
//
// Prime reference panel:
// - List of primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
// - Divisibility rules reminder:
//   - 2: Even numbers
//   - 3: Sum of digits divisible by 3
//   - 5: Ends in 0 or 5
//
// Special features:
// - Compare different factorization paths (different factor pairs lead to same prime factorization)
// - Show multiple factor trees for same number side by side
// - Verify uniqueness of prime factorization
//
// Visual styling:
// - Clean tree diagram with smooth curves
// - Color-coded by number type (prime vs composite)
// - Clear, large fonts for readability
// - Hover effects showing factor possibilities
// - Celebration effects on completion (confetti, glow)
//
// Implementation notes:
// - Use p5.js for rendering
// - Calculate tree layout dynamically to prevent overlap
// - Store tree structure as nested objects
// - Implement prime checking algorithm
// - Track student's factorization path
// - Provide specific feedback on common mistakes (e.g., non-factors, missed primes)
//
// **MicroSim Recommendation:** Use **microsim-p5** (Score: 94/100). This interactive tree-building simulation requires hierarchical layout, dynamic node creation, user input for factor pairs, validation logic, animated tree growth, and multiple game modes. P5.js provides complete control over tree layout algorithms, node positioning to avoid overlap, animated transitions, and interactive node selection.
