import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { FormsModule } from '@angular/forms';
import { Page2Component } from './page2/page2.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
