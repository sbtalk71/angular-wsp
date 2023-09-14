import { Component,Input } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {

  @Input() emp!:Emp
  
}
