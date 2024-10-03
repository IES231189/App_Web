import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../../core/services/product.service';

declare var window: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit{
  products: Product[] = [];

  columns = [
    {field:'id' , header: 'ID'},
    {field:'name' , header:'Nombre'},
    {field:'price' , header:'Precio'},
    {field:'description' , header:'description'},
    {field:'quantify' , header:'Cantidad'}
  ];

  constructor(private productService: ProductService){}

  modal:any;

  ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.modal = new window.bootstrap.Modal(document.getElementById('productModal'))
  }

  openModal(){
    this.modal.show();
  }

  onDeleteProduct(productId : number):void{
    this.productService.deleteProduct(productId);
    this.productService.getProducts();
  }

  onEditProduct(productId : number):void{

  }

  Add(){

  }

}
