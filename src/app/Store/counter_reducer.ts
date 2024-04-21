import { createReducer, on } from '@ngrx/store';
import { CounterAction, Decrease } from './Counter_action';
import { state } from '@angular/animations';

let initieState = 0;
export const reduceer = createReducer(
  initieState,
  on(CounterAction, (state) => {
    return state + 1;
  }),
  on(Decrease, (state) => state - 1)
);
