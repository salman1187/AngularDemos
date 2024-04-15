import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product:any;
  @Output()
  productAdded = new EventEmitter<any>();


  addToCart(){
    this.productAdded.emit(this.product);
  }

}
