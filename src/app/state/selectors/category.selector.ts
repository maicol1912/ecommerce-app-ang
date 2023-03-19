import { CategoryState } from './../interfaceState/category.state';
import { AppState } from './../app.state';
import { createSelector } from "@ngrx/store"
export const selectCategoriesFeature = (state: AppState) => state.categories

export const selectAllCategories = createSelector(
    selectCategoriesFeature,
    (state: CategoryState) => state.categories
)

export const selectProductById = (categoryId: number) =>
    createSelector(
        selectAllCategories,(categories)=>
        categories.find((category)=> category.id === categoryId)
    )

export const selectLoadingProducts = createSelector(
    selectCategoriesFeature,
    (state: CategoryState) => state.loading
)