import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    InputComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}
