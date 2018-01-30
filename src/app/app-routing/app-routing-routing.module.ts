import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './../components'
import { HomeComponent } from './../components'
import { GalleryComponent } from './../components'
import { LougearComponent } from './../components'
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: 'menu',
    pathMatch: 'full',
    component: MenuComponent
  },
  {
    path: 'gallery',
    pathMatch: 'full',
    component: GalleryComponent
  },
  {
    path: 'lougear',
    pathMatch: 'full',
    component: LougearComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
