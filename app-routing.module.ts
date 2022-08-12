import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteguardService } from './routeguard.service';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
                        { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
                         { path: 'role', loadChildren: () => import('./role/role.module').then(m => m.RoleModule),canActivate:[RouteguardService] },
                        { path: 'price-details', loadChildren: () => import('./price-details/price-details.module').then(m => m.PriceDetailsModule) },
                        { path: 'item_Group', loadChildren: () => import('./item-group/item-group.module').then(m => m.ItemGroupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
