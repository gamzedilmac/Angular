import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
   return this.http.get<Product[]>("http://localhost:3000/products")
  }
}

