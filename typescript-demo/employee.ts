export class Employee{

constructor(private id:number, private name:string,private salary:number){

}

public getDetails(): string{
    return this.id+" "+this.name+" "+this.salary;
}
}