import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogService } from '../../services/blog/blog.service';
import { PostListItem } from '../../models/post.model';


@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogPageComponent implements OnInit {

  public posts$!: Observable<PostListItem[]>;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts$ = this.blogService.getPosts();
  }

}
