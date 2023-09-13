"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return this.id + " " + this.name + " " + this.salary;
    };
    return Employee;
}());
exports.Employee = Employee;
