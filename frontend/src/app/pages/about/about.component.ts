import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

/** Just hosting the about page, not much here except the html and scss */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
