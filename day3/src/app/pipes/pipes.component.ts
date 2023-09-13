import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  employee={
    id:100,name:"Pankaj",slalry:70000,location:'Hyderabad'
  }

  date:Date=new Date()
}
