import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Operation } from '../template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    Operation
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent, 
    Operation]
})
export class AppModule { }
