import { ProductState } from './../interfaceState/product.state';
import { AppState } from './../app.state';
import { createSelector } from "@ngrx/store"
export const selectProductsFeature = (state: AppState) => state.products

export const selectAllProducts = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.products
)

export const selectProductById = (productId: number) =>
    createSelector(
        selectAllProducts,(products)=>
        products.find((product)=> product.id === productId)
    )

export const selectLoadingProducts = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.loading
)