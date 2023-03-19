import { loadCategories, loadCategoriesSucess } from './../actions/category.actions';
import { CategoryState } from './../interfaceState/category.state';
import { createReducer, on } from "@ngrx/store"
export const initialState: CategoryState = { loading: false, categories: [] }

export const categoryReducer = createReducer(
    initialState,
    on(loadCategories, (state) => {
        return { ...state, loading: true }
    }),
    on(loadCategoriesSucess,(state,{categories})=>{
        return {...state,categories:categories}
    })
    
)