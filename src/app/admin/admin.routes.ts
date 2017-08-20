import {Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {LoginComponent} from './containers/login/login.component';
import {AuthGuard} from './guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: {state: 'admin'}
  },
  { path: 'login',
    component: LoginComponent,
    data: { state: 'login' }
  }
];
