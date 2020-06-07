import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductService } from './product.service';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOffComponent } from './product-off/product-off.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';


@NgModule({
  declarations: [ProductCategoryComponent, ProductDetailComponent, ProductOffComponent, ProductCheckoutComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
