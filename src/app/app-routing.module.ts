import { DashboardCategoryComponent } from './components/dashboard-category/dashboard-category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SigInComponent } from './components/sig-in/sig-in.component';
import { DashboardProductComponent } from './components/dashboard-product/dashboard-product.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'create-product',component:CreateProductComponent,canActivate:[VigilanteGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signIn',component:SigInComponent
  },
  {
    path:'dashboard-product',component:DashboardProductComponent
  },
  {
    path:'dashboard-category',component:DashboardCategoryComponent
  },
  {
    path:'**',redirectTo:'login',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
