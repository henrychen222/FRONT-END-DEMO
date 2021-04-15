/**
 * 04/13/21 evening
 * https://github.com/IBM/carbon-components-angular/blob/master/src/button/button.stories.ts
 * https://www.carbondesignsystem.com/components/button/usage
 */

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  ibmButtonA = ['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'danger--primary'];
  sizeA = ['normal', 'sm', 'field'];
  ibmButton: any = this.ibmButtonA[0];
  size: any = this.sizeA[0];

  assistiveTextPlacementA = ['top', 'bottom', 'left', 'right'];
  assistiveTextAlignmentA = ['center', 'start', 'end'];
  assistiveTextPlacement: any = this.assistiveTextPlacementA[0];
  assistiveTextAlignment: any = this.assistiveTextAlignmentA[0];

  constructor() {
  }

  ngOnInit(): void {
  }

}
