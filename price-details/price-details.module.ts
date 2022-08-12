import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { PriceDetailsRoutingModule } from './price-details-routing.module';
import { PriceDetailsComponent } from './price-details.component';
import { ViewPriceDetailsComponent } from './view-price-details/view-price-details.component';
import { AddPriceDetailsComponent } from './add-price-details/add-price-details.component';
import { EditPriceDetailsComponent } from './edit-price-details/edit-price-details.component';


@NgModule({
  declarations: [
    PriceDetailsComponent,
    ViewPriceDetailsComponent,
    AddPriceDetailsComponent,

    
    EditPriceDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PriceDetailsRoutingModule
  ]
})
export class PriceDetailsModule { }
