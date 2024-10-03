import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertsFormComponent } from './oferts-form/oferts-form.component';
import { OfertsListComponent } from './oferts-list/oferts-list.component';
import { CoreModule } from '../../core/core.module';



@NgModule({
  declarations: [OfertsFormComponent , OfertsListComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class OfertsModule { }
