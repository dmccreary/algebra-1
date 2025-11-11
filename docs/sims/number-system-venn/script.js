// Number Systems Hierarchy Diagram
// Using venn.js and D3.js

var sets = [
  {sets: ['R'], size: 150},
  {sets: ['Q'], size: 120},
  {sets: ['Z'], size: 90},
  {sets: ['W'], size: 70},
  {sets: ['N'], size: 50},
  {sets: ['I'], size: 30}, // Irrationals as distinct subset of R but not Q

  // Nesting relationships (subset = intersection)
  {sets: ['R', 'Q'], size: 120},
  {sets: ['Q', 'Z'], size: 90},
  {sets: ['Z', 'W'], size: 70},
  {sets: ['W', 'N'], size: 50},
  {sets: ['R', 'I'], size: 30}
];

// Pastel color scheme
var colorScheme = [
  {set: 'N', color: '#FFF9C4'},  // Light yellow
  {set: 'W', color: '#C8E6C9'},  // Light green
  {set: 'Z', color: '#BBDEFB'},  // Light blue
  {set: 'Q', color: '#E1BEE7'},  // Light purple
  {set: 'R', color: '#E0E0E0'},  // Light gray
  {set: 'I', color: '#FFCC80'}   // Orange
];

// Educational definitions
var definitions = {
  'N': 'Natural Numbers: {1, 2, 3, …}',
  'W': 'Whole Numbers: {0, 1, 2, 3, …}',
  'Z': 'Integers: {…, -2, -1, 0, 1, 2, …}',
  'Q': 'Rational Numbers: fractions p/q where q ≠ 0',
  'R': 'Real Numbers: all points on the number line',
  'I': 'Irrational Numbers: cannot be written as p/q (e.g., √2, π, e)',
  'N,W': 'Every natural number is also a whole number (N ⊂ W)',
  'W,Z': 'Whole numbers are part of the integers (W ⊂ Z)',
  'Z,Q': 'Integers are part of the rationals (Z ⊂ Q)',
  'Q,R': 'Rationals are part of the reals (Q ⊂ R)',
  'R,I': 'Irrational numbers are real but not rational'
};

function getDefinition(sets) {
  var key = sets.sort().join(',');
  return definitions[key] || sets.join(" ∩ ");
}

function initVennDiagram() {
  var chart = venn.VennDiagram()
    .width(600)
    .height(450);

  var div = d3.select("#venn").datum(sets).call(chart);

  // Apply color scheme
  div.selectAll("g").select("path")
    .style("fill", function(d) {
      for (let c of colorScheme) if (d.sets.includes(c.set)) return c.color;
      return '#ccc';
    })
    .style("fill-opacity", 0.6)
    .style("stroke", "#333")
    .style("stroke-width", "2px");

  // Label styling
  div.selectAll("text")
    .style("fill", "#222")
    .style("font-size", "16px")
    .style("font-weight", "bold");

  // Tooltip
  var tooltip = d3.select("body").append("div").attr("class", "venntooltip");

  div.selectAll("g")
    .on("mouseover", function(event, d) {
      venn.sortAreas(div, d);
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip.html(getDefinition(d.sets))
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
      d3.select(this).select("path")
        .style("fill-opacity", 0.9);
    })
    .on("mouseout", function(event, d) {
      tooltip.transition().duration(200).style("opacity", 0);
      d3.select(this).select("path").style("fill-opacity", 0.6);
    });

  makeResponsive();
}

function makeResponsive() {
  var svg = d3.select("#venn svg");
  if (!svg.empty()) {
    var w = parseInt(svg.attr("width")),
        h = parseInt(svg.attr("height")),
        aspect = w / h;
    svg.attr("viewBox", "0 0 " + w + " " + h)
       .attr("preserveAspectRatio", "xMidYMid meet")
       .attr("width", "100%")
       .attr("height", "100%");
    d3.select(window).on("resize", function() {
      var width = document.getElementById("venn").clientWidth;
      svg.attr("width", width).attr("height", width / aspect);
    });
  }
}

document.addEventListener('DOMContentLoaded', initVennDiagram);
