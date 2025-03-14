import {Component, ElementRef, ViewChild} from '@angular/core';
import {environment} from "../environments/environment";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {StartupComponent} from "./startup/startup.component";

/**
 * Main root of the website. This mostly just hosts html, but will also control the intro animation.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    StartupComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** State of the intro animation, will be skipped if {@link environment.skipIntro} is true */
  started:IntroState = environment.skipIntro ? "done" : "intro";

  @ViewChild("outlet") outlet:ElementRef;

  constructor(router:Router) {
    /*
    Listen for page changes, if there is a change then reset the scroll. Since the page is using a sub-div for
    scrolling, default router resetting won't work here.
     */
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd && this.outlet && this.outlet.nativeElement) {
        const html = this.outlet.nativeElement as HTMLElement;
        html.scrollTo(0, 0);
      }
    })
  }


  /** Called when the logo has faded in and moved to the right place */
  onIntroComplete() {
    //start fading the rest of the site
    this.started = "fade";

    //wait for the site to fade in and then remove the intro animation from the page
    setTimeout(() => this.started = "done", 500);
  }
}

type IntroState = "intro" | "fade" | "done";
