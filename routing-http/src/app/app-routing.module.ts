import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindempComponent } from './findemp/findemp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const routes: Routes = [
  {path:"emplist",component:EmplistComponent},
  {path:"add_emp",component:AddempComponent},
  {path:"emplist/:id",component:EmpDetailsComponent},
  {path:"update",component:UpdateEmpComponent},
  {path:"find",component:FindempComponent},
  {path:"hr", loadChildren:()=>import('./hr/hr.module').then(m=>m.HrModule)},
  {path:"", redirectTo:"emplist",pathMatch:'full'},
  {path:"**", component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
