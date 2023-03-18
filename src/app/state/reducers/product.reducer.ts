import { loadProducts, loadedProducts } from './../actions/product.actions';
import { ProductState } from './../interfaceState/product.state';
import {createReducer,on} from "@ngrx/store"
export const initialState:ProductState = {loading:false,products:[]}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts,(state)=>{
        return {...state,loading:true}
    }),
    on(loadedProducts,(state,{products})=>{
        return {...state,loading:false,products:products}
    })
)