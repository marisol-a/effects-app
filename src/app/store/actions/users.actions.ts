import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction('[USERS] Load Users');
export const successUsersUpload = createAction(
  '[USERS] Success users upload',
  props<{ users: User[] }>()
);
export const errorUsersUpload = createAction(
  '[USERS] Error users upload',
  props<{ payload: any }>()
);
