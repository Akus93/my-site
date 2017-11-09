import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

import { MessageService } from '../../services/message/message.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('content') content: ElementRef;

  public formData = {
    name: '',
    email: '',
    content: ''
  };

  constructor(private renderer: Renderer2, private messageService: MessageService) {}

  public onTextareaInput() {
    const scrollHeight = this.content.nativeElement.scrollHeight;
    this.renderer.setStyle(this.content.nativeElement, 'height', `${scrollHeight}px`);
  }

  public send() {
    this.messageService.sendMessage(this.formData.name, this.formData.email, this.formData.content).subscribe(
      response => {
        this.formData.content = '';
        this.formData.name = '';
        this.formData.email = '';
      },
      error => console.error(error)
    );
  }

}
