import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PostCreateComponent } from './containers/post-create/post-create.component';
import {PostEditComponent} from './containers/post-edit/post-edit.component';


export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {state: 'admin'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { state: 'login' }
  },
  {
    path: 'create',
    component: PostCreateComponent,
    data: { state: 'create' }
  },
  {
    path: 'edit/:slug',
    component: PostEditComponent,
    data: { state: 'edit' }
  },
];
