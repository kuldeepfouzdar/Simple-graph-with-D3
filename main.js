function Chart(width, height) {
  this.width = width;
  this.height = height;
  this.drawGrid();
}

Chart.prototype.drawGrid = function() {
  this.svgContainer = d3.select("div")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height);
  var gridData = this.getGridData(10);
  var lines = this.svgContainer.selectAll('line')
    .data(gridData)
    .enter()
    .append('line');
  var lineAttributes = lines.attr("x1", function(d) {return d.x1})
    .attr("x2", function(d) {return d.x2})
    .attr("y1", function(d) {return d.y1})
    .attr("y2", function(d) {return d.y2})
    .attr("stroke", "#eee")
    .attr("stroke-width", "1px");
}

Chart.prototype.getGridData = function(lineSpace) {
  var gridData = [];
  for (var i=0; i*lineSpace <= this.width; i++) {
    var Obj = { x1: i*lineSpace, y1: 0, x2: i*lineSpace, y2: this.height };
    gridData.push(Obj);
  }
  for (var i=0; i*lineSpace <= this.height; i++) {
    var Obj = { x1: 0, y1: i*lineSpace, x2: this.width, y2: i*lineSpace };
    gridData.push(Obj);
  }
  return gridData;
}

var chart = new Chart(900, 500);
