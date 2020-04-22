import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

// Forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Angular Material all dependencies
import {DemoMaterialModule} from './material-module';
// Auto Complete
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { MenuComponent } from './menu/menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { TreeComponent } from './tree/tree.component';
import { Tree2Component } from './tree2/tree2.component';
import { Tree3Component } from './tree3/tree3.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { Chips2Component } from './chips2/chips2.component';
import { Chips3Component } from './chips3/chips3.component';
import { IconComponent } from './icon/icon.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { Tooltip2Component } from './tooltip2/tooltip2.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { SortHeader2Component } from './sort-header2/sort-header2.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';


@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    CheckBoxComponent,
    DatePickerComponent,
    FormFieldComponent,
    InputComponent,
    RadioButtonComponent,
    SelectComponent,
    SliderComponent,
    SlideToggleComponent,
    MenuComponent,
    SideNavComponent,
    ToolbarComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    StepperComponent,
    TabsComponent,
    TreeComponent,
    Tree2Component,
    Tree3Component,
    ButtonComponent,
    ButtonToggleComponent,
    BadgeComponent,
    ChipsComponent,
    Chips2Component,
    Chips3Component,
    IconComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    RipplesComponent,
    SnackBarComponent,
    TooltipComponent,
    Tooltip2Component,
    PaginatorComponent,
    SortHeaderComponent,
    SortHeader2Component,
    TableComponent,
    Table2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
