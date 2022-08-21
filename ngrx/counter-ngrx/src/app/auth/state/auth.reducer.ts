import { createReducer, on } from '@ngrx/store';

import { loginSuccess } from './auth.action';
import { initialAuthState } from './auth.state';

const _authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);
export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
