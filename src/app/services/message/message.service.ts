import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/retry';


@Injectable()
export class MessageService {

  private origin = 'https://dawidr.pythonanywhere.com/api';

  constructor(private http: HttpClient) { }

  public sendMessage(name: string, email: string, content: string) {
    const body = {
      name: name,
      email: email,
      content: content
    };

    return this.http.post(`${this.origin}/message/`, body).retry(3);
  }
}
