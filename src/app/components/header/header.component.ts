import { Component, Input }     from '@angular/core';
import {Router, ActivatedRoute}  from '@angular/router';
import {  HeaderService }                 from './header.service';

@Component({
  selector: 'connect-header',
  templateUrl: './header.component.html'
  
})
export class HeaderComponent {
@Input() books_cart: any = [];
 constructor(private _headerService: HeaderService, private router: Router) {}
 
checkOutCart() {
  if(this.books_cart.length != 0) {
  console.log(this.books_cart);
  this._headerService.books_in_cart = this.books_cart;
  this.router.navigate(['checkout-cart']);
  } else {
    alert("Cart is empty");
  
}
}
}