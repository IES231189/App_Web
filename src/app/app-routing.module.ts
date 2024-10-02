import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { OfertsListComponent } from './features/oferts/oferts-list/oferts-list.component';
import { OfertsProductListComponent } from './features/oferts-product/oferts-product-list/oferts-product-list.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'offers', component: OfertsListComponent },
  { path: 'offer-products', component: OfertsProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

