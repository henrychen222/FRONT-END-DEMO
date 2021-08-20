import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectionsComponent} from './selections/selections.component';
import {ChartComponent} from './chart/chart.component';
import {AnimationComponent} from './animation/animation.component';
import {SvgComponent} from './svg/svg.component';
import {DataJoinComponent} from './data-join/data-join.component';

const routes: Routes = [
  {path: 'selections', component: SelectionsComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'svg', component: SvgComponent},
  {path: 'data-join', component: DataJoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
