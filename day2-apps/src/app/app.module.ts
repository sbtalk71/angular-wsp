import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { MyfeatureModule } from './myfeature/myfeature.module';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent
  ],
  imports: [
    BrowserModule,
    MyfeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
