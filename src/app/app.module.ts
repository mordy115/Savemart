import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { CartComponent } from './components/cart/cart.component';
import { FlashDealsComponent } from './components/home/flash-deals/flash-deals.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/product/search/search.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { OrderedComponent } from './components/ordered/ordered.component';
import { GuardLoginService } from './Guards/Guard_login/guard-login.service';
import { CartService } from './service/cart/cart.service';
import { AuthLoginService } from './service/login/auth-login.service';
import { ProductService } from './service/product/product.service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { GuardchangePasswordService } from './Guards/Guard_changepassword/guardchange-password.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NewArrivalsComponent,
    CartComponent,
    FlashDealsComponent,
    ProductComponent,
    SearchComponent,
    RegisterComponent,
    LoginComponent,
    OrderedComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GuardLoginService,
    GuardchangePasswordService,
    CartService,
    AuthLoginService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
