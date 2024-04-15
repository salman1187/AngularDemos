import { Component, Inject, OnInit } from '@angular/core';
import { IServiceClient, ServiceClient } from '../Services/ServiceClient.service';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  productsList: IProduct[] = [];

  constructor(@Inject("IServiceClient") private service : IServiceClient) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      this.productsList = data;
    });
  }

}
