import { CategoryInterface } from 'src/app/interfaces/category.interface';
import { Observable } from 'rxjs';
import { enviroment } from './../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private myAppUrl: string;
  private getCategoryUrl: string;
  private deleteCategoryUrl:string;
  private addCategoryUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint
    this.getCategoryUrl = 'api/categories/'
    this.deleteCategoryUrl = 'api/categories/delete'
    this.addCategoryUrl = 'api/categories/add'
  }

  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(`${this.myAppUrl}${this.getCategoryUrl}`)
  }
  addCategory(body:any):Observable<CategoryInterface>{
    return this.http.post<CategoryInterface>(`${this.myAppUrl}${this.addCategoryUrl}`,body)
  }
  deleteCategory(id:number):Observable<unknown>{
    return this.http.delete(`${this.myAppUrl}${this.deleteCategoryUrl}/${id}`)
  }
}
