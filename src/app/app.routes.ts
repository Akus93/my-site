import {Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {LinksComponent} from './containers/links/links.component';


export const routes: Routes = [
  { path: 'links', component: LinksComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent }
];
