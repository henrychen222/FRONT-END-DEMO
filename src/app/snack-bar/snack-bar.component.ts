import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openSnackBar2(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
