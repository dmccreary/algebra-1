// Shared Algebra I MicroSim runtime for specification-driven p5.js activities.
// Individual sim entry points provide window.MICROSIM_CONFIG before loading this file.
let canvasWidth = 400;
let drawHeight = 480;
let controlHeight = 120;
let canvasHeight = drawHeight + controlHeight;
let margin = 25;
let sliderLeftMargin = 175;
let defaultTextSize = 16;
let valueAControl;
let valueBControl;
let choiceControl;
let actionButton;
let nextButton;
let feedback = '';
let itemIndex = 0;
let dragX = null;
const cfg = window.MICROSIM_CONFIG;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  textSize(defaultTextSize);

  choiceControl = createSelect();
  choiceControl.parent(document.querySelector('main'));
  (cfg.choices || ['Explore', 'Practice', 'Challenge']).forEach(value => choiceControl.option(value));
  choiceControl.position(10, drawHeight + 8);
  choiceControl.size(150, 28);

  valueAControl = createSlider(cfg.aMin ?? -5, cfg.aMax ?? 5, cfg.aDefault ?? 2, cfg.aStep ?? 1);
  valueAControl.parent(document.querySelector('main'));
  valueAControl.position(sliderLeftMargin, drawHeight + 43);

  valueBControl = createSlider(cfg.bMin ?? -5, cfg.bMax ?? 5, cfg.bDefault ?? 1, cfg.bStep ?? 1);
  valueBControl.parent(document.querySelector('main'));
  valueBControl.position(sliderLeftMargin, drawHeight + 78);

  actionButton = createButton(cfg.actionLabel || 'Check / Explain');
  actionButton.parent(document.querySelector('main'));
  actionButton.position(170, drawHeight + 8);
  actionButton.mousePressed(checkAnswer);

  nextButton = createButton('New Example');
  nextButton.parent(document.querySelector('main'));
  nextButton.position(285, drawHeight + 8);
  nextButton.mousePressed(nextExample);

  positionControls();
  describe(cfg.objective || ('Interactive Algebra I activity: ' + cfg.title), LABEL);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  noStroke();
  fill('midnightblue');
  textAlign(CENTER, TOP);
  textSize(canvasWidth < 520 ? 20 : 24);
  text(cfg.title, canvasWidth / 2, 10);
  textSize(defaultTextSize);
  fill('black');

  switch (cfg.kind) {
    case 'number-line': drawNumberLine(); break;
    case 'coordinate': drawCoordinateActivity(); break;
    case 'area': drawAreaModel(); break;
    case 'function': drawFunctionActivity(); break;
    case 'factor-tree': drawFactorTree(); break;
    case 'scientific': drawScientificNotation(); break;
    case 'hierarchy': drawHierarchy(); break;
    case 'expression': drawExpression(); break;
    default: drawPracticeGame();
  }

  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(15);
  text((cfg.aLabel || 'Value A') + ': ' + formatNumber(valueAControl.value()), 10, drawHeight + 54);
  text((cfg.bLabel || 'Value B') + ': ' + formatNumber(valueBControl.value()), 10, drawHeight + 89);
  if (feedback) {
    fill(feedback.startsWith('Correct') ? 'darkgreen' : 'darkslateblue');
    noStroke();
    textAlign(RIGHT, CENTER);
    text(feedback, canvasWidth - 12, drawHeight + 22);
  }
}

function drawNumberLine() {
  const a = Number(valueAControl.value());
  const b = Number(valueBControl.value());
  const left = 55;
  const right = canvasWidth - 55;
  const y = 245;
  const min = -10;
  const max = 10;
  const px = value => map(value, min, max, left, right);

  stroke('lightsteelblue');
  for (let n = min; n <= max; n++) line(px(n), 80, px(n), 370);
  stroke('black');
  strokeWeight(2);
  line(left, y, right, y);
  for (let n = min; n <= max; n++) {
    line(px(n), y - 7, px(n), y + 7);
    noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(13); text(n, px(n), y + 12);
  }

  const isAbsolute = cfg.id.includes('absolute-value');
  const result = isAbsolute ? Math.abs(a) : (choiceControl.value() === 'Subtract' ? a - b : a + b);
  stroke(a < 0 ? 'firebrick' : 'royalblue');
  strokeWeight(7);
  line(px(0), y - 35, px(constrain(isAbsolute ? a : result, min, max)), y - 35);
  fill(a < 0 ? 'firebrick' : 'royalblue');
  noStroke();
  circle(px(constrain(a, min, max)), y, 18);
  if (!isAbsolute) { fill('darkorange'); circle(px(constrain(result, min, max)), y, 18); }

  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(20);
  text(isAbsolute ? `|${formatNumber(a)}| = ${formatNumber(result)}` : `${formatNumber(a)} ${choiceControl.value() === 'Subtract' ? '−' : '+'} ${formatNumber(b)} = ${formatNumber(result)}`, canvasWidth / 2, 65);
  textSize(16);
  text(isAbsolute ? `Distance from zero is ${formatNumber(result)}—distance is never negative.` : 'The colored endpoint shows the result of the selected operation.', canvasWidth / 2, 105);
}

function drawAxes(x0, y0, scale) {
  stroke('gainsboro'); strokeWeight(1);
  for (let n = -10; n <= 10; n++) {
    line(x0 + n * scale, 62, x0 + n * scale, 430);
    line(35, y0 + n * scale, canvasWidth - 35, y0 + n * scale);
  }
  stroke('black'); strokeWeight(2);
  line(35, y0, canvasWidth - 35, y0);
  line(x0, 62, x0, 430);
}

function drawCoordinateActivity() {
  const a = Number(valueAControl.value());
  const b = Number(valueBControl.value());
  const scale = min(30, (canvasWidth - 80) / 22);
  const x0 = canvasWidth / 2;
  const y0 = 250;
  drawAxes(x0, y0, scale);

  if (cfg.id.includes('coordinate-plane') || cfg.id.includes('coordinate-plotter')) {
    stroke('royalblue'); strokeWeight(2); line(x0, y0, x0 + a * scale, y0); line(x0 + a * scale, y0, x0 + a * scale, y0 - b * scale);
    fill('crimson'); noStroke(); circle(x0 + a * scale, y0 - b * scale, 18);
    fill('black'); textAlign(CENTER, TOP); textSize(18); noStroke(); text(`Point (${a}, ${b}) lies in ${quadrant(a, b)}.`, canvasWidth / 2, 65);
    return;
  }

  const verticalTest = cfg.id.includes('vertical-line');
  const domainRange = cfg.id.includes('domain-and-range');
  stroke('royalblue'); strokeWeight(3); noFill();
  let drawingSegment = false;
  for (let x = -10; x <= 10; x += 0.1) {
    let y = graphValue(x, a, b);
    const screenY = y0 - y * scale;
    const isInside = screenY >= 62 && screenY <= 430;
    if (isInside && !drawingSegment) { beginShape(); drawingSegment = true; }
    if (isInside) vertex(x0 + x * scale, screenY);
    if (!isInside && drawingSegment) { endShape(); drawingSegment = false; }
  }
  if (drawingSegment) endShape();
  if (verticalTest) {
    const testX = a;
    stroke('crimson'); strokeWeight(2); line(x0 + testX * scale, 68, x0 + testX * scale, 426);
  }
  if (domainRange) {
    stroke('darkorange'); strokeWeight(6); line(x0 - 5 * scale, 420, x0 + 5 * scale, 420);
    stroke('seagreen'); line(42, y0 - 5 * scale, 42, y0 + 5 * scale);
  }
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(17);
  text(coordinateCaption(a, b), canvasWidth / 2, 62);
}

function graphValue(x, a, b) {
  if (cfg.id.includes('piecewise')) return x < 0 ? a * x + b : -0.5 * x + b;
  if (cfg.id.includes('parent-functions')) {
    const name = choiceControl.value();
    if (name === 'Quadratic') return 0.2 * x * x;
    if (name === 'Absolute Value') return abs(x);
    return x;
  }
  if (cfg.id.includes('function-transformations')) return a * sq(x - b) / 5;
  if (cfg.id.includes('special-lines')) return choiceControl.value() === 'Vertical' ? 1000 : b;
  return a * x + b;
}

function coordinateCaption(a, b) {
  if (cfg.id.includes('slope')) return `Slope = rise/run = ${a}/${b || 1} = ${formatNumber(a / (b || 1))}`;
  if (cfg.id.includes('intercepts')) return `y = ${a}x + ${b}; y-intercept (0, ${b})`;
  if (cfg.id.includes('linear-equation-forms')) return `y = ${a}x + ${b}  ↔  ${a}x − y = ${-b}`;
  if (cfg.id.includes('special-lines')) return choiceControl.value() === 'Vertical' ? `x = ${a}: undefined slope` : `y = ${b}: slope 0`;
  if (cfg.id.includes('piecewise')) return `For x < 0: y = ${a}x + ${b}; for x ≥ 0: y = −0.5x + ${b}`;
  if (cfg.id.includes('function-transformations')) return `y = ${a}(x − ${b})²`; 
  if (cfg.id.includes('vertical-line')) return 'The red vertical line intersects this graph once: it is a function.';
  if (cfg.id.includes('domain-and-range')) return 'Orange highlights domain (x-values); green highlights range (y-values).';
  return `Explore y = ${a}x + ${b}. Change both parameters and compare.`;
}

function drawAreaModel() {
  const a = max(1, abs(Number(valueAControl.value())));
  const b = Number(valueBControl.value());
  const left = 80, top = 115, widthA = max(90, canvasWidth * 0.42), widthB = max(55, canvasWidth * 0.18), h = 190;
  fill('lightblue'); stroke('steelblue'); rect(left, top, widthA, h);
  fill('moccasin'); stroke('darkorange'); rect(left + widthA, top, widthB, h);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(20);
  text(`${a}x`, left + widthA / 2, top + h / 2); text(`${a * b}`, left + widthA + widthB / 2, top + h / 2);
  textAlign(CENTER, TOP); text(`${a}(x + ${b}) = ${a}x + ${a * b}`, canvasWidth / 2, 65);
  textSize(16); text('Each partial rectangle contributes one term to the expanded expression.', canvasWidth / 2, 345);
}

function drawFunctionActivity() {
  if (cfg.id.includes('function-evaluation')) {
    const x = Number(valueAControl.value()), a = Number(valueBControl.value());
    const result = a * x + 3;
    noStroke(); fill('white'); stroke('silver'); rect(70, 120, canvasWidth - 140, 210, 12);
    noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(22);
    text(`f(x) = ${a}x + 3`, canvasWidth / 2, 145); text(`f(${x}) = ${a}(${x}) + 3`, canvasWidth / 2, 200); fill('royalblue'); text(`f(${x}) = ${result}`, canvasWidth / 2, 255); return;
  }
  drawCoordinateActivity();
}

function drawFactorTree() {
  const n = max(4, round(abs(valueAControl.value())));
  const factor = smallestFactor(n);
  const other = n / factor;
  noStroke(); fill('royalblue'); circle(canvasWidth / 2, 105, 58); fill('white'); textAlign(CENTER, CENTER); textSize(20); text(n, canvasWidth / 2, 105);
  stroke('black'); line(canvasWidth / 2, 135, canvasWidth / 2 - 100, 235); line(canvasWidth / 2, 135, canvasWidth / 2 + 100, 235);
  fill('seagreen'); noStroke(); circle(canvasWidth / 2 - 100, 250, 58); circle(canvasWidth / 2 + 100, 250, 58);
  fill('white'); text(factor, canvasWidth / 2 - 100, 250); text(other, canvasWidth / 2 + 100, 250);
  fill('black'); noStroke(); textAlign(CENTER, TOP); textSize(17); text(factor === n ? `${n} is prime.` : `${n} = ${factor} × ${other}. Continue until every leaf is prime.`, canvasWidth / 2, 330);
}

function drawScientificNotation() {
  const coefficient = Number(valueAControl.value());
  const exponent = Number(valueBControl.value());
  const standard = coefficient * pow(10, exponent);
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(25);
  text(`${formatNumber(coefficient)} × 10${superscript(exponent)}`, canvasWidth / 2, 100);
  fill('royalblue'); textSize(32); text(`= ${standard.toLocaleString('en-US', {maximumFractionDigits: 8})}`, canvasWidth / 2, 175);
  fill('black'); textSize(17); text(exponent >= 0 ? `Move the decimal ${exponent} place(s) right.` : `Move the decimal ${abs(exponent)} place(s) left.`, canvasWidth / 2, 250);
}

function drawHierarchy() {
  const boxes = [
    ['Real Numbers', 45, 70, canvasWidth - 90, 330, 'lavender'],
    ['Rational Numbers', 70, 115, canvasWidth * 0.58, 245, 'lightblue'],
    ['Integers', 95, 160, canvasWidth * 0.42, 155, 'lightgreen'],
    ['Whole', 120, 205, canvasWidth * 0.27, 70, 'moccasin'],
    ['Irrational', canvasWidth * 0.68, 155, canvasWidth * 0.22, 130, 'mistyrose']
  ];
  boxes.forEach(([label, x, y, w, h, color]) => { fill(color); stroke('slategray'); rect(x, y, w, h, 10); noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(16); text(label, x + 10, y + 8); });
}

function drawExpression() {
  const a = Number(valueAControl.value()), b = Number(valueBControl.value());
  const tokens = [`${a}`, 'x', '+', `${b}`];
  const colors = ['lightblue', 'lightgreen', 'white', 'moccasin'];
  const start = canvasWidth / 2 - 150;
  tokens.forEach((token, i) => { fill(colors[i]); stroke('slategray'); rect(start + i * 75, 150, 62, 70, 8); noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(25); text(token, start + i * 75 + 31, 185); });
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(18); text(`coefficient · variable + constant`, canvasWidth / 2, 250); text(`For x = ${b}, the expression equals ${a * b + b}.`, canvasWidth / 2, 300);
}

function drawPracticeGame() {
  const q = practiceQuestion();
  fill('white'); stroke('silver'); rect(55, 95, canvasWidth - 110, 235, 12);
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(22); text(q.prompt, 80, 125, canvasWidth - 160, 80);
  fill('royalblue'); textSize(20); text(`Your selection: ${choiceControl.value()}`, canvasWidth / 2, 230);
  fill('black'); textSize(16); text('Choose an answer, then press Check / Explain.', canvasWidth / 2, 285);
}

function practiceQuestion() {
  const a = Number(valueAControl.value()), b = Number(valueBControl.value());
  if (cfg.id.includes('exponent')) return {prompt: `Simplify: x${superscript(abs(round(a)) || 2)} · x${superscript(abs(round(b)) || 3)}`, answer: 'Add exponents'};
  if (cfg.id.includes('radical')) return {prompt: `Which perfect-square factor helps simplify √${abs(round(a * b)) || 12}?`, answer: 'Factor first'};
  if (cfg.id.includes('polynomial')) return {prompt: `Classify ${a}x² + ${b}x + 1 by degree and number of terms.`, answer: 'Quadratic trinomial'};
  if (cfg.id.includes('like-terms')) return {prompt: `Which terms combine in ${a}x + ${b} + 3x?`, answer: 'x terms'};
  if (cfg.id.includes('order-of-operations')) return {prompt: `Evaluate ${a} + ${b} × 2. What operation comes first?`, answer: 'Multiply first'};
  if (cfg.id.includes('special-products')) return {prompt: `Match (x + ${a})² with its expanded form.`, answer: 'Perfect square'};
  if (cfg.id.includes('properties')) return {prompt: `Name the property shown by ${a} + ${b} = ${b} + ${a}.`, answer: 'Commutative'};
  if (cfg.id.includes('relation-vs-function')) return {prompt: 'A relation assigns one input to two outputs. Is it a function?', answer: 'Not a function'};
  if (cfg.id.includes('real-world')) return {prompt: `A taxi charges $${abs(a)} plus $${abs(b)} per mile. Which model fits?`, answer: 'Linear'};
  return {prompt: cfg.objective, answer: cfg.choices?.[0] || 'Explore'};
}

function checkAnswer() {
  const q = practiceQuestion();
  if (['quiz', 'practice'].includes(cfg.kind)) feedback = choiceControl.value() === q.answer ? 'Correct — well reasoned!' : `Explain: ${q.answer}`;
  else feedback = 'Notice how the representation changes with the controls.';
}

function nextExample() {
  itemIndex += 1;
  valueAControl.value(randomStep(cfg.aMin ?? -5, cfg.aMax ?? 5, cfg.aStep ?? 1));
  valueBControl.value(randomStep(cfg.bMin ?? -5, cfg.bMax ?? 5, cfg.bStep ?? 1));
  feedback = '';
}

function mouseDragged() {
  if (mouseY > 60 && mouseY < drawHeight && ['number-line', 'coordinate'].includes(cfg.kind)) {
    const v = round(map(mouseX, 55, canvasWidth - 55, cfg.aMin ?? -10, cfg.aMax ?? 10) / (cfg.aStep ?? 1)) * (cfg.aStep ?? 1);
    valueAControl.value(constrain(v, cfg.aMin ?? -10, cfg.aMax ?? 10));
  }
}

function positionControls() {
  const widthAvailable = max(120, canvasWidth - sliderLeftMargin - margin);
  valueAControl.size(widthAvailable);
  valueBControl.size(widthAvailable);
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
  redraw();
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) canvasWidth = max(360, floor(container.getBoundingClientRect().width));
}

function quadrant(x, y) {
  if (x === 0 || y === 0) return 'on an axis';
  if (x > 0 && y > 0) return 'Quadrant I';
  if (x < 0 && y > 0) return 'Quadrant II';
  if (x < 0 && y < 0) return 'Quadrant III';
  return 'Quadrant IV';
}

function smallestFactor(n) { for (let i = 2; i <= sqrt(n); i++) if (n % i === 0) return i; return n; }
function formatNumber(value) { return Number(value).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1'); }
function randomStep(minimum, maximum, step) { return round(random(minimum, maximum) / step) * step; }
function superscript(value) { const chars = {'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'}; return String(value).split('').map(c => chars[c] || c).join(''); }
