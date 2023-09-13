import {Component} from '@angular/core';

@Component({
    selector:'hello-comp',
    template: `
    <h1>This is my First {{title}} Component</h1>
    <h2>Greet : {{greet()}}</h2>
    <app-greet></app-greet>
    `,
    styles:[`h1 {
        color:red;
    }`]

})
export class HelloComponent{

     title:string="Angular";


     public greet():string{
        return "Good Evening";
     }
}