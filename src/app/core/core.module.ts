import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { TableComponent } from './components/shared/table/table.component';



@NgModule({
  declarations: [SidebarComponent, TableComponent],
  imports: [
    CommonModule,AppRoutingModule
  ],
  exports:[
    SidebarComponent,
    TableComponent
  ]
})
export class CoreModule { }
