import { CategoryInterface } from './../../interfaces/category.interface';
import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction(
    '[Categories] loading categories'
);

export const loadCategoriesSucess = createAction(
    '[Categories] loaded categories success',
    props<{categories:CategoryInterface[]}>()
);

export const addCategory = createAction(
    '[Categories] add category',
    props<{category:CategoryInterface}>()
)

export const addCategorySuccess = createAction(
    '[Categories] add category success',
    props<{category:CategoryInterface}>()
)

export const deleteCategory = createAction(
    '[Categories] delete category',
    props<{categoryId:number}>()
)

export const deleteCategorySuccess = createAction(
    '[Categories] delete category success',
    props<{categoryId:number}>()
)
export const categoryError = createAction('[Categories] Error', props<Error>());