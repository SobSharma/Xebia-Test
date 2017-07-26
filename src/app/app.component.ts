import { Component, OnInit }      from '@angular/core';
import {Http}                     from '@angular/http';
import {  SharedService }         from './services/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  
  private books_cart: any = [];

    
    constructor (private _sharedService: SharedService)
    { 
      _sharedService.changeEmitted$.subscribe(
        book => {
            this.books_cart.push(book);
        });
    }





}
