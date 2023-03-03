import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  list:ExperienceItem[] = [
    {
      yearStart: 2022,
      name: "Self Employed",
      link: "self"
    },
    {
      yearStart: 2020,
      name: "SURJ NYC",
      link: "surj"
    },
    {
      yearStart: 2018,
      name: "Tech for Campaigns",
      link: "tfc"
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
  ]

  constructor() {
  }

  ngOnInit():void {
  }
}

interface ExperienceItem {
  yearStart:number;
  name:string;
  link:string;
}
