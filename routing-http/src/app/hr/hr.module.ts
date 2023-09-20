import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HomeComponent } from './home/home.component';
import { MeetupComponent } from './meetup/meetup.component';
import { ApraisalComponent } from './apraisal/apraisal.component';


@NgModule({
  declarations: [
    HomeComponent,
    MeetupComponent,
    ApraisalComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule
  ]
})
export class HrModule {
  constructor() {
    console.log("HR Module now loaded..")
  }
}
