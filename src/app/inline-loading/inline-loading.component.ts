/**
 * 09/26/21 night
 * https://angular.carbondesignsystem.com/?path=/story/components-inline-loading--basic
 * https://github.com/IBM/carbon-components-angular/blob/master/src/inline-loading/inline-loading.stories.ts
 *
 * https://angular.carbondesignsystem.com/?path=/story/components-button--basic (fix ibmButton)
 */
import {Component, OnInit} from '@angular/core';
import {InlineLoadingState} from '../enums/inline-loading-state.enums';

@Component({
  selector: 'app-inline-loading',
  templateUrl: './inline-loading.component.html',
  styleUrls: ['./inline-loading.component.scss']
})
export class InlineLoadingComponent implements OnInit {

  state = InlineLoadingState.Active;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleState() {
    switch (this.state) {
      case InlineLoadingState.Inactive:
        this.state = InlineLoadingState.Active;
        break;
      case InlineLoadingState.Active:
        this.state = InlineLoadingState.Finished;
        break;
      case InlineLoadingState.Finished:
        this.state = InlineLoadingState.Error;
        break;
      case InlineLoadingState.Error:
        this.state = InlineLoadingState.Inactive;
        break;
    }
  }

  onSuccess(event: any) {

  }

}
