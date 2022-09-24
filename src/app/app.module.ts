import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { FlashDealsComponent } from './components/home/flash-deals/flash-deals.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/product/search/search.component';
import { HomeComponent } from './components/home/home.component';
import {AuthModule} from './components/auth/auth.module'
import { GuardLoginService } from './Guards/Guard_login/guard-login.service';
import { CartService } from './service/cart/cart.service';
import { AuthLoginService } from './service/login/auth-login.service';
import { ProductService } from './service/product/product.service';
import { GuardchangePasswordService } from './Guards/Guard_changepassword/guardchange-password.service';



@NgModule({
  declarations: [
    AppComponent,
    NewArrivalsComponent,
    FlashDealsComponent,
    ProductComponent,
    SearchComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
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
