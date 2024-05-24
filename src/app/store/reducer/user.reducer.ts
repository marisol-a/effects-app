import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import { User } from '../../models/user.model';

export interface UserState {
  id: number;
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  id: undefined,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.loadUser, (state, { id }) => ({
    ...state,
    id,
    loading: true,
  })),
  on(userActions.successUserUpload, (state, { user }) => ({
    ...state,
    user: { ...user },
    loading: false,
    loaded: true,
    error: null,
  })),
  on(userActions.errorUserUpload, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.ur, message: payload.message, name: payload.name },
  }))
);
