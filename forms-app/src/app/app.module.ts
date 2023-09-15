import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TdfComponent } from './tdf/tdf.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
