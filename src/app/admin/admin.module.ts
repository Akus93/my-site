import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { AdminComponent } from './admin.component';
import { routes } from './admin.routes';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule,
  ],
  declarations: [
    AdminComponent,
    LoginComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AdminModule { }
