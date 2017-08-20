import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import {BlogService} from '../../services/blog/blog.service';
import {PostDetail} from '../../models/post.model';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  public post: PostDetail;
  private postSubscription: ISubscription;

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.postSubscription =
      this.route.params
                .switchMap(params => this.blogService.getPost(params['slug']))
                .subscribe(post => this.post = post);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
