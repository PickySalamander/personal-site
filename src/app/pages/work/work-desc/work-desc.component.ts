import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {Project, WorkProjects} from "../project";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-work-desc',
  templateUrl: './work-desc.component.html',
  styleUrls: ['./work-desc.component.scss']
})
export class WorkDescComponent implements OnInit {
  project:Project;

  private projects:Map<string, Project> = new Map<string, Project>();
  private subscription:Subscription;


  constructor(private activatedRoute:ActivatedRoute,
              private sanitizer:DomSanitizer) {
    for(const project of WorkProjects) {
      this.projects.set(project.link, project);
    }

    this.subscription = this.activatedRoute.params.subscribe(params => this.setup(params));
  }

  ngOnInit():void {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private setup(params:Params) {
    const projectName = params["work"];
    this.project = this.projects.get(projectName);
  }

  get embedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.project.image);
  };
}
