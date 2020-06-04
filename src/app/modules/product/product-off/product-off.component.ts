import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-product-off',
  templateUrl: './product-off.component.html',
  styleUrls: ['./product-off.component.scss']
})
export class ProductOffComponent implements OnInit {

  private unsubscribe$ = new Subject();

  products: Product[];

  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService
      .off()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(products => this.products = products);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
