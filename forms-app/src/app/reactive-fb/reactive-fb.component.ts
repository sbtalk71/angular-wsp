import {
    Component, OnInit
}
from '@angular/core';
import {
    FormGroup, FormBuilder, FormArray, Validators
}
from '@angular/forms';
import { forbiddenNameValidator } from '../forbiddenName.validator';

@Component({ selector: 'app-reactive-fb', templateUrl: './reactive-fb.component.html', styleUrls: ['./reactive-fb.component.css'] }) export class ReactiveFbComponent implements OnInit {

    courseNames: string[]=["Java","Python","Scala","Ruby","C Sharp"];

    public regForm: FormGroup;

    constructor(private fb:FormBuilder) {}
    ngOnInit():void {
        this.initForm();
    }
    initForm() {
        this.regForm= this.fb.group({ 
          studentName:['',[Validators.required,forbiddenNameValidator(/bob/i)]],
           email:[''], 
           phone:[''],
           courseName:[''],
          references:this.fb.array([this.fb.control('')]) })
    }

    get studentName() {
        return this.regForm.get('studentName');
    }

    get references():FormArray{
      return this.regForm.get('references') as FormArray;
    }


    removeEmail(index:number){
      this.references.removeAt(index);
    }

    addEmail(){
      this.references.push(this.fb.control(''));
    }

    public onSubmit() {
        console.log(this.regForm.value);
    }
}
