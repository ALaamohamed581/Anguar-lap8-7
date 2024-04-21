import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticPorductService } from '../../service/static-porduct.service';
import { Iproducts } from '../../models/iproducts';
import { ApiProductsService } from '../../service/api-products.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  AllProducts: Iproducts[] = [];
  idsArra: number[] = [];
  url: number = 0;
  currentIdIndex: number = 0;
  prodduct: any;
  currentId: number = 0;
  constructor(
    private router: ActivatedRoute,
    private _prodcts: StaticPorductService,
    private _locations: Location,
    private _seriveceRouter: Router,
    private apiProductService: ApiProductsService
  ) {
    this.apiProductService.getAllProducts().subscribe({
      next: (res) => {
        this.AllProducts = res;
      },
    });
  }
  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap) => {
      this.currentId = Number(paramMap.get('id'));
      this.apiProductService.getProductById(this.currentId).subscribe({
        next: (res) => {
          this.prodduct = res;
        },
      });
    });
  }
  GoBack() {
    this._locations.back();
  }
  next(ID: number) {
    this.idsArra = this.AllProducts.map((el) => el.id);

    this.currentIdIndex = this.idsArra.findIndex((el) => el == ID);
    if (this.currentIdIndex != this.idsArra.length - 1) {
      this._seriveceRouter.navigateByUrl(
        `/details/${this.idsArra[this.currentIdIndex + 1]}`
      );
    }
  }
  previous(ID: number) {
    this.idsArra = this.AllProducts.map((el) => el.id);
    this.currentIdIndex = this.idsArra.findIndex((el) => el == ID);
    if (this.currentIdIndex != 0) {
      this._seriveceRouter.navigateByUrl(
        `/details/${this.idsArra[this.currentIdIndex - 1]}`
      );
    }
  }
}
