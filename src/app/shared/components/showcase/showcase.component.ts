import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartShopService } from 'src/app/core/services/cart-shop.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  @Input() product: Product;
  constructor(private  cartShop : CartShopService) { }

  ngOnInit(): void {
  }

  cartAdd(product){
    this.cartShop.addProduct(product)
  }

}
