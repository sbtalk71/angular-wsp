import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Customer } from '../model/customer';
import { Store, select } from '@ngrx/store';
import { CustomerState } from '../store/customer.reducers';
import { selectCustomers } from '../store/customer.selectors';

@Component({
  selector: 'app-veiw-customer',
  templateUrl: './veiw-customer.component.html',
  styleUrls: ['./veiw-customer.component.css']
})
export class VeiwCustomerComponent {

  customers$:Observable<Customer[]>;

  constructor(private store:Store<{customer:CustomerState}>){

    this.customers$=this.store.pipe(select(selectCustomers));
  }

}
