import { loadCategories } from './../../state/actions/category.actions';
import { selectAllCategories } from './../../state/selectors/category.selector';
import { Observable } from 'rxjs';
import { CategoryInterface } from 'src/app/interfaces/category.interface';
import { ProductInterface } from './../../interfaces/product.interface';
import { addProduct } from './../../state/actions/product.actions';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  categories$:Observable<readonly CategoryInterface[]> = new Observable;

  constructor(private fb:FormBuilder,private store:Store<AppState>){
    this.store.dispatch(loadCategories())
    this.categories$ = this.store.select(selectAllCategories)
  }

  new_product_fb = this.fb.group({
    reference: this.fb.control('',[Validators.required]),
    name: this.fb.control('',[Validators.required]),
    description: this.fb.control('',[Validators.required]),
    value:this.fb.control(null,[Validators.required]),
    categoryId: this.fb.control(null,[Validators.required]),
  })

  onAddProduct(product:any){
    this.store.dispatch(addProduct({product}));
  }
}
