import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartShopService {
  
  cartSubject = new Subject<any>();
  itemBS = new BehaviorSubject<any>([]);

  Products : any[]= [];
  CartState = this.cartSubject;

  constructor(private httpclient : HttpClient) {}

  addProduct(product:any) {
    this.Products.push(product)
    this.cartSubject.next({products:  this.Products});
    this.itemBS.next({products:  this.Products})
  }

  removeProduct(id:number) {
    this.Products = this.Products.filter((item) =>  item.id !== id )
    this.cartSubject.next(<any>{products:  this.Products});
    this.itemBS.next(<any>{products:  this.Products})
  }
  
}
