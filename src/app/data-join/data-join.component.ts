/**
 * 08/20/21 afternoon
 * https://www.tutorialspoint.com/d3js/d3js_data_join.htm
 */
import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-data-join',
  templateUrl: './data-join.component.html',
  styleUrls: ['./data-join.component.css']
})
export class DataJoinComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // d3.select('#list').selectAll('li').data([10, 20, 30, 25, 15]).text(d => d);

    d3.select('#list').selectAll('li').data([10, 20, 30, 25, 15]).text((d) => {
      return 'This is pre-existing element and the value is ' + d;
    }).enter().append('li').text((d) => {
      return 'This is dynamically created element and the value is ' + d;
    });
  }

  remove() {
    d3.selectAll('li')
      .data([10, 20, 30, 15])
      .exit()
      .remove();
  }

}
