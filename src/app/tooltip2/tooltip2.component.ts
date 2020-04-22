import {Component, OnInit, ViewEncapsulation} from '@angular/core';

/**
 * @title Tooltip that can have a custom class applied.
 */
@Component({
  selector: 'app-tooltip2',
  templateUrl: './tooltip2.component.html',
  styleUrls: ['./tooltip2.component.css'],
  // Need to remove view encapsulation so that the custom tooltip style defined in
  // `tooltip-custom-class-example.css` will not be scoped to this component's view.
  encapsulation: ViewEncapsulation.None
})
export class Tooltip2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
