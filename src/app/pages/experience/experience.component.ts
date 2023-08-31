import {Component} from '@angular/core';
import {ExpDescriptionComponent} from "./exp-description/exp-description.component";
import {RouterLink} from "@angular/router";

/**
 * This controls the experience page that shows all the jobs I've had over the years. It's pretty much a direct copy
 * from my resume, but with an interactive timeline where the user can click on start years and see what I was doing
 * then.
 *
 * @see ExpDescriptionComponent
 */
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  /** List of items to put on the experience page, the text for each is in the {@link ExpDescriptionComponent} */
  list:ExperienceItem[] = [
    {
      yearStart: 2022,
      name: "Self Employed",
      link: "self"
    },
    {
      yearStart: 2013,
      name: "Sciolytix",
      link: "sciolytix"
    },
    {
      yearStart: 2011,
      name: "Kuma Reality Games",
      link: "kuma"
    },
    {
      yearStart: 2009,
      name: "BrandGames",
      link: "brandgames"
    },
    {
      yearStart: 2008,
      name: "Rebel Monkey",
      link: "rebelmonkey"
    }
  ];
}

/** An element to put on the timeline of the experience page */
interface ExperienceItem {
  /** The start year of the job */
  yearStart:number;

  /** The name of the job */
  name:string;

  /** The {@link RouterLink} to the description of the job page */
  link:string;
}
