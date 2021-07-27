/**
 * 07/26/21 evening
 * https://www.tutorialspoint.com/d3js/d3js_selections.htm (use)
 * https://github.com/d3/d3-selection
 * https://bost.ocks.org/mike/selection/
 * https://www.d3indepth.com/selections/
 * https://observablehq.com/@d3/selection-join
 */

import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.selectionByTag();
    this.selectionByClassName();
    this.selectionById();
    this.addDomElement();
    this.setText();
    this.modifyElement();
    this.setStyleProperty();
    this.setClassAttribute();
    this.selectMultipleElements();
  }

  selectionByTag(): void {
    d3.select('div').text();
  }

  selectionByClassName(): void {
    d3.select('.myclass').text();
  }

  selectionById(): void {
    d3.select('#hello').text();
  }

  addDomElement(): void {
    d3.select('.myclass2').append('span');
  }

  setText(): void {
    d3.select('.myclass3').append('span').text('from D3.js');
    // d3.select('.myclass3').text('from D3.js');
  }

  modifyElement(): void {
    d3.select('.myclass4').html('Hello World! <span>wei_chen</span>');
    // d3.select('.myclass4').html('<span>wei_chen</span>');
  }

  setStyleProperty(): void {
    d3.select('.myclass5').style('color', 'red');
  }

  setClassAttribute(): void {
    d3.select('.myclass6').classed('myanotherclass', true); // add class
    d3.select('.myclass6').classed('myanotherclass', false); // remove class
    d3.select('.myclass6').classed('myanotherclass'); // check class
  }

  selectMultipleElements(): void {
    d3.selectAll('.myclass7').attr('style', 'color: purple');
  }
}
