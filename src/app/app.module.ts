import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HomepageComponent } from './components/homepage/homepage.component';
import {HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpService } from './services/http.service';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './services/shared.service';
import {CartComponent } from './components/cart/cart.component';
import {HeaderService } from './components/header/header.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    CartComponent 
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [HttpService, SharedService, HeaderService],
  bootstrap: [AppComponent],
  exports: [HeaderComponent ]
})
export class AppModule { }
