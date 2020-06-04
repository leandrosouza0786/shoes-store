import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
