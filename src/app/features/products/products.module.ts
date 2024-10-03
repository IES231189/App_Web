import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations:[FormProductComponent , ProductListComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
  ] , exports:[
     FormProductComponent,
     ProductListComponent
  ]
})
export class ProductsModule { }
