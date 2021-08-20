/**
 * 08/20/21 afternoon
 * https://www.tutorialspoint.com/d3js/d3js_introduction_to_svg.htm
 */
import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})
export class SvgComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.line();
    this.rectangle();
    this.circle();
    this.ellipse();
  }

  line() {
    const width = 300;
    const height = 300;
    const svg = d3.select('#svgcontainer_line').append('svg')
      .attr('width', width)
      .attr('height', height);
    svg.append('line')
      .attr('x1', 100)
      .attr('y1', 100)
      .attr('x2', 200)
      .attr('y2', 200)
      .style('stroke', 'rgb(255,0,0)')
      .style('stroke-width', 2);
  }

  rectangle() {
    const width = 300;
    const height = 300;

    const svg = d3.select('#svgcontainer_rectangle').append('svg')
      .attr('width', width)
      .attr('height', height);

    svg.append('rect')
      .attr('x', 20)
      .attr('y', 20)
      .attr('width', 200)
      .attr('height', 100)
      .attr('fill', 'green');
  }

  circle() {
    const width = 300;
    const height = 300;

    const svg = d3.select('#svgcontainer_circle').append('svg')
      .attr('width', width)
      .attr('height', height);

    svg.append('circle')
      .attr('cx', 200)
      .attr('cy', 50)
      .attr('r', 20)
      .attr('fill', 'green');
  }

  ellipse() {
    const width = 300;
    const height = 300;
    const svg = d3.select('#svgcontainer_ellipse').append('svg')
      .attr('width', width)
      .attr('height', height);

    svg.append('ellipse')
      .attr('cx', 200)
      .attr('cy', 50)
      .attr('rx', 100)
      .attr('ry', 50)
      .attr('fill', 'green');
  }
}
