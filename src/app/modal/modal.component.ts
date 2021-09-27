/**
 * 09/26/21 night
 * https://github.com/IBM/carbon-components-angular/blob/master/src/modal/modal.stories.ts
 * https://angular.carbondesignsystem.com/?path=/story/components-modal--basic
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalText = 'modalText';
  constructor() { }

  ngOnInit(): void {
  }

}
