import { ApplicationConfig } from '@angular/core';
import { NavigationStart, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { CounterAction } from './Store/Counter_action';
import { reduceer } from './Store/counter_reducer';
import { languageReducer } from './Store/langauge/language_reducer';
import { provideEffects } from '@ngrx/effects';
import { languageEffect } from './Store/langauge/language._effect';
import { adderInterceptor } from './interceptors/interceptores/adder.interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([adderInterceptor])),
    provideStore({ counter: reduceer, language: languageReducer }),
    provideEffects([languageEffect]),
  ],
};
2;
