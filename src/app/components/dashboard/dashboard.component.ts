import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  constructor(private api_products: ProductService,private message_service:MessageService){}
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.api_products.getProducts().subscribe({
      next:((data:any)=>{
        this.products = data.body;
      }), error: (err: HttpErrorResponse)=>{
        this.message_service.msjError(err.error)
      }
  })
  }
}
