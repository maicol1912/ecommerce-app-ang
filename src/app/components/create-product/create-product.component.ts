import { addProduct } from './../../state/actions/product.actions';
import { Store } from '@ngrx/store';
import { productInterface } from './../../state/interfaceState/product.interface';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  constructor(private fb:FormBuilder,private store:Store){}

  new_product_fb = this.fb.group({
    name: this.fb.control('',[Validators.required]),
    description:this.fb.control('',[Validators.required])
  })

  onAddProduct(product:any){
    this.store.dispatch(addProduct({product}));
  }
}
