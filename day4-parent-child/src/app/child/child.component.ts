import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() parentData:string='';

 @Output() public childEvent=new EventEmitter();

 greetMessage:string=''

 fireEvent(){
  this.childEvent.emit("Greetings from Child");
 }


 getData(){
  this.greetMessage="Greet Message : "+this.parentData;
 }


}
