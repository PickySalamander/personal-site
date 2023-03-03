import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-exp-description',
  templateUrl: './exp-description.component.html',
  styleUrls: ['./exp-description.component.scss']
})
export class ExpDescriptionComponent implements OnInit, OnDestroy {
  job:string;

  private subscription:Subscription;

  constructor(private activatedRoute:ActivatedRoute) {
    this.subscription = this.activatedRoute.params.subscribe(params => this.setup(params));
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private setup(params:Params) {
    this.job = params["job"];
  }
}
