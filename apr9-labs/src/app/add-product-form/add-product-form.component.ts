import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.css'
})
export class AddProductFormComponent {
 
  showForm: boolean = false;
  newProduct: any = {
    name: '',
    price: null,
    description: ''
  };

  constructor(private productService: ProductsService) { }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addProduct() {
    let p = this.productService.getProducts();
    this.newProduct.id = p[p.length - 1].id + 1;
    this.productService.addProduct(this.newProduct);
    this.showForm = false;
  }
  

  cancelForm() {
    this.showForm = false;
  }
}
