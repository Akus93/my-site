import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if (this.authService.isAuth()) {
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;
  }
}
