import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string;
  private getProductUrl: string;
  private deleteProductUrl:string;
  private addProductUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint
    this.getProductUrl = 'api/products/'
    this.deleteProductUrl = 'api/products/delete'
    this.addProductUrl = 'api/products/add'
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.myAppUrl}${this.getProductUrl}`)
  }
  addProduct(body:any):Observable<Product>{
    return this.http.post<Product>(`${this.myAppUrl}${this.addProductUrl}`,body)
  }
  deleteProduct(id:number):Observable<unknown>{
    return this.http.delete(`${this.myAppUrl}${this.deleteProductUrl}/${id}`)
  }
}
