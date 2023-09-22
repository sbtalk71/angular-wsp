import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MycounterComponent } from './mycounter/mycounter.component';
import { reducer } from './store/counter.reducers';
import { CounterChildComponent } from './counter-child/counter-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MycounterComponent,
    CounterChildComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count:reducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
