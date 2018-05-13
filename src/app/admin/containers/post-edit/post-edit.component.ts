import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubscriptionLike } from 'rxjs';
import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { AuthService } from '../../services/auth/auth.service';
import { BlogService } from '../../../services/blog/blog.service';
import { PostDetail} from '../../../models/post.model';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {

  @ViewChild('editor') editor: QuillEditorComponent;
  public post: PostDetail;
  private postSubscription: SubscriptionLike;
  @ViewChild('title') title: ElementRef;
  public editorHtml: string;
  public editorText: string;
  public editorSubscription: SubscriptionLike;
  public editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, {'align': [false, 'center', 'right', 'justify']}],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'header': [1, 2, 3, false] }, {'font': []}],
      ['clean'],
      ['link', 'image', 'video'],
    ]
  };

  constructor(private route: ActivatedRoute, private blogService: BlogService,
              private authService: AuthService) { }

  ngOnInit() {
    this.postSubscription =
      this.route.params
        .pipe(
          switchMap(params => this.blogService.getPost(params['slug']))
        )
        .subscribe(post => {
          this.post = post;
          this.editor.writeValue(post.content);
        });
    this.editorSubscription = this.editor
      .onContentChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(content => {
          this.editorHtml = content.html;
          this.editorText = content.text;
        }
      );
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
    this.editorSubscription.unsubscribe();
  }

  public edit() {
    const title = this.title.nativeElement.value;
    const content = this.editorHtml;
    const description = this.generateDescription(this.editorText);
    const token = this.authService.getToken();
    this.blogService.editPost(token, this.post.slug, title, content, description)
      .subscribe(post => this.onSuccess(),
        error => console.error(error));
  }

  private generateDescription(text: string, maxChars: number = 500): string {
    let counter = 0;
    let index = 0;
    const sentences = text.split('.');
    for (let i = 0; i < sentences.length; ++i) {
      counter += sentences[i].length;
      if (counter > maxChars) {
        break;
      }
      index++;
    }
    return sentences.slice(0, index).join('.') + '.';
  }

  private onSuccess(): void {
    this.title.nativeElement.value = '';
    this.editor.writeValue('');
  }

}
