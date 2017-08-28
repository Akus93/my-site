import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  @ViewChild('content') content: ElementRef;

  constructor(private renderer: Renderer2) { }

  public onTextareaInput() {
    const scrollHeight = this.content.nativeElement.scrollHeight;
    this.renderer.setStyle(this.content.nativeElement, 'height', `${scrollHeight}px`);
  }

}
