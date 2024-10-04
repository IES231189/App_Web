import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { OfertsListComponent } from './features/oferts/oferts-list/oferts-list.component';

import { DashboardComponent } from './features/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'offers', component: OfertsListComponent },
  { path: 'offer-products', component: DashboardComponent},
  { path: '', redirectTo: '/offer-products', pathMatch: 'full' },
  { path: '**', redirectTo: '/offer-products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

