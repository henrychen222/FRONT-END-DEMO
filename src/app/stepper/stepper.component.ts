/**
 *  10.25 night
 *  https://www.tutorialspoint.com/angular_material7/angular_material7_stepper.htm
 *  https://material.angular.io/components/stepper/overview
 */
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    })

    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    })

  }

}
