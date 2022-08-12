import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormBuilder,ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
  LoginComponent
  ],
  imports: [
    CommonModule,
    //FormBuilder,
    ReactiveFormsModule,
    FormsModule,
    
    LoginRoutingModule
  ]
})
export class LoginModule { }
