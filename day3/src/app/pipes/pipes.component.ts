import { Component } from '@angular/core';
import {UpperCasePipe} from '@angular/common'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  

})
export class PipesComponent {

  title="demo for pipes";
  constructor(private uppercase:UpperCasePipe){
    this.title=uppercase.transform(this.title);
  }
  employee={
    id:100,name:"Pankaj",slalry:70000,location:'Hyderabad'
  }

  date:Date=new Date()
}
