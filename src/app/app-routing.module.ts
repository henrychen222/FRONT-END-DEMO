import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {CheckBoxComponent} from './check-box/check-box.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {FormFieldComponent} from './form-field/form-field.component';
import {InputComponent} from "./input/input.component";
import {SelectComponent} from "./select/select.component";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {SliderComponent} from "./slider/slider.component";
import {SlideToggleComponent} from "./slide-toggle/slide-toggle.component";
import {MenuComponent} from "./menu/menu.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {CardComponent} from "./card/card.component";
import {DividerComponent} from "./divider/divider.component";
import {ExpansionPanelComponent} from "./expansion-panel/expansion-panel.component";
import {GridListComponent} from "./grid-list/grid-list.component";
import {ListComponent} from "./list/list.component";
import {StepperComponent} from "./stepper/stepper.component";
import {TabsComponent} from "./tabs/tabs.component";
import {TreeComponent} from "./tree/tree.component";
import {Tree2Component} from "./tree2/tree2.component";
import {Tree3Component} from "./tree3/tree3.component";
import {ButtonComponent} from "./button/button.component";
import {ButtonToggleComponent} from "./button-toggle/button-toggle.component";
import {BadgeComponent} from "./badge/badge.component";
import {ChipsComponent} from "./chips/chips.component";
import {Chips2Component} from "./chips2/chips2.component";
import {Chips3Component} from "./chips3/chips3.component";
import {IconComponent} from "./icon/icon.component";
import {ProgressSpinnerComponent} from "./progress-spinner/progress-spinner.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {RipplesComponent} from "./ripples/ripples.component";
import {SnackBarComponent} from "./snack-bar/snack-bar.component";
import {TooltipComponent} from "./tooltip/tooltip.component";
import {Tooltip2Component} from "./tooltip2/tooltip2.component";
import {PaginatorComponent} from "./paginator/paginator.component";
import {SortHeaderComponent} from "./sort-header/sort-header.component";
import {SortHeader2Component} from "./sort-header2/sort-header2.component";
import {TableComponent} from "./table/table.component";
import {Table2Component} from "./table2/table2.component";

const routes: Routes = [
  {path: 'autocomplete', component: AutoCompleteComponent},
  {path: 'checkbox', component: CheckBoxComponent},
  {path: 'datepicker', component: DatePickerComponent},
  {path: 'form-field', component: FormFieldComponent},
  {path: 'input', component: InputComponent},
  {path: 'radio-button', component: RadioButtonComponent},
  {path: 'select', component: SelectComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'slider-toggle', component: SlideToggleComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'side-nav', component: SideNavComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'card', component: CardComponent},
  {path: 'divider', component: DividerComponent},
  {path: 'expansion-panel', component: ExpansionPanelComponent},
  {path: 'grid-list', component: GridListComponent},
  {path: 'list', component: ListComponent},
  {path: 'stepper', component: StepperComponent},
  {path: 'tabs', component: TabsComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'tree2', component: Tree2Component},
  {path: 'tree3', component: Tree3Component},
  {path: 'button', component: ButtonComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'badge', component: BadgeComponent},
  {path: 'chips', component: ChipsComponent},
  {path: 'chips2', component: Chips2Component},
  {path: 'chips3', component: Chips3Component},
  {path: 'icon', component: IconComponent},
  {path: 'progress-spinner', component: ProgressSpinnerComponent},
  {path: 'progress-bar', component: ProgressBarComponent},
  {path: 'ripples', component: RipplesComponent},
  {path: 'snack-bar', component: SnackBarComponent},
  {path: 'tooltip', component: TooltipComponent},
  {path: 'tooltip2', component: Tooltip2Component},
  {path: 'paginator', component: PaginatorComponent},
  {path: 'sort-header', component: SortHeaderComponent},
  {path: 'sort-header2', component: SortHeader2Component},
  {path: 'table', component: TableComponent},
  {path: 'table2', component: Table2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}

