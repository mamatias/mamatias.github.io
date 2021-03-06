const draw = d3.select('.wrapper');

const svg = draw.append('svg')
                .attr('width',250).attr('height', 250)
                .attr('id', 'root-canvas');

svg.append('circle')
    .attr('id', 'circle1')
    .attr('cx', 250/2).attr('cy', 250/2).attr('r',250/2)
    .attr('fill', 'red');

svg.append('rect')
    .attr('id', 'rect1')
    .attr('width', 100).attr('height', 70)
    .attr('fill', '#00888844');