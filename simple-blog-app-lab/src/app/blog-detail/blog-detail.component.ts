import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';


@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {
  id: number = 0;
  blog: any;
  constructor(private route: ActivatedRoute, private blogService: BlogServiceService) { }

  ngOnInit(): void {
    const bid = this.route.snapshot.paramMap.get("id");

    if (bid !== null) {
        this.id = parseInt(bid, 10);
        this.blog = this.blogService.getBlogById(this.id);
    } else {
        
        console.error("ID is null.");
    }
}
}
