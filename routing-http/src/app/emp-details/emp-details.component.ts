import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Emp } from '../emp';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit{

  selectedId!:string;
  emp:Emp
  constructor(private _service:EmpService,private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=(id);
    });

    this._service.findEmpById(this.selectedId).subscribe(data=>this.emp=data);
  }
}
