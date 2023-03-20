import { ROOT_REDUCERS } from './state/app.state';
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
import { DashboardProductComponent } from './components/dashboard-product/dashboard-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AddTokenInterceptor } from './utils/interceptors/add-token.interceptor';
import { SpinnerInterceptor } from './utils/interceptors/spinner.interceptor';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CookieService } from 'ngx-cookie-service';
import {StoreModule} from "@ngrx/store"
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/effects/product.effects';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CategoryEffects } from './state/effects/category.effects';
import { DashboardCategoryComponent } from './components/dashboard-category/dashboard-category.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigInComponent,
    DashboardProductComponent,
    NavbarComponent,
    SpinnerComponent,
    CreateProductComponent,
    DashboardCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    ToastrModule.forRoot({timeOut: 2000}),
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name:'TEST'}),
    EffectsModule.forRoot([ProductEffects,CategoryEffects])
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AddTokenInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
