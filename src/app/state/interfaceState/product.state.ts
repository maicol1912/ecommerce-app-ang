import { productInterface } from "./product.interface";

export interface ProductState{
    loading:boolean;
    products:ReadonlyArray<productInterface>
}