import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

/**
 * The header bar on the website. It mostly manages the menu options that the user can use to get to other parts of
 * the site. Also, it will collapse into a hamburger drop-down when viewed on a smaller screen.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /** Storage of each menu option in the header */
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
      routerLink: "contact"
    },
    {
      text: "Resume",
      href: "/assets/resume.pdf"
    }
  ];
}

/** Internal storage of each menu option in the header */
interface MenuOption {
  /** Text to show in the option */
  text:string;

  /** A raw href url to navigate to, usually used for external sites */
  href?:string;

  /** A {@link RouterLink} to fill in on the link, if specified {@link href} will be ignored.*/
  routerLink?:string;
}
