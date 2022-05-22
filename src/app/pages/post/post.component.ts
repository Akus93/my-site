import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { SubscriptionLike } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { BlogService } from '../../services/blog/blog.service';
import { PostDetail } from '../../models/post.model';


@Component({
  selector: 'app-post-page',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {

  public post!: PostDetail;
  public content!: SafeHtml;
  private postSubscription!: SubscriptionLike;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private blogService: BlogService) {}

  ngOnInit() {
    this.postSubscription =
      this.route.params
        .pipe(
          switchMap(params => this.blogService.getPost(params['slug']))
        )
        .subscribe(post => {
          this.content = this.sanitizer.bypassSecurityTrustHtml(post.content);
          this.post = post;
        });
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
