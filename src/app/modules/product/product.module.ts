import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { ListarComponent } from './listar/listar.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
