import {Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';

import {QuillEditorComponent} from 'ngx-quill/src/quill-editor.component';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {ISubscription} from 'rxjs/Subscription';
import {BlogService} from '../../../services/blog/blog.service';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy {

  @ViewChild('editor') editor: QuillEditorComponent;
  @ViewChild('title') title: ElementRef;
  public editorHtml: string;
  public editorText: string;
  public editorSubscription: ISubscription;
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

  constructor(private blogService: BlogService, private authService: AuthService) {
    this.editorHtml = '';
    this.editorText = '';
  }

  ngOnInit() {
    this.editorSubscription = this.editor
      .onContentChanged
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(content => {
          this.editorHtml = content.html;
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
      .subscribe(post => console.log(post),
        error => console.error(error));
  }

  private generateDescription(text: string, maxChars: number = 510): string {
    let counter = 0;
    let index = 0;
    const sentences = text.split('.');
    for (let i = 0; i < sentences.length; ++i) {
      counter += sentences[i].length;
      if (counter > maxChars) { break; }
      index++;
    }
    return sentences.slice(0, index).join('.') + '.';
  }

}
