import { Injectable } from '@angular/core';
import { Emp } from './emp';
import { EMPDATA } from './emp-mock-data';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private empdata: Emp[] = EMPDATA;

  constructor() { }

  getEmpList(): Emp[] {
    return this.empdata;
  }
}
