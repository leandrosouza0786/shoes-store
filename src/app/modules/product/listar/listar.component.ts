import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService
      .list(this.activatedRoute.snapshot.params['categorie'])
      .subscribe(products => this.products = products);
  }

}
