import { CategoryInterface } from './../../interfaces/category.interface';
import { createAction, props } from '@ngrx/store';

export const loadCategories = createAction(
    '[Categories] loading categories'
);

export const loadCategoriesSucess = createAction(
    '[Categories] loaded categories success',
    props<{categories:CategoryInterface[]}>()
);

export const categoryError = createAction('[Categories] Error', props<Error>());