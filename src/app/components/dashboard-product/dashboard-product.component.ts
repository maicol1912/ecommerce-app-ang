import { loadProducts, addProduct, deleteProduct } from '../../state/actions/product.actions';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { selectAllProducts, selectProductById } from '../../state/selectors/product.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit{
  products$:Observable<readonly ProductInterface[]> = new Observable();

  constructor(private store:Store<AppState>){
    this.products$ = store.select(selectAllProducts)
  }
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  onDeleteProduct(productId:number){
    this.store.dispatch(deleteProduct({productId}));
  }

  getProductById(productId:number):Observable<ProductInterface | undefined>{
    return this.store.select(selectProductById(productId));
  }
}
