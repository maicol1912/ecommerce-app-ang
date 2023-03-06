import { Component } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.scss']
})
export class SigInComponent {
  constructor(private fb:FormBuilder, private toastr: ToastrService,private user_service:UserService){}

  signIn_form = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required])
  })

  addUser(body: any) {
    if (this.signIn_form.invalid) {
      this.toastr.error('Los campos son oligatorios', 'Error');
      return;
    }
    this.user_service.signIn(body).subscribe(data=>{

    })
    this.toastr.success("se creo el usuario con exito", "Exitoso")

    console.log(body)
  }
}
