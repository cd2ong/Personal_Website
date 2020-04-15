import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JQUERY_TOKEN } from './shared/j-query.service';
import { ContentWindowComponent } from './shared/content-window/content-window.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ColListComponent } from './home/col-list/col-list.component';
import { Error404Component } from './errors/error404/error404.component';
import { ProjectComponent } from './home/gallery/project/project.component';

let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentWindowComponent,
    HomeComponent,
    GalleryComponent,
    ColListComponent,
    Error404Component,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: JQUERY_TOKEN, useValue: jQuery}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
