import { Injectable } from '@angular/core';
import { Iproducts } from '../models/iproducts';

@Injectable({
  providedIn: 'root',
})
export class StaticPorductService {
  products: Iproducts[];
  constructor() {
    this.products = [];
  }
  getAllProducts() {
    return this.products;
  }
  getProductByID(id: number): Iproducts | null {
    let foundedProducy = this.products.find((pro) => {
      return pro.id == id;
    });
    return foundedProducy ? foundedProducy : null;
  }
  getprodcutsByCategoryId(catID: number): Iproducts[] {
    if (catID == 0) {
      return this.products;
    }
    return this.products.filter((pro) => pro.catId == catID);
  }
  mapProductsToIds(): number[] {
    return this.products.map((el) => el.id);
  }
}
