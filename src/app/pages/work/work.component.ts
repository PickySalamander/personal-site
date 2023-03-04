import {Component, OnInit} from '@angular/core';
import {WorkProjects} from "./project";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  projects = WorkProjects;

  constructor() { }

  ngOnInit():void { }
}


