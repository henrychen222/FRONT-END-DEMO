/**
 * 7.16 morning on road   10.24 night
 * https://www.tutorialspoint.com/angular_material7/angular_material7_input.htm
 */
import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  constructor() {
  }

  ngOnInit() {
  }

}
