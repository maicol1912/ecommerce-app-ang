import { ProductInterface } from "src/app/interfaces/product.interface"; 
import {createAction,props} from "@ngrx/store"
export const loadProducts = createAction(
    '[product] loading products'
);

export const loadProductsSuccess = createAction(
    '[product] loaded products successfully',
    props<{products:ProductInterface[]}>()
)

export const addProduct = createAction(
    '[Product] add Product',
    props<{product:ProductInterface}>()
)

export const addProductSuccess = createAction(
    '[Product] add Product success',
    props<{product:ProductInterface}>()
)

export const deleteProduct = createAction(
    '[Product] delete Product',
    props<{productId:number}>()
)

export const deleteProductSuccess = createAction(
    '[Product] delete Product success',
    props<{productId:number}>()
)

export const productError = createAction('[Product] Error', props<Error>());