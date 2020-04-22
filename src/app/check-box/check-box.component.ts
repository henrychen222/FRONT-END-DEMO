/**
 * 7.16 morning on road
 * https://www.tutorialspoint.com/angular_material7/angular_material7_checkbox.htm
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  title = 'materialApp';
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  constructor() {
  }

  ngOnInit() {

  }

}
