import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, AsyncSubject } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { PostDetail, PostListItem } from '../../models/post.model';


@Injectable({ providedIn: 'root' })
export class BlogService {

  private origin = 'http://api.dawidr.pl/api';

  private postCache = new Map<string, Observable<PostDetail>>();
  private postsCache = new Map<number, Observable<PostListItem[]>>();

  constructor(private http: HttpClient) {}

  public getPosts(page: number = 1): Observable<PostListItem[]> {
    if (!this.postsCache.has(page)) {
      this.postsCache.set(page, this.fetchPosts(page));
    }
    return this.postsCache.get(page)!;
  }

  public getPost(slug: string): Observable<PostDetail> {
    if (!this.postCache.has(slug)) {
      this.postCache.set(slug, this.fetchPost(slug));
    }
    return this.postCache.get(slug)!;
  }

  private fetchPost(slug: string): Observable<PostDetail> {
    const subject = new AsyncSubject<PostDetail>();
    this.http
        .get<PostDetail>(`${this.origin}/posts/${slug}/`)
        .pipe(
          retry(3)
        )
        .subscribe(subject);
    return subject.asObservable();
  }

  private fetchPosts(page: number = 1): Observable<PostListItem[]> {
    const subject = new AsyncSubject<PostListItem[]>();
    this.http
      .get<PostListItem[]>(`${this.origin}/posts/`)
      .pipe(
        retry(3),
      )
      .subscribe(subject);
    return subject.asObservable();
  }

}
