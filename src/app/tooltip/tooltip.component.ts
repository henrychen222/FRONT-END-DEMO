import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnInit {

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);

  disabled = new FormControl(false);

  message = new FormControl('Info about the action');

  constructor() { }

  ngOnInit() {
  }

}
