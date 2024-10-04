import { Component } from '@angular/core';
import { Oferts } from '../oferts';
import { OfertsService } from '../../../core/services/oferts.service';

declare var window: any;

@Component({
  selector: 'app-oferts-list',
  templateUrl: './oferts-list.component.html',
  styleUrl: './oferts-list.component.css'
})
export class OfertsListComponent {
  offers: Oferts[] = [];
  selectedOffer: Oferts | null = null;

  modal : any;

  columns = [
    { field: 'id', header: 'ID' },
    { field: 'title', header: 'Título'},
    { field: 'discount', header: 'Descuento (%)' },
    { field: 'description', header: 'Descripción' },
    { field: 'expirationDate', header: 'Fecha de Expiración' }
  ];

  constructor(private offerService: OfertsService) { }

  ngOnInit(): void {
    this.modal = new window.bootstrap.Modal(document.getElementById('ofertsModal'))
    this.offers = this.offerService.getOffers();
  }

  loadOffers(): void {
    this.offers = this.offerService.getOffers();
  }

  openModal() {
    this.modal.show();
  }

  onEditOffer(offer: Oferts): void {
    this.selectedOffer = { ...offer};
    this.openModal();
  }

  onDeleteOffer(offerId: number): void {
    this.offerService.deleteOffer(offerId);
    this.loadOffers();
  }

}
