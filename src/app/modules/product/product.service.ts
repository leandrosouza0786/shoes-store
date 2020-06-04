import { Product } from '../../shared/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  list = (category: string): Observable<Product[]> => this.http.get<Product[]>(`${this.apiUrl}?category=${category}`)
  off = (): Observable<Product[]> => this.http.get<Product[]>(`${this.apiUrl}?discount_gte=1&discount_lte=100`)
  detail = (id: string): Observable<Product> => this.http.get<Product>(`${this.apiUrl}/${id}`)
}