import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  message:string="";
  disableFiled:boolean=false;

  handleClick(data:string){
    this.message=data;
  }

  toggleValue(){
    this.disableFiled=this.disableFiled?false:true;
  }
}
