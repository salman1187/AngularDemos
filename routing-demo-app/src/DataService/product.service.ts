import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): any[] {
    return [
      { id: 1, name: 'Product 1', price: 10.99, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, name: 'Product 2', price: 19.99, description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 3, name: 'Product 3', price: 29.99, description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
      { id: 4, name: 'Product 4', price: 14.99, description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
      { id: 5, name: 'Product 5', price: 24.99, description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
    ];
  }
  getProductbyID(id: number) {
    return this.getProducts().find(p => p.id === id);
  }
  
}
