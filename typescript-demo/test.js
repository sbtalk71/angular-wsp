"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
var tempEmployee_1 = require("./tempEmployee");

var emp = new employee_1.Employee(100, 'Pavan', 78000);
var temp = new tempEmployee_1.TempEmployee(102, 'Janaki', 89000, 'good');
console.log(emp.getDetails());
console.log(temp.getDetails());
