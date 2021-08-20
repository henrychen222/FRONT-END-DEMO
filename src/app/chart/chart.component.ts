/**
 * 08/20/21 afternoon
 * https://www.tutorialspoint.com/d3js/d3js_drawing_charts.htm
 */
import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data = [10, 5, 12, 15];

  constructor() {
  }

  ngOnInit(): void {
    this.barChart();
    this.circleChart();
  }

  barChart() {
    const width = 300, scaleFactor = 20, barHeight = 30;

    const graph = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', barHeight * this.data.length);

    const bar = graph.selectAll('g').data(this.data).enter().append('g')
      .attr('transform', (d, i) => {
        return 'translate(0,' + i * barHeight + ')';
      });

    bar.append('rect').attr('width', (d) => {
      return d * scaleFactor;
    }).attr('height', barHeight - 1);

    bar.append('text').attr('x', (d) => {
      return (d * scaleFactor);
    })
      .attr('y', barHeight / 2)
      .attr('dy', '.35em')
      .text(d => d);
  }

  circleChart() {
    const width = 400, height = 400, data = [10, 20, 30], colors = ['green', 'purple', 'yellow'];
    const svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.selectAll('g').data(data).enter().append('g')
      .attr('transform', (d, i) => {
        return 'translate(0,0)';
      });

    g.append('circle').attr('cx', (d, i) => {
      return i * 75 + 50;
    }).attr('cy', (d, i) => {
      return 75;
    }).attr('r', (d) => {
      return d * 1.5;
    }).attr('fill', (d, i) => {
      return colors[i];
    });

    g.append('text').attr('x', (d, i) => {
      return i * 75 + 25;
    }).attr('y', 80)
      .attr('stroke', 'teal')
      .attr('font-size', '10px')
      .attr('font-family', 'sans-serif')
      .text(d => d);
  }

}
