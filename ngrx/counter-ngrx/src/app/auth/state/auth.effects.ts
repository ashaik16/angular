import { exhaustMap, map } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService';
import { loginStart, loginSuccess } from 'src/app/auth/state/auth.action';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            return loginSuccess();
          })
        );
      })
    );
  });
}
