import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private toastr:ToastrService){}

  login_form = this.fb.group({
    username:this.fb.control('',[Validators.required,Validators.minLength(5)]),
    password: this.fb.control('', [Validators.required])
  })

  addUser(body:any){
    if(this.login_form.invalid){
      this.toastr.error('Los campos son oligatorios', 'Error');
      return;
    }
    this.toastr.success("se creo el usuario con exito","Exitoso")

    console.log(body)
  }
}
