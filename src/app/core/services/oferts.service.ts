import { Injectable } from '@angular/core';
import { Oferts } from '../../features/oferts/oferts';

@Injectable({
  providedIn: 'root'
})
export class OfertsService {
  private localStorageKey = 'offers';

  constructor() { }


  getOffers():Oferts[]{
    const offers = localStorage.getItem(this.localStorageKey);
    return offers ? JSON.parse(offers) : [];
  }

  addOffer(offer: Oferts): void {
    const offers = this.getOffers();
    offer.id = offers.length > 0 ? offers[offers.length - 1].id + 1 : 1;
    offers.push(offer);
    localStorage.setItem(this.localStorageKey, JSON.stringify(offers));
  }

  updateOffer(updatedOffer: Oferts): void {
    let offers = this.getOffers();
    offers = offers.map(offer => (offer.id === updatedOffer.id ? updatedOffer : offer));
    localStorage.setItem(this.localStorageKey, JSON.stringify(offers));
  }

  deleteOffer(offerId: number): void {
    let offers = this.getOffers();
    offers = offers.filter(offer => offer.id !== offerId);
    localStorage.setItem(this.localStorageKey, JSON.stringify(offers));
  }

  getOfferById(offerId: number): Oferts | undefined {
    const offers = this.getOffers();
    return offers.find(offer => offer.id === offerId);
  }

}
