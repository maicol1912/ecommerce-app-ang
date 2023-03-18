import { ProductState } from './../interfaceState/product.state';
import { AppState } from './../app.state';
import {createSelector} from "@ngrx/store"
export const selectProductsFeature = (state:AppState)=> state.products

export const selectListProducts = createSelector(
    selectProductsFeature,
    (state:ProductState) => state.products
)

export const selectLoadingProducts = createSelector(
    selectProductsFeature,
    (state:ProductState)=>state.loading
)