import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  courseNames:string[]=["Java","Python","Scala","Ruby","C Sharp"];

  public regForm:FormGroup=new FormGroup({
    studentName:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    phone:new FormControl(''),
    courseName:new FormControl('')
  })

  get studentName(){
    return this.regForm.get('studentName');
  }

 
  public onSubmit(){
    console.log(this.regForm.value);
  }
}
