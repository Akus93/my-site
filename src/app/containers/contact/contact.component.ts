import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MessageService } from '../../services/message/message.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.buildContactForm();
  }

  private buildContactForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      content: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2048)]],
    });
  }

  public send() {
    console.log(this.contactForm.value);
    this.messageService.sendMessage(
      this.contactForm.get('name').value, this.contactForm.get('email').value, this.contactForm.get('content').value
    ).subscribe(response => {
        this.contactForm.reset();
      },
      error => console.error(error)
    );
  }

}
