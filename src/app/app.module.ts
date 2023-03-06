import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {ExpDescriptionComponent} from './pages/experience/exp-description/exp-description.component';
import {WorkComponent} from './pages/work/work.component';
import {WorkDescComponent} from './pages/work/work-desc/work-desc.component';
import {StartupComponent} from './startup/startup.component';
import {CdkMenuModule} from "@angular/cdk/menu";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ExpDescriptionComponent,
    WorkComponent,
    WorkDescComponent,
    StartupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CdkMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
