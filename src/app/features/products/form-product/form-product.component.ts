import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  productForm: FormGroup;
  productToEdit: Product | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    // Si es un producto para editar, cargar los datos
    const productId = +this.router.url.split('/').pop()!;
    if (productId) {
      this.productToEdit = this.productService.getProducts().find(p => p.id === productId) || null;
      if (this.productToEdit) {
        this.productForm.patchValue(this.productToEdit);
      }
    }
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      if (this.productToEdit) {
        product.id = this.productToEdit.id;
        this.productService.updateList(product);
      } else {
        this.productService.createProduct(product);
      }
      this.router.navigate(['/products']);
    }
  }
}

