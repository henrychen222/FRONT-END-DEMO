/**
 * 10.27 evening
 * https://material.angular.io/components/chips/overview#chip-input
 */
import {Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";

export interface Fruit {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-chips2',
  templateUrl: './chips2.component.html',
  styleUrls: ['./chips2.component.css']
})
export class Chips2Component implements OnInit {

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }


  constructor() {
  }

  ngOnInit() {
  }

}
