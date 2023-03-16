import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ValidService } from './services/valid.service';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService, private validService:ValidService){}

  redirect(flag:boolean):any{
    if(!flag){

    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this.cookieService.check('token')
    this.validService.validSession().subscribe({
      next: ((response: any) => {
      }), error: ((err: HttpErrorResponse) => {
        this.router.navigate(['/', 'login'])
        return;
      })
    })
    return cookie;
  }

}
