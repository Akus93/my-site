import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PostDetail, PostListItem } from '../../models/post.model';


@Injectable()
export class BlogService {

  private origin = 'https://dawidr.pythonanywhere.com/api';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostListItem[]> {
    return this.http.get<PostListItem[]>(`${this.origin}/posts/`);
  }

  public getPost(slug: string): Observable<PostDetail> {
    return this.http.get<PostDetail>(`${this.origin}/posts/${slug}/`);
  }

  public addPost(token: string, title: string, content: string, description: string) {
    const body = {
      title: title,
      content: content,
      description: description
    };
    const options = {
      headers: new HttpHeaders().set('Authorization', 'Token ' + token)
    };

    return this.http.post(`${this.origin}/posts/`, body, options);
  }

}
