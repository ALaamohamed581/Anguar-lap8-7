import { createReducer, on } from '@ngrx/store';
import { languageAction } from './language_action';
import { stat } from 'fs';

const initelvalue = 'en';

export const languageReducer = createReducer(
  initelvalue,
  on(languageAction, (state, action) => action.lang)
);
