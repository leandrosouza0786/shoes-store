import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endPoint = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  list = (categorie: string): Observable<Product[]> => this.http.get<Product[]>(`${this.endPoint}?categorie=${categorie}`)
}