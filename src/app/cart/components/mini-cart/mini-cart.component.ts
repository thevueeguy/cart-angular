import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent {
  price = 0;
  numberOfItems = 0;
  constructor(private cartSvc: CartService){}

  ngOnInit(){
    console.log("working")
    this.cartSvc.cart$.subscribe({
      next: (cart) => {
        this.price = cart.total;
        this.numberOfItems = cart.items.length;
      }
    })
  }
}
