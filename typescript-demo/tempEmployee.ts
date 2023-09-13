import { Employee } from "./employee";

export class TempEmployee extends Employee{

    constructor( id:number,name:string,salary:number,private performance:string){
        super(id,name,salary);

    }

    public override getDetails(): string {
        return super.getDetails()+" "+this.performance;
    }
}