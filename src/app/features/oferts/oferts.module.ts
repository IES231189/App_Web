import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertsFormComponent } from './oferts-form/oferts-form.component';
import { OfertsListComponent } from './oferts-list/oferts-list.component';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsModule } from "../products/products.module";



@NgModule({
  declarations: [OfertsFormComponent , OfertsListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    ProductsModule
]
})
export class OfertsModule { }
