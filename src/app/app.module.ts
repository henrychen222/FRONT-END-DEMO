import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionsComponent } from './selections/selections.component';
import { CollectionsApiComponent } from './collections-api/collections-api.component';
import { ChartComponent } from './chart/chart.component';
import { AnimationComponent } from './animation/animation.component';
import { SvgComponent } from './svg/svg.component';
import { DataJoinComponent } from './data-join/data-join.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionsComponent,
    CollectionsApiComponent,
    ChartComponent,
    AnimationComponent,
    SvgComponent,
    DataJoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
