import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { FindempComponent } from './findemp/findemp.component';
import { AddempComponent } from './addemp/addemp.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemohHeadersInterceptor } from './demo-headers.interceptor';
import { MyloggerInterceptor } from './mylogger.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    FindempComponent,
    AddempComponent,
    UpdateEmpComponent,
    PageNotFoundComponent,
    EmpDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DemohHeadersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: MyloggerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log("App Module Loaded...")
  }

}
