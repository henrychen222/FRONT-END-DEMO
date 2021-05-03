import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionComponent} from './accordion/accordion.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ButtonComponent} from './button/button.component';
import {TilesComponent} from './tiles/tiles.component';

const routes: Routes = [
  {path: 'accordion', component: AccordionComponent},
  {path: 'breadcrumb', component: BreadcrumbComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'tiles', component: TilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
