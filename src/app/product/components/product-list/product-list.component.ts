import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    @Input()
    products: Product[] = [];

    constructor(private productSvc: ProductService){}

    ngOnInit(){
      this.productSvc.products$.subscribe({
        next: (productsFromStorage) => {
          this.products = productsFromStorage;
        }
      })
    }
}
