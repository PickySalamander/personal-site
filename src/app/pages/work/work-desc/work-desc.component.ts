import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Project, WorkProjects} from "../project";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Show a description of a project that was selected from {@link WorkProjects} by the user.
 */
@Component({
  selector: 'app-work-desc',
  templateUrl: './work-desc.component.html',
  styleUrls: ['./work-desc.component.scss']
})
export class WorkDescComponent implements OnInit {
  /** The project that was selected to be displayed on the page */
  project:Project;

  constructor(private activatedRoute:ActivatedRoute,
              private sanitizer:DomSanitizer) {
  }

  ngOnInit():void {
    //get the work param from the url and then find it in the projects
    const projectName = this.activatedRoute.snapshot.params["work"];
    this.project = WorkProjects.find(value => value.link == projectName);
  }

  /** Returned a sanitized embed url to put on the page */
  get embedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.project.image);
  };
}
