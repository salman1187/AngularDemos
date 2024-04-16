import { Component, OnInit } from '@angular/core';
import { CartItem, ICart } from '../Models/cart';
import { IProduct } from '../Models/product';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  cartItemsWithProducts: { product: IProduct, quantity: number }[] = [];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.getCartItemsWithProducts();
  }

  getCartItemsWithProducts() {
    this.cartService.getCart().subscribe((cart: any) => {
      this.cart = cart;
      console.log("cart: ", cart);
      
      // Check if cart items are available
      
        this.cart.forEach((cartItem: CartItem) => {
          console.log(cartItem);
          this.productService.getProductbyID(cartItem.productId).subscribe((product: IProduct) => {
            this.cartItemsWithProducts.push({ product, quantity: cartItem.quantity });
          });
        });
      
    });
  }
  
}
