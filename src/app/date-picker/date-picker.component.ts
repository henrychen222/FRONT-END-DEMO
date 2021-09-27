/**
 * 09/13/21 morning
 * https://github.com/IBM/carbon-components-angular/blob/master/src/datepicker/datepicker.stories.ts
 * https://angular.carbondesignsystem.com/?path=/story/components-date-picker--single
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  label = 'Date Picker Label';
  placeholder = 'mm/dd/yyyy';
  language = 'en';
  value = ['10/19/2019'];
  disabled = false;
  invalid = false;
  invalidText = 'Invalid date format';
  warn = false;
  warnText = 'This is a warning';
  dateFormat = 'm/d/Y';

  constructor() {
  }

  ngOnInit(): void {
  }

  valueChange(event: any) {

  }

}
