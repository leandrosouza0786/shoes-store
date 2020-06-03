import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: 'list/:category', component: ListarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
