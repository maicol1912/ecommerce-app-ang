import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modulos
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr"
import { MatInputModule } from '@angular/material/input';
//componentes
import { LoginComponent } from './components/login/login.component';
import { SigInComponent } from './components/sig-in/sig-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/interceptors/add-token.interceptor';
import { SpinnerInterceptor } from './utils/interceptors/spinner.interceptor';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigInComponent,
    DashboardComponent,
    NavbarComponent,
    SpinnerComponent,
    CreateProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot({
      timeOut: 2000,
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AddTokenInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
