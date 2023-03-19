import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { ProductInterface } from '../interfaces/product.interface';

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

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.myAppUrl}${this.getProductUrl}`)
  }
  addProduct(body:any):Observable<ProductInterface>{
    return this.http.post<ProductInterface>(`${this.myAppUrl}${this.addProductUrl}`,body)
  }
  deleteProduct(id:number):Observable<unknown>{
    return this.http.delete(`${this.myAppUrl}${this.deleteProductUrl}/${id}`)
  }
}
