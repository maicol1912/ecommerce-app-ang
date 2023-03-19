import { categoryReducer } from './reducers/category.reducer';
import { CategoryState } from './interfaceState/category.state';
import { ActionReducerMap } from "@ngrx/store";
import { ProductState } from "./interfaceState/product.state";
import { productsReducer } from "./reducers/product.reducer";

export interface AppState{
    products:ProductState,
    categories:CategoryState

}

export const ROOT_REDUCERS:ActionReducerMap<AppState>= {
    products:productsReducer,
    categories:categoryReducer
}