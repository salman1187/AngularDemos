import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input()
  cartItems:any[] = [];
  @Output()
  itemRemoved = new EventEmitter<any>();

  removeItem(item: any){
    this.itemRemoved.emit(item);
  }

}
