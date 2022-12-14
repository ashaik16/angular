import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';
export const COUNTER_STATE_NAME = 'counterModule';
export const getCounterState =
  createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});
export const getName = createSelector(getCounterState, (state) => {
  return state.name;
});
