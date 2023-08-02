import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];
  private productsSubject$: BehaviorSubject<Product[]> = new BehaviorSubject(this.getFromStorage());
  products$ = this.productsSubject$.asObservable();

  getFromStorage(){
    const productsFromStorage = sessionStorage.getItem('products');
    if(productsFromStorage){
      this.products = JSON.parse(productsFromStorage);    
    } 
    return this.products
  }

  setToStorage(){
    sessionStorage.setItem('products', JSON.stringify(this.products));
  }

  constructor() {
    // this.productsSubject$.next(this.products);
   }

  getProducts(){
    return this.products;
  }

  addProduct(product: Omit<Product, 'id'>){
    this.products = [...this.products, {
      ...product,
      id: 1
    }];
    this.setToStorage();
    console.log(this.products)
    this.productsSubject$.next(this.products);
  }
}
