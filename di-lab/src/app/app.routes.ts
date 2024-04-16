import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

export const routes: Routes = [
    {path: 'home', component: ProductListComponent},
    {path: '', component: ProductListComponent},
    {path: 'cart', component: CartComponent},
    {path: 'addProduct/:id/:qty', component: AddToCartComponent},
];
