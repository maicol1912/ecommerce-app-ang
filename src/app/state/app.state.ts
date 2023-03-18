import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "./interfaceState/product.state";
import { productsReducer } from "./reducers/product.reducer";

export interface AppState{
    products:ProductState
}

export const ROOT_REDUCERS:ActionReducerMap<AppState>= {
    products:productsReducer
}