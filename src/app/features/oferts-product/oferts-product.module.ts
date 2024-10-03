import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertsProductListComponent } from './oferts-product-list/oferts-product-list.component';
import { OfertsProductFormComponent } from './oferts-product-form/oferts-product-form.component';



@NgModule({
  declarations: [
    OfertsProductListComponent,
    OfertsProductFormComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class OfertsProductModule { }
