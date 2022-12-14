import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customCounter = createAction(
  'customCounter',
  props<{ inputCounter: number }>()
);
export const customName = createAction('customName');
