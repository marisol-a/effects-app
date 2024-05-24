import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import * as userActions from '../../store/actions/user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUser),
      mergeMap((action) =>
        this.userService.getUserById(action.id).pipe(
          map((user) => userActions.successUserUpload({ user: { ...user } })),
          catchError((error) =>
            of(userActions.errorUserUpload({ payload: error }))
          )
        )
      )
    )
  );
}
