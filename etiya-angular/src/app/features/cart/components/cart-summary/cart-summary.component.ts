import { Component, OnInit } from '@angular/core';
import Product from 'src/app/features/products/models/product';
import CartItem from '../../models/cartItem';

import { CartSummaryService } from '../../services/cart-summary/cart-summary.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartSummary!:CartItem[]

  constructor(public cartSummaryService: CartSummaryService) { }

  ngOnInit(): void {

    this.showCartSummary()
  }


  showCartSummary(){
    this.cartSummaryService.addCart.subscribe(cartItem =>{
      console.log(cartItem)
      this.cartSummary = cartItem
    })
  }

  removeFromCart(product:Product){
    this.cartSummaryService.removeFromCart(product)
  }
  

}
