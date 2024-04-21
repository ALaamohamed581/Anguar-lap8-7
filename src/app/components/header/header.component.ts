import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAutenticationServiceService } from '../../service/user-autentication-service.service';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../service/api-products.service';
import { fail } from 'assert';
import { Observable } from 'rxjs';
import { languageAction } from '../../Store/langauge/language_action';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isUseraLoggedIN!: boolean;
  productStatus!: boolean;
  counter: Observable<number>;
  language: Observable<string>;
  lang!: string;
  constructor(
    private iserAuthneticationService: UserAutenticationServiceService,
    public apiServer: ApiProductsService,
    private store: Store<{ counter: number; language: string }>
  ) {
    this.counter = this.store.select('counter');
    this.language = this.store.select('language');
    this.language.subscribe((leng) => {
      console.log(this.lang, '<--this lang');
      console.log(leng, '<--- just laneg');
      this.lang = leng;
    });
  }

  ngOnInit(): void {
    this.apiServer.state.subscribe((obs) => {
      this.productStatus = obs;
    });

    // this.isUserLogge = this.iserAuthneticationService.getUserLogged();
    this.iserAuthneticationService.getAuthSubject().subscribe({
      next: (status) => {
        this.isUseraLoggedIN = status;
      },
    });
  }
  changeLang() {
    this.store.dispatch(
      languageAction({ lang: this.lang == 'en' ? 'ar' : 'en' })
    );
  }
}
