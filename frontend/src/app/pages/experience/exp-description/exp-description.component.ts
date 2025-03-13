import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";
import {ExperienceComponent} from "../experience.component";

/**
 * Display the description of each job on the experience timeline.
 *
 * @see ExperienceComponent
 */
@Component({
    selector: 'app-exp-description',
    templateUrl: './exp-description.component.html',
    styleUrls: ['./exp-description.component.scss']
})
export class ExpDescriptionComponent implements OnDestroy {
  /** The selected job that should be displayed, works with a switch statement on the page */
  job:string;

  /** Subscription that listens for route changes. */
  private subscription:Subscription;

  constructor(private activatedRoute:ActivatedRoute) {
    //listen for changes in the route parameters
    this.subscription = this.activatedRoute.params.subscribe(params => this.setup(params));
  }

  ngOnDestroy() {
    //unsubscribe when the page is changed and we no longer need to listen
    this.subscription?.unsubscribe();
  }

  /**
   * Called when the page params change. The url will look like https://website.com/experience/job, this will take "job"
   * and feed it into a switch statement on the page that has the exact copy for each.
   * @param params the page parameters
   */
  private setup(params:Params) {
    this.job = params["job"];
  }
}
