import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../DataService/cart.service';
import { ProductService } from '../../DataService/product.service';
import { producerAccessed } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent implements OnInit {
  productId: number = 0;
  product: any;
  quantity: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    const pid = this.route.snapshot.paramMap.get("id");
    const qty = this.route.snapshot.paramMap.get("qty");

    if (pid !== null && qty !== null) {
        this.productId = parseInt(pid, 10);
        this.quantity = parseInt(qty, 10);
        this.product = this.productService.getProductbyID(this.productId);
        this.cartService.addToCart(this.product, this.quantity);
        console.log(this.cartService.getCartItems());
    } else {
        // Handle the case where one or both parameters are null
        console.error("Product ID or quantity is null.");
    }
}

}