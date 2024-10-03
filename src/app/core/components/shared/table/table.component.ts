import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 @Input() data:any[]=[];
 @Input() columns: {field : string , header:string}[] = [];

 @Output() editItem = new EventEmitter<any>();
 @Output() deleteItem = new EventEmitter<number>();

 edit(item:any){
  this.editItem.emit(item);
 }

 delete(id:number){
  this.deleteItem.emit(id);
 }


}
