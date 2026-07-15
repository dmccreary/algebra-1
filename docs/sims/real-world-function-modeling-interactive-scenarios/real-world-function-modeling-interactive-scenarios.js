// Real-World Function Modeling Interactive Scenarios — generated from the chapter specification
// CANVAS_HEIGHT: 600
// Layout: drawHeight 480 + controlHeight 120 = 600; iframe height is 602.
// Shared runtime setup calls updateCanvasSize() before createCanvas().
// Shared runtime uses canvas.parent(document.querySelector('main')).
window.MICROSIM_CONFIG = {
  "id": "real-world-function-modeling-interactive-scenarios",
  "title": "Real-World Function Modeling Interactive Scenarios",
  "kind": "quiz",
  "objective": "Apply function concepts to model and solve real-world problems across various contexts",
  "actionLabel": "Check / Explain",
  "aMin": -5,
  "aMax": 5,
  "aDefault": 2,
  "aStep": 1,
  "bMin": -5,
  "bMax": 5,
  "bDefault": 1,
  "bStep": 1,
  "aLabel": "Value A",
  "bLabel": "Value B",
  "choices": [
    "Linear",
    "Quadratic",
    "Exponential"
  ]
};
document.write('<script src="../algebra-microsim-runtime.js"><\/script>');

// Original specification retained for maintainers:
// Type: microsim
//
//     Learning objective: Apply function concepts to model and solve real-world problems across various contexts
//
//     Canvas layout (1000x700px):
//     - Top section (1000x100): Scenario description and problem statement
//     - Middle-left (500x400): Visualization area (graph or animation)
//     - Middle-right (500x400): Work area showing function and calculations
//     - Bottom (1000x200): Interactive controls and inputs
//
//     Scenarios (user-selectable):
//
//     **Scenario 1: Cell Phone Plan**
//
//     Description: "A cell phone plan costs \$40/month for up to 2GB of data. Each additional GB costs \$15. Model the monthly cost as a function of data usage."
//
//     Visualization:
//     - Bar chart showing cost for different data amounts (0-6 GB)
//     - Highlight current selection
//
//     Function display:
//     $$C(d) = \begin{cases}
//     40 & \text{if } 0 \leq d \leq 2 \\
//     40 + 15(d-2) & \text{if } d > 2
//     \end{cases}$$
//
//     Interactive elements:
//     - Slider: "Data usage (GB)" from 0 to 6
//     - Display: "Your bill: $X"
//     - Input: "How much data can I use for $100?"
//     - Button: "Calculate"
//
//     **Scenario 2: Projectile Motion**
//
//     Description: "A ball is thrown upward from a height of 5 feet with initial velocity of 40 ft/s. Its height is given by $h(t) = -16t^2 + 40t + 5$. When does it hit the ground?"
//
//     Visualization:
//     - Animation of ball trajectory
//     - Graph of height vs. time
//     - Ground level marked at $y = 0$
//
//     Function display:
//     - $h(t) = -16t^2 + 40t + 5$
//     - Domain: $t \geq 0$ (time cannot be negative)
//     - Range: $[0, \text{max height}]$
//
//     Interactive elements:
//     - Slider: "Time (seconds)" from 0 to 3
//     - Display: "Height at t = X seconds: Y feet"
//     - Button: "Play animation"
//     - Button: "Find maximum height"
//     - Button: "Find when ball hits ground"
//
//     **Scenario 3: Business Profit**
//
//     Description: "A company sells widgets for \$25 each. Fixed costs are \$500/month and each widget costs \$10 to produce. Find the profit function and break-even point."
//
//     Visualization:
//     - Graph showing cost, revenue, and profit functions
//     - Break-even point marked with star
//     - Shaded region showing profit/loss
//
//     Function display:
//     - Revenue: $R(n) = 25n$
//     - Cost: $C(n) = 500 + 10n$
//     - Profit: $P(n) = R(n) - C(n) = 15n - 500$
//
//     Interactive elements:
//     - Slider: "Widgets sold" from 0 to 100
//     - Display: "Revenue: $X"
//     - Display: "Cost: $Y"
//     - Display: "Profit: $Z" (green if positive, red if negative)
//     - Button: "Find break-even point"
//     - Input: "Widgets needed for $1000 profit?"
//
//     **Scenario 4: Temperature Conversion**
//
//     Description: "Convert between Fahrenheit and Celsius using the function $C(F) = \frac{5}{9}(F - 32)$."
//
//     Visualization:
//     - Dual thermometers showing Fahrenheit and Celsius
//     - Important reference points marked (freezing, boiling, body temp)
//     - Graph of conversion function
//
//     Function display:
//     - $C(F) = \frac{5}{9}(F - 32)$
//     - Inverse: $F(C) = \frac{9}{5}C + 32$
//
//     Interactive elements:
//     - Slider: "Fahrenheit" from -40 to 212
//     - Display: "Celsius: X°"
//     - Slider: "Celsius" from -40 to 100
//     - Display: "Fahrenheit: Y°"
//     - Buttons for common temperatures: "Water freezes", "Room temp", "Body temp", "Water boils"
//
//     **Scenario 5: Parking Garage Fees**
//
//     Description: "A parking garage charges \$5 for the first hour and \$3 for each additional hour or part of an hour. Model this as a step function."
//
//     Visualization:
//     - Step function graph
//     - Horizontal segments showing constant cost for each hour
//     - Jumps at hour boundaries
//
//     Function display:
//     $$P(h) = \begin{cases}
//     5 & \text{if } 0 < h \leq 1 \\
//     5 + 3\lceil h-1 \rceil & \text{if } h > 1
//     \end{cases}$$
//
//     Where $\lceil x \rceil$ is the ceiling function (round up)
//
//     Interactive elements:
//     - Slider: "Hours parked" from 0 to 8 (decimal values allowed)
//     - Display: "Parking fee: $X"
//     - Note: "Partial hours are charged as full hours"
//     - Input: "Maximum hours for $20?"
//
//     General Features (all scenarios):
//     - Dropdown: "Select scenario" (switches between the 5 scenarios)
//     - Button: "Show solution steps" (reveals step-by-step algebraic work)
//     - Button: "New problem" (generates variant with different numbers)
//     - Display: Domain and range for current function
//     - Checkbox: "Show grid"
//     - Checkbox: "Show key points"
//
//     Default parameters:
//     - Scenario: Cell Phone Plan
//     - All visualizations active
//     - Step-by-step solutions hidden initially
//
//     Implementation notes:
//     - Use p5.js for graphs and animations
//     - For projectile motion, use parametric plotting with time steps
//     - For step functions, carefully plot discontinuities with open/closed circles
//     - Include validation for user inputs (non-negative where appropriate)
//     - Provide clear error messages for invalid inputs
//     - Use color coding: green for profit/gain, red for loss/cost, blue for revenue
//     - Animate transitions when switching scenarios
