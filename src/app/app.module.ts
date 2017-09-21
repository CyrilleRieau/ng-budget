import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Operation } from '../template/template.component';
import { CompteService } from './shared/compte/compte.service';
import {HttpClientModule} from '@angular/common/http';
import { CompteAjaxService } from './shared/compte-ajax.service';


@NgModule({
  declarations: [
    AppComponent,
    Operation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CompteService,
    CompteAjaxService
  ],
  bootstrap: [
    AppComponent, 
    Operation]
})
export class AppModule { }
