import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './containers/nav/nav.component';
import { AboutComponent } from './containers/about/about.component';

import {routes} from './app.routes';
import { HistoryComponent } from './containers/history/history.component';
import { FooterComponent } from './containers/footer/footer.component';
import { BlogComponent } from './containers/blog/blog.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { ContactComponent } from './containers/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HistoryComponent,
    FooterComponent,
    BlogComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
