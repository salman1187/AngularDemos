import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingcartService } from '../shoppingcart.service';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  products: any[] = [];
  cart: any[] = [];
  constructor(private service: ShoppingcartService) { }

  ngOnInit(): void {
    this.products = this.service.getProducts();
    this.cart = this.service.getCartItems();
  }

  addItemToCart(item: any) {
    this.service.addCartItem(item);
    console.log(this.service.getCartItems());
  }

  removeItemFromCart(item: any) {
    console.log(item);
    this.service.removeCartItem(item);
    this.cart = this.service.getCartItems(); 
  }
  

}
