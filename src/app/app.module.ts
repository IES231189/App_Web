import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { FormProductComponent } from './features/products/form-product/form-product.component';
import { OfertsListComponent } from './features/oferts/oferts-list/oferts-list.component';
import { OfertsFormComponent } from './features/oferts/oferts-form/oferts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    ProductListComponent,
    FormProductComponent,
    OfertsListComponent,
    OfertsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
