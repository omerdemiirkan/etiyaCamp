import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import {HttpClientModule} from "@angular/common/http"
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FeaturesModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule
   
  
    
  ],
  providers: [  MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
