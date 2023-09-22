import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './store/customer.reducers';
import { VeiwCustomerComponent } from './veiw-customer/veiw-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiwCustomerComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({customer:customerReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
