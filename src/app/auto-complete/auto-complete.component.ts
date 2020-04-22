/**
 * 7.15 afternoon
 * https://www.tutorialspoint.com/angular_material7/angular_material7_autocomplete.htm
 */
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})

export class AutoCompleteComponent implements OnInit {

  title = 'materialApp';
  myControl = new FormControl();
  states;

  constructor() {
    this.loadStates();
  }

  // build list of states as map of key-value pairs
  loadStates() {
    const allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
         Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
         Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
         Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
         North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
         South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
         Wisconsin, Wyoming';
    this.states = allStates.split(/, +/g).map(function (state) {
      return {
        value: state.toUpperCase(),
        display: state
      };
    });
  }

  ngOnInit(): void {
  }


}
