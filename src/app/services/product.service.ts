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
  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint
    this.getProductUrl = 'api/products/'
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.myAppUrl}${this.getProductUrl}`)
  }

}
