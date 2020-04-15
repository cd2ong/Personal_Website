import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './home/gallery/project/project.component';
import { ProjectResolver } from './home/gallery/project/project-resolver.service';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', pathMatch: 'full', redirectTo: '/' },
  { path: 'project/:id', component: ProjectComponent,
  resolve: {project: ProjectResolver}},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
