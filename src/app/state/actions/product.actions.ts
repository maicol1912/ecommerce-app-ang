import { productInterface } from './../interfaceState/product.interface';
import {createAction,props} from "@ngrx/store"
export const loadProducts = createAction(
    '[product] loading products'
);

export const loadProductsSuccess = createAction(
    '[product] loaded products successfully',
    props<{products:productInterface[]}>()
)

export const addProduct = createAction(
    '[Product] add Task',
    props<{product:productInterface}>()
)

export const addProductSuccess = createAction(
    '[Product] add Task success',
    props<{product:productInterface}>()
)

export const deleteProduct = createAction(
    '[Product] delete Task',
    props<{productId:number}>()
)

export const deleteProductSuccess = createAction(
    '[Product] delete Task success',
    props<{productId:number}>()
)

export const productError = createAction('[Product API] Error', props<Error>());