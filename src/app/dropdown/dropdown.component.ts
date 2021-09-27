/**
 * 09/13/21 morning
 * https://github.com/IBM/carbon-components-angular/blob/master/src/dropdown/dropdown.stories.ts
 * https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  label = 'Date Picker Label';
  value = ['10/19/2019'];
  disabled = false;
  invalid = false;
  invalidText = 'This is not a validation text';
  warn = false;
  warnText = 'This is a warning';
  helperText = 'Optional helper text.';
  dropUp = false;
  items = [
    {content: 'one', selected: false},
    {content: 'two', selected: true},
    {content: 'three', selected: false},
    {content: 'four', selected: false}
  ];

  constructor() {
  }

  ngOnInit(): void {

  }

  selected(event: any) {

  }

  onClose(event: any) {

  }

}
