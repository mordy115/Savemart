import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from '../../app-routing.module';

import { OrderedComponent } from './ordered/ordered.component';
import { AddressComponent } from './address/address.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { EditAddressComponent } from './address/edit-address/edit-address.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ChangePasswordComponent,
    CartComponent,

    OrderedComponent,
     AddressComponent,
     ConfirmOrderComponent,
     EditAddressComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class AuthModule { }
