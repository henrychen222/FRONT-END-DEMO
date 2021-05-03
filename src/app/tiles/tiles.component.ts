/**
 * 04/29/21 evening
 * https://github.com/IBM/carbon-components-angular/blob/master/src/tiles/tiles.stories.ts
 * https://www.carbondesignsystem.com/components/tile/usage/
 */

import {Component, OnInit} from '@angular/core';
import {TileSelection} from 'carbon-components-angular';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  selected($event: TileSelection): void {

  }

}
