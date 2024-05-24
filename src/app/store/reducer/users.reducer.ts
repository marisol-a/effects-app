import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/users.actions';
import { User } from '../../models/user.model';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  users: null,
  loaded: false,
  loading: false,
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  on(userActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(userActions.successUsersUpload, (state, { users }) => ({
    ...state,
    users: [...users],
    loading: false,
    loaded: true,
    error: null,
  })),
  on(userActions.errorUsersUpload, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: { url: payload.ur, message: payload.message, name: payload.name },
  }))
);
