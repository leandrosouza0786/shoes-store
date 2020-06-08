import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductOffComponent } from './product-off/product-off.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCheckoutComponent } from './product-checkout/product-checkout.component';

const routes: Routes = [
  { path: 'category/:category', component: ProductCategoryComponent },
  { path: 'offers/off', component: ProductOffComponent },
  { path: 'detail/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
