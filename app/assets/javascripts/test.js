





var nums = [80, 53, 125, 200, 28, 97];

    var svg = d3.select('body').append('svg')
      .attr('height', 200)
      .attr('width', 200)

    var bars = svg.selectAll('rect')
      .data(nums);

    bars.enter().append('rect');



var bars = d3.selectAll('rect')
    .attr('width', 20)
    .attr('height', 20);



bars.attr('x', function(d, i) {
  return 30*i;
});

bars.attr('height', function(d, i) {
  return d;
});


bars.attr('y', function(d, i) {
  return 200 - d;
});





