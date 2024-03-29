import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private user_service:UserService,
              private router:Router,private message_service:MessageService,
              private cookieService:CookieService){}

  login_form = this.fb.group({
    username:this.fb.control('',[Validators.required,Validators.minLength(5)]),
    password: this.fb.control('', [Validators.required])
  })

  login(body:any){
    if(this.login_form.invalid){
      this.message_service.specifiedError("Los campos enviados no son validos","Error")
      return;
    }
    this.user_service.login(body).subscribe({
      next:(data)=>{
        this.cookieService.set('token',data.token,4,'/')

        this.message_service.specifiedSuccess("Logueo exitoso","Exitoso")
        this.router.navigate(['/dashboard-product'])
      },error:(e:HttpErrorResponse)=>{
        this.message_service.msjError(e)
      }})

  }
}
