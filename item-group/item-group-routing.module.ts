import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { ItemGroupComponent } from './item-group.component';
import { ViewGroupComponent } from './view-group/view-group.component';

const routes: Routes = [
{ path: 'itemgroup', component: ItemGroupComponent },
{ path: 'addgroup', component: AddGroupComponent },
{ path: 'viewgroup', component: ViewGroupComponent},
{ path: 'editgroup/:id', component: EditGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemGroupRoutingModule {


  delete(id:any){}
 }
