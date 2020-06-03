import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../product.service';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private unsubscribe$ = new Subject();

  products: Product[];

  constructor(
    private productService: ProductService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  changeCategory() {
    this.productService
      .list(this.activatedRoute.snapshot.params['category'])
      .subscribe(products => this.products = products);
  }
  
  ngOnInit(): void {
    this.changeCategory();
    this.router.events
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((event) => {
        if(event instanceof NavigationEnd) this.changeCategory();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
