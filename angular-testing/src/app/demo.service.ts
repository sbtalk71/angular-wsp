import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  userName:string="shantanu";
  constructor() { }

public greet(){
  return "Hello "+this.userName;
}
}
