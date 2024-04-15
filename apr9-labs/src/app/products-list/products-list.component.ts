import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products:any[] = [];
  searchedProduct:string = '';
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    // let service = new ProductsService();
    this.products = this.productService.getProducts();
  }
  allProducts() {
    if(this.searchedProduct == '')
      return this.products;
    else 
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchedProduct.toLowerCase()));
  }
}
