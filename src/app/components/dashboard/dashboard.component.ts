import { loadProducts, addProduct, deleteProduct } from './../../state/actions/product.actions';
import { productInterface } from './../../state/interfaceState/product.interface';
import { selectAllProducts, selectProductById } from './../../state/selectors/product.selector';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  products$:Observable<readonly productInterface[]> = new Observable();

  constructor(private store:Store<AppState>){
    this.products$ = store.select(selectAllProducts)
  }
  ngOnInit(): void {
    this.store.dispatch(loadProducts());
  }

  onDeleteProduct(productId:number){
    this.store.dispatch(deleteProduct({productId}));
  }

  getProductById(productId:number):Observable<productInterface | undefined>{
    return this.store.select(selectProductById(productId));
  }
}
