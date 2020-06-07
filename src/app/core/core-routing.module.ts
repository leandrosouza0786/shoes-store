import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCheckoutComponent } from '../modules/product/product-checkout/product-checkout.component';


const routes: Routes = [
  { path: 'checkout', component: ProductCheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
