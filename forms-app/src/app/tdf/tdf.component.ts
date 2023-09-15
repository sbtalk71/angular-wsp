import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
submitted:boolean=false;


public courses=["JavaScript","java","c Sharp","Grrovy","Scala","Angular"];
public student=new Student("Shantanu","sbtalk@gmail.com",9391329788,"Java","morning",true);


onSubmit(){
  console.log("form submitted");
  console.log(this.student)
  this.submitted=true;
}
}
