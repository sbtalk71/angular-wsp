import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState, customerFeatureKey } from "./customer.reducers";

export const selectCustomerstate=createFeatureSelector<CustomerState>(customerFeatureKey);

export const selectCustomers=createSelector(
    selectCustomerstate,
    (state:CustomerState)=>state.customers
);