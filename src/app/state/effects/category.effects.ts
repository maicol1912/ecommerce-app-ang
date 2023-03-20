import { CategoryService } from './../../services/category.service';
import { loadCategories, loadCategoriesSucess, categoryError, addCategory, addCategorySuccess, deleteCategory, deleteCategorySuccess } from './../actions/category.actions';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
@Injectable()
export class CategoryEffects {
    constructor(
        private actions$: Actions,
        private categoriesService: CategoryService,
        private router:Router,
        private messageService:MessageService
    ) { }

    loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCategories),
            mergeMap(() =>
                this.categoriesService.getCategories().pipe(
                    map((response: any) => loadCategoriesSucess({ categories: response.body })),
                    catchError((error: any) => {
                        return of(categoryError(error))
                    })
                )
            )
        )
    );

    addCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addCategory),
            mergeMap(({ category }) =>
                this.categoriesService.addCategory(category).pipe(
                    map((product) => addCategorySuccess({ category })),
                    catchError((error: any) => {
                        return of(categoryError(error))
                    }),
                    tap(() => {
                        this.messageService.specifiedSuccess('categorys loaded successfully', "Success")
                        this.router.navigate(['/dashboard'])
                    })
                ))

        ))

        deleteCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteCategory),
            mergeMap(({ categoryId }) =>
                this.categoriesService.deleteCategory(categoryId).pipe(
                    map(() => deleteCategorySuccess({ categoryId })),
                    catchError((error: any) => {
                        const message = 'Ha ocurrido un error al cargar los productos';
                        return of(categoryError(error))
                    }),
                    tap(() => {
                        this.messageService.specifiedSuccess('category removed successfully', "Success")
                    })
                ))
        ))
}