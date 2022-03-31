import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AuthenticationModule} from "./authentication/authentication.module";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
