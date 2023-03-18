import { loadedProducts } from './../../state/actions/product.actions';
import { productInterface } from './../../state/interfaceState/product.interface';
import { selectListProducts } from './../../state/selectors/product.selector';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store"
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  products$:Observable<any> = new Observable();

  constructor(private api_products: ProductService,private _message_service:MessageService,
              private router:Router,private store:Store<AppState>){}
  ngOnInit(): void {
    this.products$ = this.store.select(selectListProducts)
    this.getProducts()
  }

  getProducts(){
    this.api_products.getProducts().subscribe(
      ((response:any)=>{
        this.store.dispatch(loadedProducts(
          {products:response.body}
        ))
      })
  )
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
