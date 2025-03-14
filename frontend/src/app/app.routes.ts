import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ExperienceComponent} from "./pages/experience/experience.component";
import {ExpDescriptionComponent} from "./pages/experience/exp-description/exp-description.component";
import {WorkComponent} from "./pages/work/work.component";
import {WorkDescComponent} from "./pages/work/work-desc/work-desc.component";
import {ContactComponent} from "./pages/contact/contact.component";

export const routes:Routes = [
  {
    path: '',
    title: "Joe - Home",
    component: HomeComponent
  },
  {
    path: 'about',
    title: "Joe - About Me",
    component: AboutComponent
  },
  {
    path: 'experience',
    title: "Joe - Experience",
    component: ExperienceComponent,
    children: [
      {
        path: ':job',
        component: ExpDescriptionComponent
      },
      {
        path: "**",
        redirectTo: "allai"
      }
    ]
  },
  {
    path: 'projects',
    title: "Joe - Projects",
    component: WorkComponent
  },
  {
    path: 'projects/:work',
    title: "Joe - Projects",
    component: WorkDescComponent
  },
  {
    path: 'contact',
    title: "Joe - Contact",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];
