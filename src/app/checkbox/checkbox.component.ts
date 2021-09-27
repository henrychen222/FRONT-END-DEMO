/**
 * 09/10/21 night
 * https://github.com/IBM/carbon-components-angular/blob/master/src/checkbox/checkbox.stories.ts
 * https://www.carbondesignsystem.com/components/checkbox/usage
 */
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  label = ['Label text', 'Checkbox'];

  hideLabel = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(event: any) {

  }

  onIndeterminateChange(event: any) {

  }
}
