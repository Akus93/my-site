import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './containers/nav/nav.component';
import { AboutComponent } from './containers/about/about.component';
import { HistoryComponent } from './containers/history/history.component';
import { BlogComponent } from './containers/blog/blog.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { ContactComponent } from './containers/contact/contact.component';
import { PostComponent } from './containers/post/post.component';
import { SocialComponent } from './components/social/social.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HistoryComponent,
    BlogComponent,
    ProjectsComponent,
    ContactComponent,
    PostComponent,
    SocialComponent,
    SkillBarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
