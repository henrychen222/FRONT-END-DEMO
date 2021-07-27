import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectionsComponent} from './selections/selections.component';

const routes: Routes = [
  {path: 'selections', component: SelectionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
