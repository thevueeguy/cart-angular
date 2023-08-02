import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCartComponent } from './components/mini-cart/mini-cart.component';



@NgModule({
  declarations: [
    MiniCartComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MiniCartComponent
  ]
})
export class CartModule { }
