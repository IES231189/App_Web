import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent implements OnInit {
  @Input() product: Product = { id: 0, name: '', price: 0, description: '', quantify: 0 };
  @Output() productUpdated = new EventEmitter<void>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.product.id === 0) {
      this.productService.createProduct(this.product);

    } else {
      this.productService.updateList(this.product);
    }
    this.productUpdated.emit();
    this.resetForm();

  }

  resetForm(): void {
    this.product = { id: 0, name: '', price: 0, description: '', quantify: 0 };
  }


  closeModal (){}

}

