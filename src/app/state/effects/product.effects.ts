import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import {
    addProduct,
    loadProducts,
    loadProductsSuccess,
    productError,
    deleteProduct,
    addProductSuccess,
    deleteProductSuccess
} from '../actions/product.actions';
@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private messageService: MessageService,
        private router:Router
    ) { }

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProducts),
            mergeMap(() =>
                this.productService.getProducts().pipe(
                    map((response: any) => loadProductsSuccess({ products: response.body })),
                    catchError((error: any) => {
                        return of(productError(error))
                    })
                )
            )
        )
    );

    addProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addProduct),
            mergeMap(({ product }) =>
                this.productService.addProduct(product).pipe(
                    map((product) => addProductSuccess({ product })),
                    catchError((error: any) => {
                        return of(productError(error))
                    }),
                    tap(() => {
                        this.messageService.specifiedSuccess('product loaded successfully', "Success")
                        this.router.navigate(['/dashboard'])
                    })
                ))

        ))

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteProduct),
            mergeMap(({ productId }) =>
                this.productService.deleteProduct(productId).pipe(
                    map(() => deleteProductSuccess({ productId })),
                    catchError((error: any) => {
                        const message = 'Ha ocurrido un error al cargar los productos';
                        return of(productError(error))
                    }),
                    tap(() => {
                        this.messageService.specifiedSuccess('Product remoced successfully', "Success")
                    })
                ))
        ))
}