import {Component} from '@angular/core';
import {environment} from "../environments/environment";

/**
 * Main root of the website. This mostly just hosts html, but will also control the intro animation.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /** State of the intro animation, will be skipped if {@link environment.skipIntro} is true */
  started:"intro" | "fade" | "done" = environment.skipIntro ? "done" : "intro";

  /** Called when the logo has faded in and moved to the right place */
  onIntroComplete() {
    //start fading the rest of the site
    this.started = "fade";

    //wait for the site to fade in and then remove the intro animation from the page
    setTimeout(() => this.started = "done", 500);
  }
}
