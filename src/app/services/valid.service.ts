import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ValidService {
  private myAppUrl: string;
  private validate: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint
    this.validate = 'api/validate/validate-route'
  }

  validSession():Observable<any> {
    return this.http.get(`${this.myAppUrl}${this.validate}`)
  }
}
