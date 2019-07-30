import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  private origin = 'http://api.dawidr.pl/auth';

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {

    const body = {
      username: username,
      password: password
    };

    return this.http.post(`${this.origin}/login/`, body);
  }

  public logout(): Observable<any> {

    const options = {
      headers: new HttpHeaders().set('Authorization', 'Token ' + this.getToken())
    };

    return this.http.post(`${this.origin}/logout/`, {}, options);
  }

  public isAuth(): boolean {
    return !!sessionStorage.getItem('token');
  }

  public setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public getToken(): string {
    return sessionStorage.getItem('token');
  }

  public clearSession(): void {
    sessionStorage.clear();
  }
}
