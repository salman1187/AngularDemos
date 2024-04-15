import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterPipe } from '../../Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../../Pipes/sort.pipe';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, FilterPipe, SortPipe, FormsModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  filterString: string = '';
  sort:string = '';
  sortOrder:string = '';
  products: any[] = [
    {
        id: 1,
        name: "iPhone",
        price: 10.99,
        description: "Description of iPhone"
    },
    {
        id: 2,
        name: "Music Album",
        price: 20.49,
        description: "Description of Music Album"
    },
    {
        id: 3,
        name: "TV",
        price: 15.75,
        description: "Description of TV"
    },
    {
        id: 4,
        name: "Wrist Watch",
        price: 30.25,
        description: "Description of Wrist Watch"
    },
    {
        id: 5,
        name: "Air Conditioner",
        price: 12.99,
        description: "Description of Air Conditioner"
    }]

    sortAsc() {
      this.sortOrder = 'asc';
    }
    sortDesc() {
      this.sortOrder = 'desc';
    }
}
