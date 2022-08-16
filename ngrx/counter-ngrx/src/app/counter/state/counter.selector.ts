import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const getCounterState =
  createFeatureSelector<CounterState>('counterModule');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
export const getName = createSelector(getCounterState, (state) => {
  return state.name;
});
