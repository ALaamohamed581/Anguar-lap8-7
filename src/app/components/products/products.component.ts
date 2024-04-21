import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Iproducts } from '../../models/iproducts';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

import { SquarePipe } from '../../pipes/square.pipe';
import { UserNamePipe } from '../../pipes/user-name.pipe';
import { DeduceBirthDatePipe } from '../../pipes/deduce-birth-date.pipe';
import { HighlightCardDirective } from '../../directive/highlight-card.directive';
import { CredtCardPipe } from '../../pipes/credt-card.pipe';
import { EventEmitter } from '@angular/core';
import { StaticPorductService } from '../../service/static-porduct.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiProductsService } from '../../service/api-products.service';
import { error } from 'console';
import { environment } from '../../../environments/environment.development';
import { rmSync } from 'fs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule,
    HighlightCardDirective,
    FormsModule,
    SquarePipe,
    UserNamePipe,
    DeduceBirthDatePipe,
    CredtCardPipe,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  //define event
  @Output() onTotalPriceChanged: EventEmitter<any>;
  products!: Iproducts[];
  fillteredProducts: Iproducts[];
  totlOrderPrice = 0;
  @Input() recivedCategoryId: number = 0;
  num: number = 4;
  @ViewChild('usernamee') myInput!: ElementRef;
  currentIndex!: number;
  constructor(
    private _staticProductService: StaticPorductService,
    private _seriveceRouter: Router,
    private apiProduct: ApiProductsService
  ) {
    this.onTotalPriceChanged = new EventEmitter<any>();
    this.fillteredProducts = this.products;
  }

  buy(counnt: string, price: number, index: number) {
    this.products[index].quntity -= +counnt;

    this.totlOrderPrice += +counnt * price;
    this.onTotalPriceChanged.emit([this.products[index], counnt]);
  }
  change() {
    // if (this.slecectedCateforyId < 3) {
    //   this.slecectedCateforyId += 1;
    // } else {
    //   this.slecectedCateforyId = 1;
    // }
  }
  ngOnInit(): void {
    this.apiProduct.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products);
        this.fillteredProducts = this.products;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  trackProduvt(index: number, item: Iproducts) {
    return item.id;
  }

  // fillterproducts() {
  //   if (this.recivedCategoryId == 0) {
  //     this.fillteredProducts = this.products;
  //   } else {
  //     this.fillteredProducts = this.products.filter(
  //       (el) => el.catId == this.recivedCategoryId
  //     );
  //   }
  // }
  navigateToDateil(i: number) {
    this._seriveceRouter.navigateByUrl(`/details/${i}`);
  }
  updateCurrentProduct(i: number) {
    this._seriveceRouter.navigateByUrl(`/ADDProduct/${i}`);
  }
  remove(i: number) {
    this.currentIndex = this.products.findIndex((el) => el.id == i);
    this.products.splice(this.currentIndex, 1);
    this.apiProduct
      .deleterProduct(i)
      .subscribe({ next: (res) => console.log(this.products) });
  }
}
