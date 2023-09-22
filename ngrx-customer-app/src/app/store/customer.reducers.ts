import { createReducer, on } from "@ngrx/store";
import { Customer } from "../model/customer";
import { addCustomer } from "./customer.actions";


export const customerFeatureKey = 'customer';

export interface CustomerState {
    customers: Customer[]
}

export const initialState: CustomerState = {
    customers: [{name:"Hari"}]
}

export const customerReducer=createReducer(
    initialState,
    on(addCustomer,(state:CustomerState,{customer})=>({...state,customers:[...state.customers,customer]}))
)

