import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionComponent} from './accordion/accordion.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ButtonComponent} from './button/button.component';

const routes: Routes = [
  {path: 'accordion', component: AccordionComponent},
  {path: 'breadcrumb', component: BreadcrumbComponent},
  {path: 'button', component: ButtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
