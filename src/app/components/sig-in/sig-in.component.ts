import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'src/app/services/message.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.scss']
})
export class SigInComponent {
  constructor(private fb:FormBuilder, private toastr: ToastrService,
    private user_service: UserService, private router: Router, private message_service: MessageService){}

  signIn_form = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    password2: this.fb.control('', [Validators.required])
  })

  addUser(body: any) {
    if (this.signIn_form.invalid) {
      this.toastr.error('Los campos son oligatorios', 'Error');
      return;
    }
    this.user_service.signIn(body).subscribe({
      next: (data) => {

        const token = data.token
        localStorage.setItem('token', token)
        this.message_service.msjSuccess(data)
        this.router.navigate(['/dashboard'])
      }, error: (e: HttpErrorResponse) => {
        this.message_service.msjError(e)
        console.error(e.error)
      }
    })

    this.user_service.signIn(body).subscribe(data=>{
      this.toastr.success(data.message, "Exitoso")
      console.log(data)
    })


    console.log(body)
  }
}
