import { CategoryService } from './../../services/category.service';
import { loadCategories, loadCategoriesSucess, categoryError } from './../actions/category.actions';
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
        private router:Router
    ) { }

    loadProducts$ = createEffect(() =>
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

    
}