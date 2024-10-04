import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosOfertaService {
  private localStorageKey = 'productosOferta';

  constructor() { }


  getProductosOferta(): {
    productId: number, offerId: number }[] {
    const relations = localStorage.getItem(this.localStorageKey);
    return relations ? JSON.parse(relations) : [];

  }

  addProductoToOffer(productId: number, offerId: number): void {
    const relations = this.getProductosOferta();
    relations.push({ productId, offerId });
    this.updateLocalStorage(relations);
  }


  getProductsByOffer(offerId: number): number[] {
    return this.getProductosOferta()
      .filter(relation => relation.offerId === offerId)
      .map(relation => relation.productId);
  }

  removeProductoFromOffer(productId: number, offerId: number): void {
    const relations = this.getProductosOferta()
      .filter(relation => !(relation.productId === productId && relation.offerId === offerId));
    this.updateLocalStorage(relations);
  }


  private updateLocalStorage(relations: { productId: number, offerId: number }[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(relations));
  }


}

