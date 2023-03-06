import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  options:MenuOption[] = [
    {
      text: "About",
      routerLink: "about"
    },
    {
      text: "Experience",
      routerLink: "experience"
    },
    {
      text: "Projects",
      routerLink: "projects"
    },
    {
      text: "Contact",
      href: "mailto:thepotter782@gmail.com"
    },
    {
      text: "Resume",
      href: "/assets/resume.pdf"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface MenuOption {
  text:string;
  href?:string;
  routerLink?:string;
}
