import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('login', { static: true }) login!: ElementRef;
  @ViewChild('password', { static: true }) password!: ElementRef;

  constructor(private authService: AuthService, private router: Router) { }

  public onSumbit() {
    this.authService.login(this.login.nativeElement.value, this.password.nativeElement.value)
        .subscribe(
          resp => {
            this.authService.setToken(resp.key);
            this.router.navigate(['/admin']);
          }
        );
  }
}
