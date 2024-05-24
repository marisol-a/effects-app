import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './store/reducer/index';

export interface AppState {
  users: reducers.UsersState;
  user: reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: reducers.usersReducer,
  user: reducers.userReducer,
};
