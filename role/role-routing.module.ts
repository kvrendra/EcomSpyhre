import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { PrivilagesComponent } from './privilages/privilages.component';
import { ViewRoleComponent } from './view-role/view-role.component';


const routes: Routes = [{ path: 'role', component: RoleComponent },
{ path: 'add-role', component: AddRoleComponent },
{ path: 'edit-role/:id', component: EditRoleComponent },
{ path: 'privilages', component: PrivilagesComponent },
{ path: 'view-role', component:ViewRoleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
