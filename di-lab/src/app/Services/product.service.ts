import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts() {
    //get data from api
    const apiUrl = `http://localhost:3000/products`;
    return this.http.get<IProduct[]>(apiUrl);
  }
  getProductbyID(id: number) {
    
    const apiUrl = `http://localhost:3000/products/${id}`;
    return this.http.get<IProduct>(apiUrl);
  }

}
