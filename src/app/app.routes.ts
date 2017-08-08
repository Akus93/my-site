import {Routes} from '@angular/router';
import {AboutComponent} from './containers/about/about.component';
import {LinksComponent} from './containers/links/links.component';
import {BlogComponent} from './containers/blog/blog.component';
import {ProjectsComponent} from './containers/projects/projects.component';
import {ContactComponent} from './containers/contact/contact.component';


export const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { state: 'about' }},
  { path: 'blog', component: BlogComponent, data: { state: 'blog' }},
  { path: 'contact', component: ContactComponent, data: { state: 'contact' }},
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' }},
  { path: 'links', component: LinksComponent, data: { state: 'links' }},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];
