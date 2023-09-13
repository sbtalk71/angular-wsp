import { Employee } from "./employee";
import { TempEmployee } from "./tempEmployee";

const emp= new Employee(100,'Pavan',78000);

const temp=new TempEmployee(102,'Janaki',89000,'good');

console.log(emp.getDetails());
console.log(temp.getDetails());