import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { Observable } from 'rxjs/Observable';

import {PostListItem} from '../../models/post.model';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public posts$: Observable<PostListItem[]>;

  public isLoader = true;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts$ = this.blogService.getPosts();
  }

}
