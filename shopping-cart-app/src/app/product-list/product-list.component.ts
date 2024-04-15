import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input()
  products:any[] = [];
  @Output()
  ProductAdded = new EventEmitter<any>();


  addProductToCart(product: any){
    this.ProductAdded.emit(product);
  }
  

}
