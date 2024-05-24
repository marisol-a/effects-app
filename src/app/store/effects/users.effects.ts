import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import * as userActions from '../../store/actions/users.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => userActions.successUsersUpload({ users: [...users] })),
          catchError((error) =>
            of(userActions.errorUsersUpload({ payload: error }))
          )
        )
      )
    )
  );
}
