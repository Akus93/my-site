import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutPageComponent } from './pages/about/about.component';
import { BlogPageComponent } from './pages/blog/blog.component';
import { ProjectsPageComponent } from './pages/projects/projects.component';
import { ContactPageComponent } from './pages/contact/contact.component';
import { PostPageComponent } from './pages/post/post.component';
import { SocialComponent } from './components/social/social.component';
import { SkillBarComponent } from './components/skill-bar/skill-bar.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutPageComponent,
    BlogPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    PostPageComponent,
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
