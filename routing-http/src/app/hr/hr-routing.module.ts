import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetupComponent } from './meetup/meetup.component';
import { ApraisalComponent } from './apraisal/apraisal.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      { path: "meetup", component: MeetupComponent },
      { path: "apraisal", component: ApraisalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
