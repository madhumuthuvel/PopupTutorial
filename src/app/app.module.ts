import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {Dialog} from './popups/popups.component';


@NgModule({
  declarations: [
    AppComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents: [Dialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
