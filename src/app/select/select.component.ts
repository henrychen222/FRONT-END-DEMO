/**
 * 10.24 night
 * https://www.tutorialspoint.com/angular_material7/angular_material7_select.htm
 */
import {Component, OnInit} from '@angular/core';

export interface Food {
  value: string
  display: string
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selectedValue: string
  foods: Food[] = [
    {value: 'steak', display: 'Steak'},
    {value: 'pizza', display: 'Pizza'},
    {value: 'tacos', display: 'Tacos'}
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
