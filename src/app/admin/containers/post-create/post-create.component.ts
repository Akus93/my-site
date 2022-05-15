import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';


import { SubscriptionLike  } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { BlogService } from '../../../services/blog/blog.service';
import { AuthService } from '../../services/auth/auth.service';
import { QuillEditorComponent } from 'ngx-quill';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy {

  @ViewChild('editor', { static: true }) editor!: QuillEditorComponent;
  @ViewChild('title', { static: true }) title!: ElementRef;
  public editorHtml: string;
  public editorText: string;
  public editorSubscription!: SubscriptionLike;
  public editorConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      ['link', 'image', 'video']
    ]
  };

  constructor(private blogService: BlogService, private authService: AuthService) {
    this.editorHtml = '';
    this.editorText = '';
  }

  ngOnInit() {
    this.editorSubscription = this.editor
      .onContentChanged
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe(content => {
          this.editorHtml = content.html!;
          this.editorText = content.text;
        }
      );
  }

  ngOnDestroy() {
    this.editorSubscription.unsubscribe();
  }

  public publish() {
    const title = this.title.nativeElement.value;
    const content = this.editorHtml;
    const description = this.generateDescription(this.editorText);
    const token = this.authService.getToken();
    this.blogService.addPost(token, title, content, description)
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
