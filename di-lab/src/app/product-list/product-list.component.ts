import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { IProduct } from '../Models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  quantity: number = 1;

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  products: IProduct[] = [];
  constructor(private service : ProductService) {}
  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
