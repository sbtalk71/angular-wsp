import { createAction } from "@ngrx/store";


export const increment=createAction('[MyCounter] increment');

export const decrement=createAction('[MyCounter] decrement');

export const reset=createAction('[MyCounter] reset');