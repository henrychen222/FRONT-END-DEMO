/**
 * 09/10/21 night
 * https://github.com/IBM/carbon-components-angular/blob/master/src/code-snippet/code-snippet.stories.ts
 * https://www.carbondesignsystem.com/components/code-snippet/usage/
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit {

  singleCode = "test";

  constructor() { }

  ngOnInit(): void {
  }

}
