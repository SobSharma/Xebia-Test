import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent } from './components/homepage/homepage.component';
 import {CartComponent } from './components/cart/cart.component';                                 

export const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'checkout-cart', component: CartComponent },
  
  
 ];
 
 
 @NgModule({
  imports: [
      RouterModule.forRoot(routes)
      
      ],
  exports: [RouterModule]
})

export class AppRoutingModule {}