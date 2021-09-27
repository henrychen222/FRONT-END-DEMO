import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccordionComponent} from './accordion/accordion.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ButtonComponent} from './button/button.component';
import {TilesComponent} from './tiles/tiles.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {CodeSnippetComponent} from './code-snippet/code-snippet.component';
import {ContentSwitcherComponent} from './content-switcher/content-switcher.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {LinkComponent} from './link/link.component';
import {ListComponent} from './list/list.component';
import {LoadingComponent} from './loading/loading.component';
import {ModalComponent} from './modal/modal.component';
import {NotificationComponent} from './notification/notification.component';
import {NumberInputComponent} from './number-input/number-input.component';
import {OverflowMenuComponent} from './overflow-menu/overflow-menu.component';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';
import {InputComponent} from './input/input.component';
import {InlineLoadingComponent} from './inline-loading/inline-loading.component';

const routes: Routes = [
  {path: 'accordion', component: AccordionComponent},
  {path: 'breadcrumb', component: BreadcrumbComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'tiles', component: TilesComponent},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'code-snippet', component: CodeSnippetComponent},
  {path: 'content-switcher', component: ContentSwitcherComponent},
  {path: 'date-picker', component: DatePickerComponent},
  {path: 'dropdown', component: DropdownComponent},
  {path: 'link', component: LinkComponent},
  {path: 'list', component: ListComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'modal', component: ModalComponent},
  {path: 'notification', component: NotificationComponent},
  {path: 'number-input', component: NumberInputComponent},
  {path: 'overflow-menu', component: OverflowMenuComponent},
  {path: 'file-uploader', component: FileUploaderComponent},
  {path: 'input', component: InputComponent},
  {path: 'inline-loading', component: InlineLoadingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
