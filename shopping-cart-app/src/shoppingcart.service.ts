import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  products: any[] = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        description: "Description of Product 1"
    },
    {
        id: 2,
        name: "Product 2",
        price: 20.49,
        description: "Description of Product 2"
    },
    {
        id: 3,
        name: "Product 3",
        price: 15.75,
        description: "Description of Product 3"
    },
    {
        id: 4,
        name: "Product 4",
        price: 30.25,
        description: "Description of Product 4"
    },
    {
        id: 5,
        name: "Product 5",
        price: 12.99,
        description: "Description of Product 5"
    }
];
    cart:any[] = [];

  constructor() { }

  getProducts(): any[] {
    return this.products;
  }

  addProduct(product: any): void {
    this.products.push(product);
  }

  getCartItems(): any[] {
    return this.cart;
  }

  addCartItem(item: any): void {
    this.cart.push(item);
  }

  removeCartItem(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem.id != item.id);
  }

}
