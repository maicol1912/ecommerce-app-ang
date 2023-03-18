import { loadProducts, loadProductsSuccess, addProduct, deleteProduct, addProductSuccess, deleteProductSuccess } from './../actions/product.actions';
import { ProductState } from './../interfaceState/product.state';
import { createReducer, on } from "@ngrx/store"
export const initialState: ProductState = { loading: false, products: [] }

export const productsReducer = createReducer(
    initialState,
    on(loadProductsSuccess, (state, { products }) => {
        return { ...state, loading: false, products: products }
    }),
    on(addProductSuccess, (state, { product }) => {
        return {
            ...state,
            products: [...state.products, product]
        }
    }),
    on(deleteProductSuccess, (state, { productId }) => {
        return {
            ...state,
            products: state.products.filter((product) => product.id != productId)
        }
    })
)