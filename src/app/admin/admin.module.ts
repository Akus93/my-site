import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';

import { AdminComponent } from './admin.component';
import { routes } from './admin.routes';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { PostCreateComponent } from './containers/post-create/post-create.component';
import { PostEditComponent } from './containers/post-edit/post-edit.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuillModule,
  ],
  declarations: [
    AdminComponent,
    LoginComponent,
    PostCreateComponent,
    PostEditComponent,
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AdminModule { }
