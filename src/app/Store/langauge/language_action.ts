import { createAction, props } from '@ngrx/store';

export const languageAction = createAction(
  'changeLangugae',
  props<{ lang: string }>()
);
