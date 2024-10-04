import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OfertsService } from '../../../core/services/oferts.service';
import { Oferts } from '../oferts';

@Component({
  selector: 'app-oferts-form',
  templateUrl: './oferts-form.component.html',
  styleUrls: ['./oferts-form.component.css'] // Nota: Asegúrate de que sea 'styleUrls' y no 'styleUrl'.
})
export class OfertsFormComponent implements OnInit {
  @Input() oferts: Oferts = {id:0 , title:'' , discount:0 , description:'' ,expirationDate:''}
  @Output() offerUpdated = new EventEmitter<void>();

  constructor(private offerService: OfertsService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.oferts) {
      if (this.oferts.id === 0) {
        this.offerService.addOffer(this.oferts);
      } else {
        this.offerService.updateOffer(this.oferts);
      }
      this.offerUpdated.emit();
      this.resetForm();
    }
  }

  resetForm(){
    this.oferts = {id:0 , title:'' , discount:0 , description:'' ,expirationDate:''};
  }
}
