import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  products:Product[] = []
  constructor(private api_products: ProductService,private _message_service:MessageService,private router:Router){}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.api_products.getProducts().subscribe({
      next:((data:any)=>{
        this.products = data.body;
      }), error: (err: HttpErrorResponse)=>{
        this._message_service.msjError(err.error)
      }
  })
  }
  deleteProducts(){
    if(!confirm("Estas seguro que deseas eliminar los usuarios?")){
      this._message_service.specifiedError("se cancelo la operacion","Info");
    }
    this.api_products.deleteProducts().subscribe({
      next:((data:any)=>{
        this._message_service.specifiedSuccess("Eliminacion exitosa","Exitoso")
      }),error:((err:HttpErrorResponse)=>{
        this._message_service.msjError(err)
      })
    })
  }

  deleteProduct(id:number) {
    if (!confirm("Estas seguro que deseas eliminar el usuario?")) {
      this._message_service.specifiedError("se cancelo la operacion", "Info");
    }
    this.api_products.deleteProduct(id).subscribe({
      next: ((data: any) => {
        this._message_service.specifiedSuccess("Eliminacion exitosa", "Exitoso")
      }), error: ((err: HttpErrorResponse) => {
        this._message_service.msjError(err)
      }),complete:() =>{
        console.log("eliminado")
        this.router.navigate(['/dashboard'])
      }

    })
  }
}
