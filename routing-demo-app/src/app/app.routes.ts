import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TeamsComponent } from './teams/teams.component';
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartComponent } from './cart/cart.component';
import { CanActivate, CanDeactivateContactForm, CanDeactive } from './guards/secure.guards';

export const routes: Routes = 
[
   {path: 'home', component: HomeComponent},
   {path: 'about', component: AboutComponent},
   {path: 'about', component: AboutComponent, children: 
      [
         {path: 'company', component: CompanyComponent},
         {path: 'teams', component: TeamsComponent},
         {path: 'services', component: ServicesComponent},
      ]

   },
   {path: 'contact', component: ContactComponent, canDeactivate: [CanDeactive]},
   {path: 'products', component: ProductsListComponent, canActivate: [CanActivate] },
   {path: 'products/:id/:qty', component: AddToCartComponent},
   {path: 'cart', component: CartComponent},
   {path: '', redirectTo: 'home', pathMatch: 'full'}
];




// {path: 'about/teams', component: TeamsComponent},
// {path: 'about/company', component: CompanyComponent},
// {path: 'about/services', component: ServicesComponent},