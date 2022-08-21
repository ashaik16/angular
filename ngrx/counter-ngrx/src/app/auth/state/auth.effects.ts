import { exhaustMap, map } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService';
import { loginStart, loginSuccess } from 'src/app/auth/state/auth.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { sharedloadingAction } from 'src/app/state/shared/shared.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(sharedloadingAction({ status: false }));
            const user = this.authService.formatUser(data);
            return loginSuccess({ user });
          })
        );
      })
    );
  });
}
