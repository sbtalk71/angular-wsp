import { Component } from '@angular/core';
import { Emp } from '../emp';
import { EMPDATA } from '../emp-mock-data';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {

  empdata:Emp[]=EMPDATA;

  selectedEmp!:Emp

  getEmp(emp:Emp){
    this.selectedEmp=emp;
    console.log(emp);
  }
}
