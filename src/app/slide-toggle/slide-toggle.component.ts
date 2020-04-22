/**
 * 10.24 night
 * https://www.tutorialspoint.com/angular_material7/angular_material7_slider_toggle.htm
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css']
})
export class SlideToggleComponent implements OnInit {

  disabled = false
  checked = false

  constructor() { }

  ngOnInit() {
  }

}
