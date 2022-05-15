import { Component, OnInit } from '@angular/core';

import { BlogService } from '../services/blog/blog.service';
import { PostListItem } from '../models/post.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public posts: PostListItem[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPosts().subscribe(
      posts => this.posts = posts
    );
  }
}
