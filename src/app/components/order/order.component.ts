import {
  Component,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { Iproducts } from '../../models/iproducts';
import { cpSync } from 'fs';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductsComponent, DataTableComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  BoughtProdicts: Iproducts[] = [];
  count: number;
  slecectedCateforyId: number = 0;
  // recivedtotalprice: number = 0;
  catregory: Icategory[];
  constructor() {
    this.catregory = [
      { id: 1, name: 'labTops' },
      { id: 2, name: 'Phones' },
      { id: 3, name: 'Laptop' },
    ];
    this.count = 0;
  }
  @ViewChild(ProductsComponent) ProductsComponentPbject!: ProductsComponent;
  recivetotalPrice(recivedTotalPrice: any[]) {
    this.BoughtProdicts.push(recivedTotalPrice[0]);

    this.count = recivedTotalPrice[1];
    console.log(recivedTotalPrice[1]);
    return this.BoughtProdicts;
  }

  delete(i: number) {
    this.BoughtProdicts.splice(i, 1);
  }
}
