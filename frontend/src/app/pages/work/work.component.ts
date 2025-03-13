import {Component} from '@angular/core';
import {WorkProjects} from "./project";
import {WorkDescComponent} from "./work-desc/work-desc.component";
import {RouterLink} from "@angular/router";

/**
 * Host the work page that displays important projects that I've worked on. Each project's details are stored in
 * {@link WorkProjects}.
 *
 * @see WorkDescComponent
 */
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  imports: [
    RouterLink
  ],
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  /** All the projects to display on the page */
  projects = WorkProjects;
}


