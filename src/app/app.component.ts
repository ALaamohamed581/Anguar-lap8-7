import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { OrderComponent } from './components/order/order.component';
import { Title } from '@angular/platform-browser';
import { json } from 'stream/consumers';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { languageReducer } from './Store/langauge/language_reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    CommonModule,
    DataTableComponent,
    OrderComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lec2';
  language$: Observable<string>;
  dir: string = 'ltr';
  constructor(
    private titleService: Title,
    private store: Store<{ language: string }>
  ) {
    this.titleService.setTitle($localize`${this.title}`);
    this.language$ = this.store.select('language');

    this.language$.subscribe((lang) => {
      this.dir = lang == 'en' ? 'ltr' : 'rtl';
    });
  }
}
