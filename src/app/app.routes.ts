import {Routes} from '@angular/router';
import {AboutComponent} from './containers/about/about.component';
import {HistoryComponent} from './containers/history/history.component';
import {BlogComponent} from './containers/blog/blog.component';
import {ProjectsComponent} from './containers/projects/projects.component';
import {ContactComponent} from './containers/contact/contact.component';
import {PostComponent} from './containers/post/post.component';


export const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { state: 'about' }},
  { path: 'blog', component: BlogComponent, data: { state: 'blog' }},
  { path: 'post/:slug', component: PostComponent, data: { state: 'post' }},
  { path: 'contact', component: ContactComponent, data: { state: 'contact' }},
  { path: 'projects', component: ProjectsComponent, data: { state: 'projects' }},
  { path: 'history', component: HistoryComponent, data: { state: 'history' }},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];
