import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomerState } from '../store/customer.reducers';
import { addCustomer } from '../store/customer.actions';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor(private store:Store<{customer:CustomerState}>){

  }
  addCustomer(name1:string){
    this.store.dispatch(addCustomer({name:name1}))
  }
}
