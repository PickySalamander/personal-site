import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  started:"intro" | "fade" | "done" = "intro";

  onIntroComplete() {
    this.started = "fade";

    setTimeout(() => this.started = "done", 500);
  }
}
