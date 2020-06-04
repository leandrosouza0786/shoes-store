import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private unsubscribe$ = new Subject();

  product: Product;

  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService
      .detail(this.activatedRoute.snapshot.params['id'])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(product => this.product = product);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
