import { CategoryInterface } from "src/app/interfaces/category.interface";

export interface CategoryState{
    loading:boolean;
    categories:ReadonlyArray<CategoryInterface>
}