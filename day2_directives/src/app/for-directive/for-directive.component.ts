import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent {

  fruits:string[]=["apple","banana","pear","Guava","orange","mango"];

  personData:Person[]=[
    {id:100,name:'Karan'}
  ];
  
  isAdmin:boolean=true;
  color:string="no_color";

  onSelect(color:string){
    console.log("color changed to.."+color);
    this.color=color;
  }
}
