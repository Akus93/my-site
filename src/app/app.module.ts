import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { NavComponent } from './containers/nav/nav.component';
import { AboutComponent } from './containers/about/about.component';
import { HistoryComponent } from './containers/history/history.component';
import { FooterComponent } from './containers/footer/footer.component';
import { BlogComponent } from './containers/blog/blog.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { ContactComponent } from './containers/contact/contact.component';
import { PostComponent } from './containers/post/post.component';
import { BlogService } from './services/blog/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HistoryComponent,
    FooterComponent,
    BlogComponent,
    ProjectsComponent,
    ContactComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL' },
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
