import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PrivilageModule } from './privilage/privilage.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule} from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteguardService } from './routeguard.service';
import { RoleModule } from './role/role.module';
import { PriceDetailsModule } from './price-details/price-details.module';
import { ItemdetailsModule } from './itemdetails/itemdetails.module';
import { ItemGroupModule } from './item-group/item-group.module';
import { SocialLoginModule } from 'angularx-social-login';






@NgModule({
  declarations: [
    AppComponent,
   



  ],
  imports: [
    BrowserModule,
    RoleModule,
    PriceDetailsModule,
    PrivilageModule,
    ItemGroupModule,
    SocialLoginModule,

    ItemdetailsModule,
    LoginModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [RouteguardService,],
  bootstrap: [AppComponent]
})
export class AppModule { }




