let network;

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById('network');

    // Calculate out-degree (number of outgoing edges) for each node
    const outDegree = {};
    data.nodes.forEach(node => {
      outDegree[node.id] = 0;
    });
    data.edges.forEach(edge => {
      outDegree[edge.from]++;
    });

    // Add size to nodes based on out-degree
    const nodesWithSize = data.nodes.map(node => {
      const degree = outDegree[node.id];

      // Scale font size and margin based on out-degree
      const fontSize = 12 + (degree * 2);
      const margin = 6 + (degree * 4);

      return {
        ...node,
        font: { size: fontSize, face: 'system-ui' },
        margin: margin,
        widthConstraint: { minimum: 80 + (degree * 3) }
      };
    });

    const nodes = new vis.DataSet(nodesWithSize);
    const edges = new vis.DataSet(data.edges);
    const networkData = { nodes, edges };

    function getOptions(layoutType) {
      const baseOptions = {
        edges: {
          arrows: { to: { enabled: true, scaleFactor: 0.6 } },
          smooth: { type: 'cubicBezier', roundness: 0.4 }
        },
        nodes: {
          shape: 'box',
          margin: 6,
          font: { face: 'system-ui', size: 12 },
          color: {
            background: '#e8f0ff',
            border: '#4a7dff',
            highlight: { background: '#fff7d6', border: '#ffb100' }
          },
          borderWidth: 1
        },
        interaction: {
          hover: true,
          tooltipDelay: 120,
          navigationButtons: true,
          keyboard: true
        }
      };

      if (layoutType === 'hierarchical') {
        return {
          ...baseOptions,
          layout: {
            hierarchical: {
              enabled: true,
              direction: 'LR',
              sortMethod: 'hubsize',
              levelSeparation: 250,
              nodeSpacing: 50
            }
          },
          physics: { enabled: false }
        };
      } else {
        return {
          ...baseOptions,
          layout: {
            hierarchical: { enabled: false }
          },
          physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
              gravitationalConstant: -50,
              centralGravity: 0.01,
              springLength: 150,
              springConstant: 0.05,
              avoidOverlap: 1
            },
            stabilization: {
              enabled: true,
              iterations: 200,
              updateInterval: 25
            },
            adaptiveTimestep: true
          }
        };
      }
    }

    network = new vis.Network(container, networkData, getOptions('hierarchical'));

    // Add event listeners for layout switching
    const radioButtons = document.querySelectorAll('input[name="layout"]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const layoutType = e.target.value;

        // Destroy and recreate the network to properly reset positions
        if (network) {
          network.destroy();
        }

        network = new vis.Network(container, networkData, getOptions(layoutType));

        // For force-directed, wait for stabilization then fit and stop physics
        if (layoutType === 'forceDirected') {
          network.once('stabilizationIterationsDone', () => {
            network.setOptions({ physics: { enabled: false } });
            network.fit();
          });
        } else {
          network.fit();
        }
      });
    });
  })
  .catch((err) => console.error('Error loading data.json:', err));