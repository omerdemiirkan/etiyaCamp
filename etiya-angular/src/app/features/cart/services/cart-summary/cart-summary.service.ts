import { EventEmitter, Injectable } from '@angular/core';
import Product from 'src/app/features/products/models/product';
import CartItem from '../../models/cartItem';


import { CartItems } from '../../models/cartItems';

@Injectable({
  providedIn: 'root',
})
export class CartSummaryService {
  
  addCart: EventEmitter<any> = new EventEmitter();

  constructor() {}

  get CartItems():any{
    return CartItems
  }

  set CartItems(value:CartItem){
    // console.log(value);
    // console.log(CartSummaryModels)
    let item = CartItems.find((c) => c.product.id === value.product.id);
    if (item) ++item.quantity;
    else CartItems.push(value);  
    this.addCart.emit(CartItems)
  }

  removeFromCart(product:Product){
    let item:any= CartItems.find(c=>c.product.id===product.id);
    CartItems.splice(CartItems.indexOf(item),1); //splice silmek için kullanılır (git bellekteki yerini indeksini bul ve 1 tane sil)
  }

}

