import { Component } from '@angular/core';
import { CartItem } from '../Models/cart';
import { IProduct } from '../Models/product';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cart: any[] = [];
  cartItemsWithProducts: { product: IProduct, quantity: number }[] = [];
  totalCost: number = 0;

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
            this.calculateTotalCost();
          });
        });
      
    });

}
calculateTotalCost() {
  this.totalCost = 0;
  this.cartItemsWithProducts.forEach(item => {
    this.totalCost += item.quantity * item.product.price;
  });}
}
