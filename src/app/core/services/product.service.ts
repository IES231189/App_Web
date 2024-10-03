import { Injectable } from '@angular/core';
import { Product } from '../../features/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private storageKey = 'products'
  constructor() { }


  getProducts(): Product[] {
    const products = localStorage.getItem(this.storageKey);
    return products ? JSON.parse(products) : [];
  }


  createProduct(product:Product):void{
     const products = this.getProducts();
     product.id = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
     products.push(product);
     localStorage.setItem(this.storageKey , JSON.stringify(products))
  }

  updateList(updatedProduct :Product):void{
    let products = this.getProducts();
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = updatedProduct;
      localStorage.setItem(this.storageKey, JSON.stringify(products));
    }
  }

  deleteProduct(productId: number): void {
    let products = this.getProducts();
    products = products.filter(p => p.id !== productId);
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

}
