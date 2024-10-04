import { Component, OnInit } from '@angular/core';
import { OfertsService } from '../../core/services/oferts.service';
import { ProductService } from '../../core/services/product.service';
import { ProductosOfertaService } from '../../core/services/productos-oferta.service';

import { Oferts } from '../oferts/oferts';
import { Product } from '../products/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  offers: Oferts[] = [];
  products: Product[] = [];
  selectedOfferProducts: Product[] = [];
  selectedOffer: Oferts | null = null;
  selectedProductId: number | null = null;

  constructor(
    private offerService: OfertsService,
    private productService: ProductService,
    private productosOfertaService: ProductosOfertaService
  ) {}

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
    this.products = this.productService.getProducts();
  }


  loadOfferProducts(offer: Oferts): void {
    const productIds = this.productosOfertaService.getProductsByOffer(offer.id);
    this.selectedOfferProducts = this.products.filter(product => productIds.includes(product.id));
  }


  onViewProducts(offer: Oferts): void {
    this.selectedOffer = offer;
    this.loadOfferProducts(offer);
  }

  addProductToOffer(): void {
    if (this.selectedProductId && this.selectedOffer) {
      this.productosOfertaService.addProductoToOffer(this.selectedProductId, this.selectedOffer.id);
      this.loadOfferProducts(this.selectedOffer);
      this.selectedProductId = null;
      window.alert('Producto Agregado')
    }
  }


  removeProductFromOffer(productId: number): void {
    if (this.selectedOffer) {
      this.productosOfertaService.removeProductoFromOffer(productId, this.selectedOffer.id);
      this.loadOfferProducts(this.selectedOffer);
    }
  }
}
