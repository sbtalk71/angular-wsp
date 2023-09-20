import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmpService } from '../emp.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empdata!:Emp[];

  constructor(private _empService:EmpService,private router: Router){

  }
  ngOnInit(): void {
    console.log("ngOnInit triggered");
    this.loadEmpList();
  }
loadEmpList(){
  this._empService.getEmpList().subscribe((data)=>this.empdata=data);
}
  deleteEmp(id:number){
    this._empService.deleteEmp(id).subscribe(data=>console.log(data));
    this.loadEmpList();
  }

  handleNavigation(id:number){
      this.router.navigate(["emplist",id]);
  }
}
