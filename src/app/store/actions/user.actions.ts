import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUser = createAction(
  '[USER] Load user',
  props<{ id: number }>()
);
export const successUserUpload = createAction(
  '[USER] Success user upload',
  props<{ user: User }>()
);
export const errorUserUpload = createAction(
  '[USER] Error user upload',
  props<{ payload: any }>()
);
