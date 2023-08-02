import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddProductComponent,
    ProductItemComponent
  ],
  exports: [
    ProductListComponent,
    AddProductComponent
  ]
})
export class ProductModule { }
