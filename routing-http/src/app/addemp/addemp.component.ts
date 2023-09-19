import { Component } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  emp:Emp={empId:100,name:"",salary:1,city:""};

constructor(private _service:EmpService){}

  onSubmit(){
    console.log(this.emp)
    this._service.addEmp(this.emp).subscribe(data=>console.log(data))
  }
}
