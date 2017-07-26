import { Component,  OnInit }                     from '@angular/core';
import {  HeaderService }                 from '../header/header.service';

import {  CartService }                 from './cart.service';

@Component({
  selector: 'connect-homepage',
  templateUrl: './cart.component.html',
  providers: [CartService]
})
export class CartComponent {

private books_cart: any = [];
private isbn_url: string = ''; 
private total_price: number = 0;
private discount_price: number = 0;
private show_discounted_price = false;
private entered_code: string = '';
 constructor( private _headerService: HeaderService, 
 private _cartservice: CartService) { 
    }
 
  ngOnInit() {
   this.books_cart = this._headerService.books_in_cart;
     this.books_cart.filter(book =>{
          this.isbn_url =   book.isbn + ',' + this.isbn_url;
          this.total_price = this.total_price + book.price;
      });
      this.isbn_url = this.isbn_url.substring(0, this.isbn_url.length - 1);
  }
  
 getOffer() {

  console.log(this.books_cart);
    this._cartservice.getOffers(this.isbn_url)
    .subscribe((data: any) => {
          switch(data.offers.length) {
        case 1:
                
                this.discount_price = data.offers[0].type = 'percentage' ? 
                (this.total_price - (data.offers[0].value/100 * this.total_price)) : 
                (this.total_price - data.offers[0].value );
                  this.show_discounted_price = true;
                  console.log(this.discount_price);
                 break;
        case 2:
           
            break;
        case 3:
                  this.discount_price = data.offers[0].type = 'percentage' ? 
                (this.total_price - (data.offers[0].value/100 * this.total_price)) : 
                this.discount_price ;
                console.log(this.discount_price);
                this.discount_price = data.offers[1].type = 'minus' ? 
                    this.discount_price - data.offers[1].value : this.discount_price;
                    console.log(this.discount_price);
               this.discount_price = data.offers[2].type = 'slice' ? 
                    this.calculateSlice(this.discount_price, data.offers[2].value, data.offers[2].sliceValue) : 
                    this.discount_price;
              this.show_discounted_price = true;
            break;
        default:
           
        }
    },
   error => console.log(error),
    );
 }

calculateSlice(discount, slice_value, slice_limit) {
    if (this.total_price > slice_limit) {
        let slice = Math.floor(this.total_price/slice_limit);
       discount = discount - slice_value * slice;
    }
    return discount;
}

removeOffer() {
    this.entered_code = '';
    this.show_discounted_price = false;
}

}
