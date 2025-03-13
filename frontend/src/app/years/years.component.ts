import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-years',
  imports: [],
  template: '{{years}}'
})
export class YearsComponent implements OnInit {
  years:number;

  ngOnInit():void {
    const diff = new Date().getTime() - new Date(2008, 9).getTime();
    this.years = Math.floor(diff / 3.154e+10);
  }
}
