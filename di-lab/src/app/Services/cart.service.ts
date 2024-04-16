import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem, ICart } from '../Models/cart';
import { IProduct } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  getCart() {
    //get data from api
    const apiUrl = `http://localhost:3000/cart`;
    return this.http.get<ICart>(apiUrl);
  }
  addToCart(productId:number, quantity:number){
    const apiUrl = `http://localhost:3000/cart`;
    const id = "";
    const payload:CartItem = { id, productId, quantity };
    return this.http.post<ICart>(apiUrl, payload);
  }

}
