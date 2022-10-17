import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Product } from '../products';
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  items = this.cartService.getCartItems();
  checkOutFrom = this.formBuilder.group({
    name: '',
    address: ''
  }); 
  
  onSubmit(): void{
    // process checkout here
    this.items = this.cartService.clearCart();
    console.warn("Your order has been submitted", this.checkOutFrom.value);
    this.checkOutFrom.reset();
  }

  clearAll(){
    this.cartService.clearCart();
  }
}
