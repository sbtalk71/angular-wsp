import { Address } from "./address";

export class Employee{

constructor(private id:number, private name:string,private salary:number,private address:Address){

}

public getDetails(): string{
    return this.id+" "+this.name+" "+this.salary;
}
}