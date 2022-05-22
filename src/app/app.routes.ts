import {Routes} from '@angular/router';
import {AboutPageComponent} from './pages/about/about.component';
import {BlogPageComponent} from './pages/blog/blog.component';
import {ProjectsPageComponent} from './pages/projects/projects.component';
import {ContactPageComponent} from './pages/contact/contact.component';
import {PostPageComponent} from './pages/post/post.component';


export const routes: Routes = [
  { path: 'about', component: AboutPageComponent, data: { state: 'about' }},
  { path: 'blog', component: BlogPageComponent, data: { state: 'blog' }},
  { path: 'post/:slug', component: PostPageComponent, data: { state: 'post' }},
  { path: 'contact', component: ContactPageComponent, data: { state: 'contact' }},
  { path: 'projects', component: ProjectsPageComponent, data: { state: 'projects' }},
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: '**', redirectTo: '/about', pathMatch: 'full' }
];
