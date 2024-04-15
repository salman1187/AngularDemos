import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'blogs', component: BlogListComponent},
    {path: 'blog/:id', component: BlogDetailComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
