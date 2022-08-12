import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { PrivilagesComponent } from './privilages/privilages.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';


@NgModule({
  declarations: [
    RoleComponent,
    AddRoleComponent,
    PrivilagesComponent,
    ViewRoleComponent,
  
    EditRoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
