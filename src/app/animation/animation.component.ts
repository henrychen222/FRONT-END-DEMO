/**
 * 08/20/21 afternoon
 * https://www.tutorialspoint.com/d3js/d3js_animation.htm
 */
import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    d3.select('body').style('background-color', 'pink');
    d3.selectAll("h1").transition().style("color","green").duration(5000);
    d3.selectAll("h2").transition().style("color","rgb(0,150,120)").duration(5000);
    d3.selectAll("h3").transition().style("font-size","28px").delay(2000).duration(2000);
  }

}
