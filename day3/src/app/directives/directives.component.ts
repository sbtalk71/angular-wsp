import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  hasError:boolean=false;
  isSpecial:boolean=true;

  mystyleClasses:string=this.hasError?"error":"success";

  myInlineStyle={fontWeight:"bold",fontSize:"40px"};

  myOtherstyleClasses={
    "success":!this.hasError,
    "special":this.isSpecial,
    "error":this.hasError
  }
}
