import { Component } from '@angular/core';
import { IProduct } from '../Models/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent {
  productId: number = 0;
  quantity: number = 0;
  product!: IProduct;

  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    const pid = this.route.snapshot.paramMap.get("id");
    const qty = this.route.snapshot.paramMap.get("qty");

    if (pid !== null && qty !== null) {
        this.productId = parseInt(pid, 10);
        this.quantity = parseInt(qty, 10);


        this.productService.getProductbyID(this.productId).subscribe((p) => {
          this.product = p;
        })

        //call cartService.addToCart
        this.cartService.addToCart(this.productId, this.quantity).subscribe((response) => {
          console.log("Item added to cart:", this.productId);
          console.log("post: ", response);
        }, (error) => {
          console.error("Error adding item to cart:", error);
        });
    } else {
        // Handle the case where one or both parameters are null
        console.error("Product ID or quantity is null.");
    }
}

}
