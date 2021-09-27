import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import {
  AccordionModule,
  BreadcrumbModule,
  ButtonModule,
  CheckboxModule,
  CodeSnippetModule,
  ContentSwitcherModule,
  DatePickerModule, DialogModule,
  DropdownModule, FileUploaderModule, InlineLoadingModule, InputModule,
  LinkModule,
  LoadingModule,
  NotificationModule, NumberModule,
  PlaceholderModule,
  SkeletonModule,
  TilesModule
} from 'carbon-components-angular';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { TilesComponent } from './tiles/tiles.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import { ContentSwitcherComponent } from './content-switcher/content-switcher.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LinkComponent } from './link/link.component';
import { ListComponent } from './list/list.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { OverflowMenuComponent } from './overflow-menu/overflow-menu.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { InputComponent } from './input/input.component';
import { InlineLoadingComponent } from './inline-loading/inline-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    BreadcrumbComponent,
    ButtonComponent,
    TilesComponent,
    CheckboxComponent,
    CodeSnippetComponent,
    ContentSwitcherComponent,
    DataTableComponent,
    DatePickerComponent,
    DropdownComponent,
    LinkComponent,
    ListComponent,
    LoadingComponent,
    ModalComponent,
    NotificationComponent,
    NumberInputComponent,
    OverflowMenuComponent,
    FileUploaderComponent,
    InputComponent,
    InlineLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    TilesModule,
    SkeletonModule,
    CheckboxModule,
    CodeSnippetModule,
    ContentSwitcherModule,
    DatePickerModule,
    DropdownModule,
    LinkModule,
    LoadingModule,
    PlaceholderModule,
    NotificationModule,
    NumberModule,
    DialogModule,
    FileUploaderModule,
    InputModule,
    InlineLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
