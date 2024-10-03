import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../../core/services/product.service';

declare var window: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  selectedProduct: Product | null = null ;

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Nombre' },
    { field: 'price', header: 'Precio' },
    { field: 'description', header: 'description' },
    { field: 'quantify', header: 'Cantidad' }
  ];

  constructor(private productService: ProductService) { }


  modal: any;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products)
    this.modal = new window.bootstrap.Modal(document.getElementById('productModal'))
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }


  openModal() {
    this.modal.show();
  }

  closeModal(): void {
    this.modal.hide();
  }


  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    this.productService.getProducts();
  }


  onEditProduct(product:Product): void {
    this.openModal()
    this.selectedProduct= { ...product };
  }


}
