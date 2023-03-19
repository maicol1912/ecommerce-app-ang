import { enviroment } from './../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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
}
