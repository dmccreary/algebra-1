// Prime Factorization Tree Builder MicroSim
// Uses vis-network for interactive tree visualization

let nodes, edges, network;
let currentNumber = 24;
let nodeIdCounter = 1;
let factorizationComplete = false;
let selectedNode = null;

// Prime checking function
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

// Get prime factorization
function getPrimeFactorization(n) {
    const factors = {};
    let num = n;
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors[i] = (factors[i] || 0) + 1;
            num /= i;
        }
    }
    return factors;
}

// Format factorization as string
function formatFactorization(factors) {
    const parts = [];
    for (const [prime, count] of Object.entries(factors)) {
        if (count === 1) {
            parts.push(prime);
        } else {
            parts.push(`${prime}^${count}`);
        }
    }
    return parts.join(' × ');
}

// Initialize network
function initNetwork() {
    const container = document.getElementById('tree-network');

    nodes = new vis.DataSet([
        {
            id: 1,
            label: currentNumber.toString(),
            value: currentNumber,
            level: 0,
            prime: isPrime(currentNumber),
            color: isPrime(currentNumber) ?
                { background: '#FFD700', border: '#FFA500' } :
                { background: '#4A90E2', border: '#2E5C8A' }
        }
    ]);

    edges = new vis.DataSet([]);

    const data = { nodes: nodes, edges: edges };

    const options = {
        layout: {
            hierarchical: {
                direction: 'UD',
                sortMethod: 'directed',
                levelSeparation: 100,
                nodeSpacing: 80
            }
        },
        nodes: {
            shape: 'circle',
            size: 30,
            font: {
                size: 18,
                color: '#000000',
                face: 'Arial'
            },
            borderWidth: 3,
            shadow: true
        },
        edges: {
            width: 2,
            color: { color: '#666666' },
            smooth: {
                type: 'cubicBezier',
                forceDirection: 'vertical'
            }
        },
        interaction: {
            hover: true,
            selectConnectedEdges: false
        },
        physics: {
            enabled: false
        }
    };

    network = new vis.Network(container, data, options);

    // Handle node clicks
    network.on('click', function(params) {
        if (params.nodes.length > 0) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);

            if (!node.prime && node.value > 1) {
                selectedNode = nodeId;
                showFactorInput(node);
            }
        }
    });

    // Update display
    updatePrimeList();
    checkCompletion();
}

// Show factor input dialog
function showFactorInput(node) {
    document.getElementById('selected-number').textContent = node.value;
    document.getElementById('factor-input-section').style.display = 'block';
    document.getElementById('factor1').value = '';
    document.getElementById('factor2').value = '';
    document.getElementById('factor1').focus();
    document.getElementById('feedback').textContent = '';
}

// Submit factors
function submitFactors() {
    const factor1 = parseInt(document.getElementById('factor1').value);
    const factor2 = parseInt(document.getElementById('factor2').value);
    const node = nodes.get(selectedNode);

    if (isNaN(factor1) || isNaN(factor2)) {
        showFeedback('Please enter valid numbers', 'error');
        return;
    }

    if (factor1 * factor2 !== node.value) {
        showFeedback(`${factor1} × ${factor2} = ${factor1 * factor2}, not ${node.value}`, 'error');
        shakeNode(selectedNode);
        return;
    }

    if (factor1 === 1 || factor2 === 1) {
        showFeedback('Factors must be greater than 1', 'error');
        return;
    }

    // Add child nodes
    addFactorNodes(selectedNode, factor1, factor2);
    document.getElementById('factor-input-section').style.display = 'none';
    showFeedback('Correct! Factors added.', 'success');
    checkCompletion();
}

// Add factor nodes to tree
function addFactorNodes(parentId, factor1, factor2) {
    const parentNode = nodes.get(parentId);
    const newLevel = parentNode.level + 1;

    // Create child nodes
    const node1Id = ++nodeIdCounter;
    const node2Id = ++nodeIdCounter;

    const isPrime1 = isPrime(factor1);
    const isPrime2 = isPrime(factor2);

    nodes.add([
        {
            id: node1Id,
            label: factor1.toString(),
            value: factor1,
            level: newLevel,
            prime: isPrime1,
            color: isPrime1 ?
                { background: '#90EE90', border: '#228B22' } :
                { background: '#4A90E2', border: '#2E5C8A' }
        },
        {
            id: node2Id,
            label: factor2.toString(),
            value: factor2,
            level: newLevel,
            prime: isPrime2,
            color: isPrime2 ?
                { background: '#90EE90', border: '#228B22' } :
                { background: '#4A90E2', border: '#2E5C8A' }
        }
    ]);

    // Create edges
    edges.add([
        { from: parentId, to: node1Id },
        { from: parentId, to: node2Id }
    ]);

    // Update parent node color to gray
    nodes.update({
        id: parentId,
        color: { background: '#CCCCCC', border: '#999999' }
    });
}

// Show feedback message
function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = type;

    if (type === 'success') {
        setTimeout(() => {
            feedback.textContent = '';
            feedback.className = '';
        }, 2000);
    }
}

// Shake animation for incorrect answer
function shakeNode(nodeId) {
    const positions = network.getPositions([nodeId]);
    const pos = positions[nodeId];
    const originalX = pos.x;

    let offset = 10;
    let count = 0;
    const shakeInterval = setInterval(() => {
        network.moveNode(nodeId, originalX + offset, pos.y);
        offset = -offset;
        count++;
        if (count >= 6) {
            clearInterval(shakeInterval);
            network.moveNode(nodeId, originalX, pos.y);
        }
    }, 50);
}

// Check if factorization is complete
function checkCompletion() {
    const allNodes = nodes.get();
    factorizationComplete = allNodes.every(node => node.prime || node.value === 1);

    if (factorizationComplete) {
        showCompletion();
    }
}

// Show completion message
function showCompletion() {
    const factors = getPrimeFactorization(currentNumber);
    const formatted = formatFactorization(factors);

    document.getElementById('result-number').textContent = currentNumber;
    document.getElementById('result-factorization').textContent = formatted;
    document.getElementById('completion-section').style.display = 'block';

    // Celebration animation
    celebrateCompletion();
}

// Celebration animation
function celebrateCompletion() {
    const primeNodes = nodes.get({
        filter: node => node.prime
    });

    primeNodes.forEach(node => {
        nodes.update({
            id: node.id,
            color: { background: '#FFD700', border: '#FFA500' }
        });
    });
}

// Start new problem
function startNewProblem() {
    const input = document.getElementById('number-input').value;
    const num = parseInt(input);

    if (isNaN(num) || num < 4 || num > 200) {
        alert('Please enter a number between 4 and 200');
        return;
    }

    currentNumber = num;
    nodeIdCounter = 1;
    factorizationComplete = false;
    document.getElementById('completion-section').style.display = 'none';
    document.getElementById('factor-input-section').style.display = 'none';
    initNetwork();
}

// Generate random number
function randomNumber() {
    const difficulty = document.getElementById('difficulty').value;
    let min, max;

    switch(difficulty) {
        case 'easy':
            min = 4; max = 50;
            break;
        case 'medium':
            min = 50; max = 100;
            break;
        case 'hard':
            min = 100; max = 200;
            break;
    }

    currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    // Ensure it's not prime
    while (isPrime(currentNumber)) {
        currentNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.getElementById('number-input').value = currentNumber;
    startNewProblem();
}

// Give hint
function giveHint() {
    const compositeNodes = nodes.get({
        filter: node => !node.prime && node.value > 1 && !hasChildren(node.id)
    });

    if (compositeNodes.length === 0) {
        alert('No composite numbers to factor!');
        return;
    }

    const hintNode = compositeNodes[0];
    network.selectNodes([hintNode.id]);

    // Show divisibility hint
    let hint = `Try factoring ${hintNode.value}. `;
    if (hintNode.value % 2 === 0) {
        hint += 'It is divisible by 2 (even number).';
    } else if (hintNode.value % 3 === 0) {
        hint += 'It is divisible by 3.';
    } else if (hintNode.value % 5 === 0) {
        hint += 'It is divisible by 5.';
    }

    showFeedback(hint, 'hint');
}

// Check if node has children
function hasChildren(nodeId) {
    const edgesFromNode = edges.get({
        filter: edge => edge.from === nodeId
    });
    return edgesFromNode.length > 0;
}

// Show answer
function showAnswer() {
    if (!confirm('Are you sure you want to see the complete factorization?')) {
        return;
    }

    // Clear and rebuild with complete factorization
    const factors = getPrimeFactorization(currentNumber);
    buildCompleteTree(currentNumber, 1, 0);
    checkCompletion();
}

// Build complete tree recursively
function buildCompleteTree(num, nodeId, level) {
    if (isPrime(num) || num === 1) {
        return;
    }

    // Find smallest prime factor
    let factor = 2;
    while (num % factor !== 0) {
        factor++;
    }

    const otherFactor = num / factor;

    const node1Id = ++nodeIdCounter;
    const node2Id = ++nodeIdCounter;

    nodes.add([
        {
            id: node1Id,
            label: factor.toString(),
            value: factor,
            level: level + 1,
            prime: isPrime(factor),
            color: isPrime(factor) ?
                { background: '#90EE90', border: '#228B22' } :
                { background: '#4A90E2', border: '#2E5C8A' }
        },
        {
            id: node2Id,
            label: otherFactor.toString(),
            value: otherFactor,
            level: level + 1,
            prime: isPrime(otherFactor),
            color: isPrime(otherFactor) ?
                { background: '#90EE90', border: '#228B22' } :
                { background: '#4A90E2', border: '#2E5C8A' }
        }
    ]);

    edges.add([
        { from: nodeId, to: node1Id },
        { from: nodeId, to: node2Id }
    ]);

    nodes.update({
        id: nodeId,
        color: { background: '#CCCCCC', border: '#999999' }
    });

    // Recursively factor non-prime children
    if (!isPrime(factor)) {
        buildCompleteTree(factor, node1Id, level + 1);
    }
    if (!isPrime(otherFactor)) {
        buildCompleteTree(otherFactor, node2Id, level + 1);
    }
}

// Update prime number reference list
function updatePrimeList() {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    document.getElementById('prime-list').textContent = primes.join(', ');
}

// Handle Enter key in factor inputs
document.addEventListener('DOMContentLoaded', function() {
    const factor1 = document.getElementById('factor1');
    const factor2 = document.getElementById('factor2');

    factor1.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            factor2.focus();
        }
    });

    factor2.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitFactors();
        }
    });

    // Initialize with default number
    initNetwork();
});
