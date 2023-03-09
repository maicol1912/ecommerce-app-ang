import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor(private fb:FormBuilder,private _message_service:MessageService,
              private _product_service:ProductService,private router:Router){}

  new_product_fb = this.fb.group({
    name: this.fb.control('',[Validators.required]),
    description:this.fb.control('',[Validators.required])
  })

  createProduct(body:any){
    if(this.new_product_fb.invalid){
      this._message_service.specifiedError("el formulario no es valido","Error")
    }
    this._product_service.AddProduct(body).subscribe({
      next:((response)=>{
        console.log(response)
        this.router.navigate(['/dashboard'])
      }),error:((err:HttpErrorResponse)=>{
        this._message_service.msjError(err)
        console.log(err)
      })
    })


  }
}
