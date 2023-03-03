import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './pages/home/home.component';
import {MenuOptionComponent} from "./header/menu-option/menu-option.component";
import {AboutComponent} from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ExpDescriptionComponent } from './pages/experience/exp-description/exp-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    MenuOptionComponent,
    AboutComponent,
    ExperienceComponent,
    ExpDescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
