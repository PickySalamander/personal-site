import {Component, OnInit} from '@angular/core';

/** Silly component that just says the current amount of years I've been in the field */
@Component({
  selector: 'app-years',
  imports: [],
  template: '{{years}}'
})
export class YearsComponent implements OnInit {
  years:number;

  ngOnInit():void {
    //diff the years!
    const diff = new Date().getTime() - new Date(2008, 9).getTime();
    this.years = Math.floor(diff / 3.154e+10);
  }
}
