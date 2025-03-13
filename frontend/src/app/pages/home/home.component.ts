import {Component} from '@angular/core';
import {YearsComponent} from "../../years/years.component";
import {RouterLink} from "@angular/router";

/** Just hosting the home page, not much here except the html and scss */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    YearsComponent,
    RouterLink
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
