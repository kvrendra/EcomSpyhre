import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemGroupRoutingModule } from './item-group-routing.module';
import { ItemGroupComponent } from './item-group.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { ViewGroupComponent } from './view-group/view-group.component';


@NgModule({
  declarations: [
    ItemGroupComponent,
    AddGroupComponent,
    EditGroupComponent,
    ViewGroupComponent
  ],
  imports: [
    CommonModule,
    ItemGroupRoutingModule,
    FormsModule
  ]
})
export class ItemGroupModule { }
