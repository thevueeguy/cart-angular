import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
})
export class AddProductComponent {
  panelOpenState: boolean = false;
  constructor(private fb: FormBuilder, private productSvc: ProductService){}

  addForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required]
  })

  isFormVisible = false;

  addProduct(){
    if(this.addForm.valid){
      this.productSvc.addProduct({
        name: this.addForm.value.name || '',
        description: this.addForm.value.description || '',
        price: this.addForm.value.price ? parseFloat(this.addForm.value.price) : 0,
        quantity: this.addForm.value.quantity ? parseFloat(this.addForm.value.quantity) : 0
      })
      this.panelOpenState = false;
    }
  }
}
