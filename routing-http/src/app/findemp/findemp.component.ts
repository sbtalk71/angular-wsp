import { Component } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-findemp',
  templateUrl: './findemp.component.html',
  styleUrls: ['./findemp.component.css']
})
export class FindempComponent {

  emp!:Emp;
  errorMessage:string="";
  constructor(private _service:EmpService){}

  findEmp(id:string){
    this._service.findEmpById(id).subscribe({
      next: (data)=>this.emp=data,
      error: (err)=>{this.errorMessage=err.status;},
      complete: ()=>console.log("completed")
    });
  }
}
