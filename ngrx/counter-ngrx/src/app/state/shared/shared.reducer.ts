import { createReducer, on } from '@ngrx/store';
import { sharedloadingAction } from './shared.action';
import { initialSharedState } from './shared.state';

const _sharedReducer = createReducer(
  initialSharedState,
  on(sharedloadingAction, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  })
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
