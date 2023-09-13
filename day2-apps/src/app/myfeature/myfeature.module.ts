import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetComponent } from '../greet/greet.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GreetComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[GreetComponent,WelcomeComponent]
})
export class MyfeatureModule { }
