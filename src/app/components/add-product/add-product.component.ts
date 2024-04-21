import {
  AfterContentChecked,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ApiProductsService } from '../../service/api-products.service';
import { Iproducts } from '../../models/iproducts';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit, OnDestroy {
  product: Iproducts = {} as Iproducts;
  products: Iproducts[] = [];
  productState!: boolean;
  categories: any[] = [] as Icategory[];
  currindeID!: number;
  constructor(
    private apieServer: ApiProductsService,
    private roruter: Router,
    private ActiveRoutet: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.apieServer.getAllcategories().subscribe({
      next: (res: any) => {
        this.categories = res;
      },
    });
    this.apieServer.getAllProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
    });
    if (
      this.apieServer.state.subscribe({
        next: (res) => {
          res == true;
        },
      })
    ) {
      const subscription = this.ActiveRoutet.paramMap.subscribe(
        (parammap): any => {
          this.currindeID = Number(parammap.get('id'));
          if (Number(parammap.get('id'))) {
            this.apieServer.getProductById(this.currindeID).subscribe({
              next: (res) => {
                console.log('this shouid not be prented');
                this.product = res;
                this.apieServer.state.next(true);
              },
              error: (err) => {},
            });
          } else {
            this.apieServer.state.next(false);
          }
        }
      );
    }
  }

  addProduct(product: Iproducts): any {
    this.apieServer.addProduct(product).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
        this.roruter.navigateByUrl('/products');
      },
      error: () => {},
    });
  }

  update(product: Iproducts) {
    this.apieServer.UpdateProduct(product.id, product).subscribe({
      next: (res) => {
        //this oberavable changes values from true to false only if you  came from Update product buuton the
        this.apieServer.state.next(false);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product Updated Successfuly',
          showConfirmButton: false,
          timer: 1500,
        });
        this.roruter.navigateByUrl('/products');
      },
    });
  }

  ngOnDestroy(): void {
    this.apieServer.state.next(false);
  }
}
