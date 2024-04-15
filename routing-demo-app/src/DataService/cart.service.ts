import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: { product: any, quantity: number }[] = [];

  constructor() { }

  addToCart(product: any, quantity: number) {
    this.cartItems.push({ product, quantity });
  }

  getCartItems() {
    return this.cartItems;
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex(cartItem => cartItem.product === item.product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

}
