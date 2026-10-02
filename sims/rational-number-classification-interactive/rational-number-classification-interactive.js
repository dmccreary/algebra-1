// Rational Number Classification Interactive MicroSim
// CANVAS_HEIGHT: 600
// Students decide whether a number is rational, then (when it is) write it in
// the form p/q. A number line, a zoomed view, and a fraction bar show where the
// number sits, and "Show me why" reveals a step-by-step justification.
// Bloom level: Apply (classify, express).
// Layout: drawHeight 500 + controlHeight 100 = 600; iframe height is 602.

let canvasWidth = 800;
let drawHeight = 500;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 15;
let defaultTextSize = 16;

// theme colors from the specification
const RATIONAL_BLUE = '#1565c0';
const RATIONAL_TINT = '#e3f2fd';
const IRRATIONAL_ORANGE = '#e65100';
const IRRATIONAL_TINT = '#fff3e0';
const CORRECT_GREEN = '#2e7d32';
const INCORRECT_RED = '#c62828';
const INK = '#1f2937';
const MUTED = '#4b5563';

// Number line range shown in the right panel
const LINE_MIN = -6;
const LINE_MAX = 6;

// The numbers to classify. For rational numbers n/d is the value in lowest
// terms; askFraction is true when the student should rewrite it as p/q.
const NUMBERS = [
  { label: '3/8', show: { kind: 'fraction', n: 3, d: 8 }, value: 3 / 8,
    rational: true, n: 3, d: 8, askFraction: false,
    reason: 'It is already a ratio of two integers.',
    steps: [
      'A rational number can be written as p/q, where p and q are integers and q is not 0.',
      'Here p = 3 and q = 8, so 3/8 fits the definition.',
      'Check: 3 ÷ 8 = 0.375, a decimal that ends.'
    ] },
  { label: '0.666...', show: { kind: 'text', text: '0.666...' }, value: 2 / 3,
    rational: true, n: 2, d: 3, askFraction: true,
    reason: 'Repeating decimals are always rational.',
    steps: [
      'Let x = 0.666...',
      'Multiply by 10: 10x = 6.666...',
      'Subtract x: 10x − x = 6, so 9x = 6.',
      'x = 6/9 = 2/3, a ratio of integers.'
    ] },
  { label: '√2', show: { kind: 'sqrt', radicand: '2' }, value: Math.SQRT2,
    rational: false,
    reason: 'It cannot be written as p/q where p and q are integers.',
    steps: [
      '√2 = 1.41421356... The decimal never ends and never repeats.',
      'Suppose √2 = p/q in lowest terms. Then p² = 2q², so p is even.',
      'Write p = 2k. Then 4k² = 2q², so q² = 2k² and q is even too.',
      'p and q both even contradicts "lowest terms," so no such fraction exists.'
    ] },
  { label: '−5', show: { kind: 'text', text: '−5' }, value: -5,
    rational: true, n: -5, d: 1, askFraction: true,
    reason: 'Every integer is rational.',
    steps: [
      'Any integer n can be written as n/1.',
      '−5 = −5/1, with p = −5 and q = 1.',
      'Other answers work too, such as −10/2.'
    ] },
  { label: 'π', show: { kind: 'text', text: 'π' }, value: Math.PI,
    rational: false,
    reason: 'Its decimal never ends and never repeats.',
    steps: [
      'π = 3.14159265...',
      'The digits go on forever with no repeating block.',
      'Mathematicians proved in the 1700s that no fraction of integers equals π.',
      'Fractions such as 22/7 are only close to π.'
    ] },
  { label: '0.125', show: { kind: 'text', text: '0.125' }, value: 0.125,
    rational: true, n: 1, d: 8, askFraction: true,
    reason: 'Decimals that end are always rational.',
    steps: [
      '0.125 has three decimal places, so 0.125 = 125/1000.',
      'Divide the top and bottom by 125.',
      '125/1000 = 1/8.'
    ] },
  { label: '22/7', show: { kind: 'fraction', n: 22, d: 7 }, value: 22 / 7,
    rational: true, n: 22, d: 7, askFraction: false,
    reason: 'It is a ratio of two integers, even though it is close to π.',
    steps: [
      '22 and 7 are integers and 7 is not 0, so 22/7 is rational.',
      '22 ÷ 7 = 3.142857142857..., a repeating decimal.',
      'π = 3.14159265..., so 22/7 is close to π but not equal to it.'
    ] },
  { label: '0', show: { kind: 'text', text: '0' }, value: 0,
    rational: true, n: 0, d: 1, askFraction: true,
    reason: 'Zero is an integer, and every integer is rational.',
    steps: [
      '0 = 0/1, with p = 0 and q = 1.',
      'Any 0/q with q not 0 also works, such as 0/5.',
      'The only rule is that q, the bottom number, cannot be 0.'
    ] },
  { label: '√9', show: { kind: 'sqrt', radicand: '9' }, value: 3,
    rational: true, n: 3, d: 1, askFraction: true,
    reason: 'This square root simplifies to an integer.',
    steps: [
      '√9 = 3, because 3 × 3 = 9.',
      '3 = 3/1, a ratio of integers.',
      'A square root is rational only when it simplifies like this one does.'
    ] },
  { label: '0.1010010001...', show: { kind: 'text', text: '0.1010010001...' }, value: 0.1010010001,
    rational: false,
    reason: 'The digits follow a pattern, but no block of digits repeats.',
    steps: [
      'Count the zeros between the ones: one, then two, then three...',
      'A repeating decimal repeats the same block forever. Here the block keeps growing.',
      'A decimal that never ends and never repeats cannot be written as p/q.'
    ] },
  { label: '1.75', show: { kind: 'text', text: '1.75' }, value: 1.75,
    rational: true, n: 7, d: 4, askFraction: true,
    reason: 'Decimals that end are always rational.',
    steps: [
      '1.75 has two decimal places, so 1.75 = 175/100.',
      'Divide the top and bottom by 25.',
      '175/100 = 7/4.'
    ] },
  { label: '0.8181...', show: { kind: 'text', text: '0.8181...' }, value: 9 / 11,
    rational: true, n: 9, d: 11, askFraction: true,
    reason: 'Repeating decimals are always rational.',
    steps: [
      'Let x = 0.8181...',
      'Two digits repeat, so multiply by 100: 100x = 81.8181...',
      'Subtract x: 99x = 81.',
      'x = 81/99 = 9/11.'
    ] },
  { label: '−2/5', show: { kind: 'fraction', n: -2, d: 5 }, value: -2 / 5,
    rational: true, n: -2, d: 5, askFraction: false,
    reason: 'It is already a ratio of two integers.',
    steps: [
      'p = −2 and q = 5 are integers, and q is not 0.',
      'Negative fractions are rational too.',
      'Check: −2 ÷ 5 = −0.4, a decimal that ends.'
    ] },
  { label: 'e', show: { kind: 'text', text: 'e' }, value: Math.E,
    rational: false,
    reason: 'Its decimal never ends and never repeats.',
    steps: [
      'e = 2.718281828...',
      'It looks as if "1828" repeats, but the next digits are 459045...',
      'e has been proved irrational: no fraction of integers equals it.'
    ] },
  { label: '√5', show: { kind: 'sqrt', radicand: '5' }, value: Math.sqrt(5),
    rational: false,
    reason: '5 is not a perfect square.',
    steps: [
      '2 × 2 = 4 and 3 × 3 = 9, so √5 is between 2 and 3.',
      'No fraction multiplied by itself equals exactly 5.',
      '√5 = 2.23606797..., never ending and never repeating.'
    ] },
  { label: '2 1/3', show: { kind: 'mixed', whole: 2, n: 1, d: 3 }, value: 7 / 3,
    rational: true, n: 7, d: 3, askFraction: true,
    reason: 'A mixed number is a whole number plus a fraction.',
    steps: [
      '2 1/3 means 2 + 1/3.',
      '2 = 6/3, so 2 + 1/3 = 6/3 + 1/3.',
      'That is 7/3, a ratio of integers.'
    ] }
];

// controls
let buttonRow, fractionRow;
let yesButton, noButton, nextButton, fractionLabel, fractionInput, checkButton, whyButton;
let compactLabels = null;

// state
let order = [];               // shuffled indexes into NUMBERS
let position = 0;
let current = null;           // the NUMBERS entry on screen
let answered = false;         // has the student clicked Yes or No?
let answeredCorrectly = false;
let fractionDone = false;     // fraction entered correctly (or revealed)
let fractionAttempted = false;
let fractionMessage = '';
let fractionMessageGood = false;
let stepsShown = 0;
let classifiedRight = 0, classifiedTotal = 0;
let fractionsRight = 0, fractionsTotal = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  const mainElement = document.querySelector('main');

  // Row 1: classify, then move on
  buttonRow = createDiv('');
  buttonRow.parent(mainElement);
  buttonRow.position(10, drawHeight + 12);
  buttonRow.style('display', 'flex');
  buttonRow.style('gap', '8px');

  yesButton = createButton("Yes, it's rational");
  yesButton.parent(buttonRow);
  yesButton.mousePressed(() => classify(true));

  noButton = createButton("No, it's not rational");
  noButton.parent(buttonRow);
  noButton.mousePressed(() => classify(false));

  nextButton = createButton('Next Number');
  nextButton.parent(buttonRow);
  nextButton.mousePressed(nextNumber);

  // Row 2: express as p/q, and the step-by-step explanation
  fractionRow = createDiv('');
  fractionRow.parent(mainElement);
  fractionRow.position(10, drawHeight + 54);
  fractionRow.style('display', 'flex');
  fractionRow.style('gap', '8px');
  fractionRow.style('align-items', 'center');
  fractionRow.style('font-size', '16px');

  fractionLabel = createSpan('Express as p/q:');
  fractionLabel.parent(fractionRow);

  fractionInput = createInput('');
  fractionInput.parent(fractionRow);
  fractionInput.size(70);
  fractionInput.attribute('placeholder', 'p/q');
  fractionInput.attribute('aria-label', 'Express the number as p over q');
  fractionInput.elt.addEventListener('keydown', event => {
    if (event.key === 'Enter') checkFraction();
  });

  checkButton = createButton('Check Fraction');
  checkButton.parent(fractionRow);
  checkButton.mousePressed(checkFraction);

  whyButton = createButton('Show me why');
  whyButton.parent(fractionRow);
  whyButton.mousePressed(showNextStep);

  [yesButton, noButton, nextButton, checkButton, whyButton].forEach(b => b.style('font-size', '15px'));

  order = shuffle(NUMBERS.map((item, i) => i));
  loadNumber();
  updateCanvasSize();

  describe('A practice activity. A number is shown and the student decides ' +
    'whether it is rational, then writes it as a fraction p over q. A number ' +
    'line, a zoomed-in view, and a fraction bar show where the number sits, ' +
    'and an explanation panel gives feedback and step-by-step reasons.', LABEL);
}

// ---------- activity logic ----------

function loadNumber() {
  current = NUMBERS[order[position]];
  answered = false;
  answeredCorrectly = false;
  fractionDone = false;
  fractionAttempted = false;
  fractionMessage = '';
  stepsShown = 0;
  fractionInput.value('');
  refreshControls();
}

function nextNumber() {
  position += 1;
  if (position >= order.length) {
    // every number has been seen: reshuffle and go around again
    order = shuffle(NUMBERS.map((item, i) => i));
    position = 0;
  }
  loadNumber();
}

function classify(saidRational) {
  if (answered) return;
  answered = true;
  answeredCorrectly = saidRational === current.rational;
  classifiedTotal += 1;
  if (answeredCorrectly) classifiedRight += 1;
  refreshControls();
}

function needsFraction() {
  return answered && current.rational && current.askFraction && !fractionDone;
}

function greatestCommonDivisor(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

function checkFraction() {
  if (!needsFraction()) return;
  // accept either kind of minus sign and optional spaces
  const typed = fractionInput.value().replace(/−/g, '-').replace(/\s+/g, '');
  const match = typed.match(/^(-?\d+)\/(-?\d+)$/);
  const firstTry = !fractionAttempted;
  fractionMessageGood = false;

  if (!match) {
    fractionMessage = 'Type two integers with a slash between them, like 3/4.';
    return;                       // a formatting slip does not count as an attempt
  }
  const p = parseInt(match[1], 10);
  const q = parseInt(match[2], 10);
  if (q === 0) {
    fractionMessage = 'The bottom number q cannot be 0. Try a different q.';
    return;
  }

  fractionAttempted = true;
  if (firstTry) fractionsTotal += 1;

  // p/q equals n/d exactly when p × d = n × q
  if (p * current.d === current.n * q) {
    fractionDone = true;
    fractionMessageGood = true;
    if (firstTry) fractionsRight += 1;
    const divisor = greatestCommonDivisor(p, q);
    const sign = q < 0 ? -1 : 1;
    const lowest = formatFraction(sign * p / divisor, sign * q / divisor);
    const entered = formatFraction(p, q);
    fractionMessage = 'Yes! ' + current.label + ' = ' + entered +
      (entered !== lowest ? ', which simplifies to ' + lowest + '.' : '.');
  } else {
    fractionMessage = 'Not equal: ' + formatFraction(p, q) + ' = ' + formatDecimal(p / q) +
      ', but this number is ' + formatDecimal(current.value) + '. Try again, or press Show me why.';
  }
  refreshControls();
}

function showNextStep() {
  if (!answered || stepsShown >= current.steps.length) return;
  stepsShown += 1;
  // the last step states the fraction, so it no longer counts as the student's own
  if (stepsShown === current.steps.length && needsFraction()) {
    if (!fractionAttempted) fractionsTotal += 1;
    fractionAttempted = true;
    fractionDone = true;
    fractionMessageGood = false;
    fractionMessage = 'Answer shown: ' + current.label + ' = ' + formatFraction(current.n, current.d) + '.';
  }
  refreshControls();
}

function formatFraction(p, q) {
  return String(p).replace('-', '−') + '/' + String(q).replace('-', '−');
}

function formatDecimal(value) {
  const rounded = Math.round(value * 10000) / 10000;
  const text = String(rounded).replace('-', '−');
  return Math.abs(value - rounded) > 1e-9 ? text + '...' : text;
}

function setEnabled(control, enabled) {
  if (enabled) control.removeAttribute('disabled');
  else control.attribute('disabled', '');
}

function refreshControls() {
  setEnabled(yesButton, !answered);
  setEnabled(noButton, !answered);
  setEnabled(fractionInput, needsFraction());
  setEnabled(checkButton, needsFraction());
  setEnabled(whyButton, answered && stepsShown < current.steps.length);
  whyButton.html(answered && stepsShown > 0 && stepsShown < current.steps.length ? 'Next step' : 'Show me why');
}

// ---------- text helpers ----------

function fitSize(str, maxWidth, startSize, minSize) {
  let size = startSize;
  textSize(size);
  while (textWidth(str) > maxWidth && size > minSize) {
    size -= 1;
    textSize(size);
  }
  return size;
}

function wrapLines(str, maxWidth) {
  const words = str.split(' ');
  const lines = [];
  let line = '';
  words.forEach(word => {
    const candidate = line ? line + ' ' + word : word;
    if (textWidth(candidate) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  });
  if (line) lines.push(line);
  return lines;
}

// Draw wrapped text starting at (x, y); returns the height used.
function drawWrapped(str, x, y, w, size) {
  textSize(size);
  textAlign(LEFT, TOP);
  const leading = size + 5;
  const lines = wrapLines(str, w);
  lines.forEach((part, i) => text(part, x, y + i * leading));
  return lines.length * leading;
}

// Height the same text would need, without drawing it.
function wrappedHeight(str, w, size) {
  textSize(size);
  return wrapLines(str, w).length * (size + 5);
}

// ---------- drawing the number itself ----------

function drawStackedFraction(n, d, cx, cy, size) {
  const top = String(Math.abs(n));
  const bottom = String(d);
  textSize(size);
  textAlign(CENTER, CENTER);
  const barW = Math.max(textWidth(top), textWidth(bottom)) + size * 0.3;
  let left = cx - barW / 2;
  if (n < 0) {
    const minusW = textWidth('−');
    left += minusW / 2;
    text('−', left - minusW * 0.6, cy);
  }
  const middle = left + barW / 2;
  text(top, middle, cy - size * 0.58);
  text(bottom, middle, cy + size * 0.62);
  stroke(INK);
  strokeWeight(Math.max(2, size * 0.06));
  line(left, cy, left + barW, cy);
  noStroke();
}

function drawNumber(show, cx, cy, size) {
  noStroke();
  fill(INK);
  textStyle(NORMAL);
  if (show.kind === 'fraction') {
    drawStackedFraction(show.n, show.d, cx, cy, size * 0.72);
  } else if (show.kind === 'mixed') {
    textSize(size);
    textAlign(CENTER, CENTER);
    const wholeW = textWidth(String(show.whole));
    text(String(show.whole), cx - size * 0.35, cy);
    drawStackedFraction(show.n, show.d, cx - size * 0.35 + wholeW / 2 + size * 0.45, cy, size * 0.55);
  } else if (show.kind === 'sqrt') {
    textSize(size);
    textAlign(LEFT, CENTER);
    const rootW = textWidth('√');
    const insideW = textWidth(show.radicand);
    const left = cx - (rootW + insideW) / 2;
    text('√', left, cy);
    text(show.radicand, left + rootW, cy);
    // the bar over the radicand
    stroke(INK);
    strokeWeight(Math.max(2, size * 0.055));
    const barY = cy - size * 0.47;
    line(left + rootW - size * 0.02, barY, left + rootW + insideW + size * 0.06, barY);
    noStroke();
  } else {
    textAlign(CENTER, CENTER);
    textSize(size);
    text(show.text, cx, cy);
  }
}

// ---------- main draw ----------

function draw() {
  updateCanvasSize();

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);

  // title
  noStroke();
  fill('black');
  textStyle(NORMAL);
  textAlign(CENTER, TOP);
  textSize(fitSize('Is This Number Rational?', canvasWidth - 20, 24, 14));
  text('Is This Number Rational?', canvasWidth / 2, 8);

  const leftW = constrain(canvasWidth * 0.36, 200, 320);
  const rightX = margin + leftW + 15;
  const rightW = canvasWidth - rightX - margin;

  drawLeftPanel(margin, 44, leftW, drawHeight - 52);
  drawNumberLines(rightX, 44, rightW);
  drawFractionBar(rightX, 236, rightW);
  drawExplanation(rightX, 300, rightW, drawHeight - 308);
}

function themeColor() {
  if (!answered) return MUTED;
  return current.rational ? RATIONAL_BLUE : IRRATIONAL_ORANGE;
}

function drawLeftPanel(x, y, w, h) {
  // number card, tinted blue or orange once the answer is known
  const cardH = 168;
  stroke(themeColor());
  strokeWeight(answered ? 3 : 1);
  fill(!answered ? 'white' : current.rational ? RATIONAL_TINT : IRRATIONAL_TINT);
  rect(x, y, w, cardH, 12);
  strokeWeight(1);

  // shrink long decimals to fit the card
  let size = 60;
  if (current.show.kind === 'text') {
    textStyle(NORMAL);
    size = fitSize(current.show.text, w - 24, 60, 18);
  }
  drawNumber(current.show, x + w / 2, y + (answered ? 70 : 84), size);

  if (answered) {
    const chip = current.rational ? 'RATIONAL' : 'NOT RATIONAL';
    textStyle(BOLD);
    textSize(15);
    const chipW = textWidth(chip) + 22;
    noStroke();
    fill(themeColor());
    rect(x + (w - chipW) / 2, y + cardH - 38, chipW, 26, 13);
    fill('white');
    textAlign(CENTER, CENTER);
    text(chip, x + w / 2, y + cardH - 24);
    textStyle(NORMAL);
  }

  // feedback under the card
  let cursorY = y + cardH + 12;
  noStroke();
  if (!answered) {
    fill(MUTED);
    drawWrapped('Can it be written as p/q, with p and q integers and q not 0? Choose Yes or No.',
      x, cursorY, w, 16);
  } else {
    fill(answeredCorrectly ? CORRECT_GREEN : INCORRECT_RED);
    textStyle(BOLD);
    textAlign(LEFT, TOP);
    textSize(18);
    text(answeredCorrectly ? 'Correct!' : 'Not quite.', x, cursorY);
    textStyle(NORMAL);
    cursorY += 26;
    fill(INK);
    let message = current.rational
      ? (answeredCorrectly ? '' : 'This number is rational. ') + current.reason
      : (answeredCorrectly ? '' : 'This number is not rational. ') + current.reason;
    if (current.rational && current.askFraction && !fractionDone && !fractionMessage) {
      message += ' Now write it as p/q below.';
    }
    cursorY += drawWrapped(message, x, cursorY, w, 15) + 8;

    if (fractionMessage) {
      fill(fractionMessageGood ? CORRECT_GREEN : fractionDone ? MUTED : INCORRECT_RED);
      drawWrapped(fractionMessage, x, cursorY, w, 15);
    }
  }

  // score tracker pinned to the bottom of the panel
  noStroke();
  fill(INK);
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM);
  textSize(15);
  text('Score', x, y + h - 42);
  textStyle(NORMAL);
  text('Classified: ' + classifiedRight + ' of ' + classifiedTotal + ' correct', x, y + h - 22);
  text('Fractions: ' + fractionsRight + ' of ' + fractionsTotal + ' correct', x, y + h - 2);
}

// The main number line plus a zoomed-in strip beneath it.
function drawNumberLines(x, y, w) {
  const lineLeft = x + 12;
  const lineRight = x + w - 12;
  const toX = value => map(value, LINE_MIN, LINE_MAX, lineLeft, lineRight);
  const mainY = y + 52;
  const dotColor = themeColor();

  noStroke();
  fill(INK);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  textSize(15);
  text('On the number line', x, y);
  textStyle(NORMAL);

  // main line with integer ticks
  stroke(INK);
  strokeWeight(2);
  line(lineLeft - 8, mainY, lineRight + 8, mainY);
  strokeWeight(1);
  const labelEvery = (lineRight - lineLeft) / (LINE_MAX - LINE_MIN) < 24 ? 2 : 1;
  for (let i = LINE_MIN; i <= LINE_MAX; i++) {
    stroke(INK);
    line(toX(i), mainY - 6, toX(i), mainY + 6);
    if (i % labelEvery === 0) {
      noStroke();
      fill(INK);
      textAlign(CENTER, TOP);
      textSize(13);
      text(String(i).replace('-', '−'), toX(i), mainY + 9);
    }
  }

  // the zoom window: one unit normally, one tenth while the pointer hovers
  const stripY = y + 150;
  const hovering = mouseX >= x && mouseX <= x + w && mouseY >= y + 20 && mouseY <= stripY + 30;
  const span = hovering ? 0.1 : 1;
  let zoomStart = Math.floor(current.value / span + 1e-9) * span;
  zoomStart = Math.round(zoomStart * 10) / 10;
  const zoomEnd = Math.round((zoomStart + span) * 10) / 10;
  const zoomToX = value => map(value, zoomStart, zoomEnd, lineLeft, lineRight);

  // guide lines from the window on the main line down to the strip
  stroke(180);
  line(toX(zoomStart), mainY + 6, lineLeft, stripY - 14);
  line(toX(zoomEnd), mainY + 6, lineRight, stripY - 14);
  noStroke();
  fill(dotColor);
  circle(toX(current.value), mainY, 13);

  // label above the point, kept on the canvas
  textStyle(BOLD);
  textSize(15);
  const labelW = textWidth(current.label);
  textAlign(CENTER, BOTTOM);
  text(current.label, constrain(toX(current.value), x + labelW / 2, x + w - labelW / 2), mainY - 10);
  textStyle(NORMAL);

  // zoomed strip with ten equal divisions
  fill(INK);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  textSize(15);
  let zoomTitle = hovering ? 'Zoomed in 100 times' : 'Zoomed in 10 times (hover to zoom more)';
  textSize(15);
  if (textWidth(zoomTitle) > w) zoomTitle = hovering ? 'Zoomed in 100 times' : 'Zoomed in 10 times';
  textSize(fitSize(zoomTitle, w, 15, 11));
  // a small backing patch keeps the guide lines from running through the title
  noStroke();
  fill('aliceblue');
  rect(x - 2, stripY - 43, textWidth(zoomTitle) + 6, 21);
  fill(INK);
  text(zoomTitle, x, stripY - 40);
  textStyle(NORMAL);

  stroke(INK);
  strokeWeight(2);
  line(lineLeft, stripY, lineRight, stripY);
  strokeWeight(1);
  const decimals = hovering ? 2 : 1;
  const crowded = (lineRight - lineLeft) / 10 < (hovering ? 38 : 30);
  for (let i = 0; i <= 10; i++) {
    const tickValue = zoomStart + span * i / 10;
    const tx = zoomToX(tickValue);
    stroke(INK);
    line(tx, stripY - (i % 10 === 0 ? 10 : 6), tx, stripY + (i % 10 === 0 ? 10 : 6));
    if (!crowded || i % 5 === 0) {
      noStroke();
      fill(INK);
      textAlign(CENTER, TOP);
      textSize(12);
      text(tickValue.toFixed(i % 10 === 0 && !hovering ? 0 : decimals).replace('-', '−'), tx, stripY + 12);
    }
  }
  noStroke();
  fill(dotColor);
  circle(zoomToX(current.value), stripY, 13);
}

// A bar split into q equal parts with p of them shaded (rational numbers only).
function drawFractionBar(x, y, w) {
  noStroke();
  fill(INK);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  textSize(15);
  text('Fraction bar', x, y);
  const titleW = textWidth('Fraction bar');
  textStyle(NORMAL);

  // what to say beside the title, and whether there is a bar to draw
  let note;
  let showBar = false;
  if (!answered) {
    note = 'appears after you answer';
  } else if (!current.rational) {
    note = 'none: no equal parts land exactly on it';
  } else if (current.askFraction && !fractionDone) {
    note = 'appears after you write p/q';   // do not give the fraction away early
  } else if (current.d === 1) {
    note = 'not needed: ' + current.label + ' is a whole number';
  } else {
    const wholes = Math.floor(Math.abs(current.n) / current.d);
    const parts = Math.abs(current.n) % current.d;
    note = parts + ' of ' + current.d + ' equal parts';
    if (wholes > 0) note = wholes + (wholes === 1 ? ' whole and ' : ' wholes and ') + note;
    if (current.n < 0) note += ', left of 0';
    showBar = true;
  }

  // the note sits beside the title when there is room, otherwise below it
  const beside = w - titleW - 20 >= 190;
  const noteX = beside ? x + titleW + 20 : x;
  const noteY = beside ? y + 1 : y + 19;
  fill(MUTED);
  if (beside) {
    textSize(fitSize(note, w - titleW - 20, 14, 11));
    text(note, noteX, noteY);
  } else if (showBar) {
    textSize(fitSize(note, w, 13, 10));
    text(note, noteX, noteY);
  } else {
    drawWrapped(note, noteX, noteY, w, 12);   // no bar to draw, so the note may wrap
  }
  if (!showBar) return;

  const barY = beside ? y + 24 : y + 38;
  const barH = beside ? 26 : 20;
  const cellW = (w - 2) / current.d;
  const parts = Math.abs(current.n) % current.d;
  stroke(INK);
  strokeWeight(1);
  for (let i = 0; i < current.d; i++) {
    fill(i < parts ? RATIONAL_BLUE : 'white');
    rect(x + 1 + i * cellW, barY, cellW, barH);
  }
}

function drawExplanation(x, y, w, h) {
  stroke(answered ? themeColor() : 'silver');
  strokeWeight(1);
  fill('white');
  rect(x, y, w, h, 10);
  noStroke();

  const padX = x + 12;
  const roomW = w - 24;
  let cursorY = y + 10;

  fill(INK);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  textSize(16);
  text('Explanation', padX, cursorY);
  textStyle(NORMAL);
  cursorY += 26;

  if (!answered) {
    fill(MUTED);
    drawWrapped('Answer Yes or No first. Then press Show me why to see the reasoning one step at a time.',
      padX, cursorY, roomW, 15);
    return;
  }
  if (stepsShown === 0) {
    fill(MUTED);
    drawWrapped('Press Show me why to see the reasoning one step at a time.', padX, cursorY, roomW, 15);
    return;
  }

  // pick the largest text size at which every revealed step fits the panel
  const available = y + h - 8 - cursorY;
  const heightOf = (from, size) => {
    let total = 0;
    for (let i = from; i < stepsShown; i++) {
      total += wrappedHeight((i + 1) + '. ' + current.steps[i], roomW, size) + 5;
    }
    return total;
  };
  let size = 15;
  while (size > 11 && heightOf(0, size) > available) size -= 1;
  // on very narrow canvases even the smallest size may not fit every step:
  // keep the newest steps and drop the oldest
  let first = 0;
  while (first < stepsShown - 1 && heightOf(first, size) > available) first += 1;
  for (let i = first; i < stepsShown; i++) {
    fill(i === stepsShown - 1 ? INK : MUTED);
    cursorY += drawWrapped((i + 1) + '. ' + current.steps[i], padX, cursorY, roomW, size) + 5;
  }
}

// ---------- responsive sizing ----------

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
}

function updateCanvasSize() {
  const container = document.querySelector('main');
  if (container) {
    canvasWidth = container.offsetWidth;
  }
  if (typeof whyButton !== 'undefined') {
    // shorter button labels keep both control rows on one line on narrow screens
    const compact = canvasWidth < 560;
    if (compact !== compactLabels) {
      compactLabels = compact;
      yesButton.html(compact ? 'Yes, rational' : "Yes, it's rational");
      noButton.html(compact ? 'No, not rational' : "No, it's not rational");
      nextButton.html(compact ? 'Next' : 'Next Number');
      checkButton.html(compact ? 'Check' : 'Check Fraction');
      fractionLabel.html(compact ? 'p/q:' : 'Express as p/q:');
    }
  }
}
