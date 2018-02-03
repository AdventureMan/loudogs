import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LougearComponent } from './components/lougear/lougear.component';
import { AboutHeaderComponent } from './components/about/about-header/about-header.component';
import { AboutContentComponent } from './components/about/about-content/about-content.component';
import { MenuHeaderComponent } from './components/menu/menu-header/menu-header.component';
import { MenuContentComponent } from './components/menu/menu-content/menu-content.component';
import { FullSizeComponent } from './components/gallery/full-size/full-size.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    GalleryComponent,
    LougearComponent,
    AboutHeaderComponent,
    AboutContentComponent,
    MenuHeaderComponent,
    MenuContentComponent,
    FullSizeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
