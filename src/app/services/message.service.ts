import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) { }

  msjError(e: HttpErrorResponse) {
    if (e.error) {
      this.toastr.error(e.error.message, 'Error');
    } else {
      this.toastr.error('Upps ocurrio un error, comuniquese con el administrador', 'Error');
    }
  }

  msjSuccess(body:any) {
    this.toastr.success(body.message,'Exitoso')
  }

  specifiedSuccess(message:string,title:string) {
    this.toastr.success(message, title)
  }

  specifiedError(message: string, title: string) {
    this.toastr.error(message, title)
  }
}
