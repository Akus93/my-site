import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service';
import {PostDetail} from '../../../models/post.model';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {

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
