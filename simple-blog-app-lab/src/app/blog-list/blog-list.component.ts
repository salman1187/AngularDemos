import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  allBlogs: any[] = [];
  filteredBlogs: any[] = [];
  searched: string = "";

  constructor(private blogService: BlogServiceService) {
    this.allBlogs = this.blogService.getBlogs();
    // Initially display all blogs
    this.filteredBlogs = this.allBlogs;
  }

  filterBlogs() {
    this.filteredBlogs = this.allBlogs.filter(blog =>
      blog.blogTitle.toLowerCase().includes(this.searched.toLowerCase()) ||
      blog.blogDescription.toLowerCase().includes(this.searched.toLowerCase())
    );
  }
}