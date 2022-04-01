import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthenticationModule {
}
