import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Iproducts } from '../models/iproducts';
import { environment } from '../../environments/environment.development';
import { json } from 'express';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  idsarr!: number[];
  prducts!: Iproducts[];
  state: BehaviorSubject<boolean>;
  constructor(private _server: HttpClient) {
    this.state = new BehaviorSubject<boolean>(false);
  }

  getAllProducts(): Observable<Iproducts[]> {
    return this._server.get<Iproducts[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id: number): Observable<Iproducts> {
    return this._server.get<Iproducts>(`${environment.baseUrl}/products/${id}`);
  }
  getAllProductBYCtaID(catID: number) {
    return this._server.get<Iproducts[]>(
      `${environment.baseUrl}/products/?catId=${catID}`
    );
  }
  addProduct(body: any) {
    return this._server.post(` ${environment.baseUrl}/products`, body);
  }
  deleterProduct(id: number) {
    return this._server.delete(`${environment.baseUrl}/products/${id}`);
  }
  UpdateProduct(id: number, body: Iproducts) {
    return this._server.patch(` ${environment.baseUrl}/products/${id}`, body);
  }
  getAllcategories() {
    return this._server.get(` ${environment.baseUrl}/catrogines`);
  }
}
