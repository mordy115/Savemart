import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/auth/cart/cart.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { OrderedComponent } from './components/auth/ordered/ordered.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/product/search/search.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { GuardchangePasswordService } from './Guards/Guard_changepassword/guardchange-password.service';
import { GuardLoginService } from './Guards/Guard_login/guard-login.service';
import { AddressComponent } from './components/auth/address/address.component';
import { ConfirmOrderComponent } from './components/auth/confirm-order/confirm-order.component';
import { EditAddressComponent } from './components/auth/address/edit-address/edit-address.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'cart' ,component:CartComponent},
  {path:'product/:id' ,component:ProductComponent},
  {path:'search' ,component:SearchComponent},
  {path:'login' ,component:LoginComponent , canActivate:[GuardLoginService]},
  {path:'register' ,component:RegisterComponent , canActivate:[GuardLoginService]},
  {path:'change_password' ,component:ChangePasswordComponent,canActivate:[GuardchangePasswordService]},
  {path:'ordered' ,component:OrderedComponent},
  {path:'address' ,component:AddressComponent,canActivate:[GuardchangePasswordService]},
  {path:'confirmOrder' ,component:ConfirmOrderComponent,canActivate:[GuardchangePasswordService]},
  {path:'editaddress/:id' ,component:EditAddressComponent,canActivate:[GuardchangePasswordService]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
