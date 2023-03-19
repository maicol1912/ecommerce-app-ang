import { ProductInterface } from "src/app/interfaces/product.interface"; 

export interface ProductState{
    loading:boolean;
    products:ReadonlyArray<ProductInterface>
}