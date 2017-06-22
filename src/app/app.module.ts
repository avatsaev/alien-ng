import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './modules/shared/shared.module';
import { HttpModule } from '@angular/http';

import {StoreModule} from "@ngrx/store";


import {APPLICATION_REDUCERS} from './store/application.reducers'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    StoreModule.provideStore(APPLICATION_REDUCERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
