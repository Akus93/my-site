import {Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {LinksComponent} from './containers/links/links.component';
import {BlogComponent} from './containers/blog/blog.component';
import {ProjectsComponent} from './containers/projects/projects.component';
import {ContactComponent} from './containers/contact/contact.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { state: 'home' }},
  { path: 'blog', component: BlogComponent, data: { state: 'blog' }},
  { path: 'contact', component: ContactComponent, data: { state: 'contact' }},
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' }},
  { path: 'links', component: LinksComponent, data: { state: 'links' }},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
