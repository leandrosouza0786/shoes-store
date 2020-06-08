import { Component, OnInit } from '@angular/core';
import { CartShopService } from 'src/app/core/services/cart-shop.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.scss']
})
export class ProductCheckoutComponent implements OnInit {

  products: any[];
  private subscription: Subscription;

  constructor(private cartShop: CartShopService) { }

  ngOnInit(): void {
   this.subscription = this.cartShop.itemBS
       .subscribe((state: any) =>
       {this.products = state.products},
      (err) => console.log("err", err));
  }

  removeItem(item){
    this.cartShop.removeProduct(item)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
