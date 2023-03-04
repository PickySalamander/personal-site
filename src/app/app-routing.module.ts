import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ExperienceComponent} from "./pages/experience/experience.component";
import {ExpDescriptionComponent} from "./pages/experience/exp-description/exp-description.component";
import {WorkComponent} from "./pages/work/work.component";

const routes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    children: [
      {
        path: ':job',
        component: ExpDescriptionComponent
      },
      {
        path: "**",
        redirectTo: "self"
      }
    ]
  },
  {
    path: 'projects',
    component: WorkComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
