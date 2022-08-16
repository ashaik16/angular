import { createReducer, on } from '@ngrx/store';
import {
  customCounter,
  customName,
  decrement,
  increment,
  reset,
} from './counter.action';
import { initialState } from './counter.state';

export const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customCounter, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.inputCounter,
    };
  }),
  on(customName, (state) => {
    return {
      ...state,
      name: 'Modified name to anam',
    };
  })
);
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
