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

  addProduct(_product:any) {
    console.log('in service', _product);
    this.Products.push(_product)
    this.cartSubject.next({products:  this.Products});
    this.itemBS.next({products:  this.Products})
  }
  
}
