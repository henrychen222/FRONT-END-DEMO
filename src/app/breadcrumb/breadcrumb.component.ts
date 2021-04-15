/**
 * 04/01/21 afternoon
 * https://github.com/IBM/carbon-components-angular/blob/master/src/breadcrumb/breadcrumb.stories.ts
 * https://www.carbondesignsystem.com/components/breadcrumb/usage/
 */

import {Component, OnInit, TemplateRef} from '@angular/core';
import {BreadcrumbItem} from 'carbon-components-angular';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  noTrailingSlash = true;
  threshold = 4;
  itemCount = 10;
  content = 'Content for the items';
  templateContent = ['Content for the template', 'Hello'];
  data: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  createBreadcrumbItems(itemCount: number, content: string): Array<BreadcrumbItem> {
     const a = Array(itemCount).fill(content);
     this.data.push(a);
     return a;
  }

  withTemplate(breadcrumbTemplate: any, data: any[]): any {

  }

}
