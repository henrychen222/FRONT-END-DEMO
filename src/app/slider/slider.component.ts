/**
 * 10.24 night
 * https://www.tutorialspoint.com/angular_material7/angular_material7_slider.htm
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  disabled = false
  invert = false
  thumbLabel = false;
  value = 0;
  vertical = false;

  constructor() {
  }

  ngOnInit() {
  }

}
