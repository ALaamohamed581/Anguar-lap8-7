import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { languageAction } from './language_action';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class languageEffect {
  saveLang = createEffect(
    () =>
      this.action.pipe(
        ofType(languageAction),
        tap((action) => {
          localStorage.setItem('lang', action.lang);
        }, ofType())
      ),
    { dispatch: false }
  );

  constructor(private action: Actions) {}
}
