import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations:[FormProductComponent , ProductListComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ProductsModule { }
