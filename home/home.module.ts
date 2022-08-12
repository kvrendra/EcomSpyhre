import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';



import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchboxPipe } from './searchbox.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    SearchboxPipe
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
  // SearchboxPipe,

    HomeRoutingModule,


  ]
})
export class HomeModule { }
