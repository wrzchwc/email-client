import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    SiginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
