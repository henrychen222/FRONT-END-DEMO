/**
 * 10.24 night
 * https://www.tutorialspoint.com/angular_material7/angular_material7_radio_button.htm
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  favoriteSeason: string
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn']

  constructor() {
  }

  ngOnInit() {
  }

}
