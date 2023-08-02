import { Attribute, Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule]
})
export class ProductItemComponent {
  @Input()
  productItem: Product | null = null;

  constructor(private cartSvc: CartService){}  

  addToCart(){
    if(this.productItem){
      this.cartSvc.addToCart(this.productItem);
    }
  }
}
