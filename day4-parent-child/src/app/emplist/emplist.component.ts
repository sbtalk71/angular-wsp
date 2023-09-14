import { Component,OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Emp } from '../emp';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit{

  empdata:Emp[]=[];
  counter:number=1;

  selectedEmp!:Emp
  constructor(private _empService:EmpService){
    console.log("constructor : "+this.counter++);
  }

  ngOnInit(): void {
    this.empdata=this._empService.getEmpList();
    console.log("ngOnInit : "+this.counter++);
  }
  getEmp(emp:Emp){
    this.selectedEmp=emp;
    console.log(emp);
  }
}
