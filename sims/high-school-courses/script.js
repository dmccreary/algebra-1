fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById('network');
    const nodes = new vis.DataSet(data.nodes);
    const edges = new vis.DataSet(data.edges);
    const networkData = { nodes, edges };
    const options = {
      layout: {
        hierarchical: {
          enabled: true,
          direction: 'LR',
          sortMethod: 'hubsize',
          levelSeparation: 250,
          nodeSpacing: 50
        }
      },
      physics: { enabled: false },
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
    new vis.Network(container, networkData, options);
  })
  .catch((err) => console.error('Error loading data.json:', err));