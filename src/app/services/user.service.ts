import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl:string;
  private addUserUrl:string;
  private loginUrl: string;
  constructor(private http:HttpClient) {
    this.myAppUrl = enviroment.endpoint
    this.addUserUrl = 'api/users/'
    this.loginUrl = 'api/users/login'
  }

  signIn(user:User):Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.addUserUrl}`,user)
  }

  login(user:User):Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.loginUrl}`,user)
  }
}
