import { productInterface } from './../interfaceState/product.interface';
import {createAction,props} from "@ngrx/store"
export const loadProducts = createAction(
    '[product list] loading products'
);

export const loadedProducts = createAction(
    '[product list] loaded products successfully',
    props<{products:productInterface[]}>()
)