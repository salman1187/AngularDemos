import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Models/product';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface IServiceClient {
    getProducts(): Observable<IProduct[]>;
}

export const token = new InjectionToken<IServiceClient>("IServiceClient");

@Injectable({
    providedIn: 'root'
})

export class ServiceClient implements IServiceClient {

    constructor(private http: HttpClient) {}

    getProducts() {
        //get data from api
        const apiUrl = `http://localhost:3000/products`;
        return this.http.get<IProduct[]>(apiUrl);
    }
}