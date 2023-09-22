import { createAction } from "@ngrx/store";
import { Customer } from "../model/customer";

export const addCustomer=createAction(
    '[Customer] add Customer',
    (customer:Customer)=>({customer})
)