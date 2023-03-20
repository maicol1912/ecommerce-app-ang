import { deleteCategory, loadCategories } from './../../state/actions/category.actions';
import { selectAllCategories, selectCategoryById } from './../../state/selectors/category.selector';
import { AppState } from './../../state/app.state';
import { Store } from '@ngrx/store';
import { CategoryInterface } from './../../interfaces/category.interface';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent {
  categories$:Observable<readonly CategoryInterface[]> = new Observable();

  constructor(private store:Store<AppState>){
    this.categories$ = store.select(selectAllCategories)
  }
  ngOnInit(): void {
    this.store.dispatch(loadCategories());
  }

  onDeleteProduct(categoryId:number){
    console.log(categoryId)
    this.store.dispatch(deleteCategory({categoryId}));
  }

  getProductById(categoryId:number):Observable<CategoryInterface | undefined>{
    return this.store.select(selectCategoryById(categoryId));
  }

 
}
