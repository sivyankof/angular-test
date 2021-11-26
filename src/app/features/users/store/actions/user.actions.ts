import { createAction, props } from '@ngrx/store';
import { IUser } from '../interface';

export const getUsers = createAction('GET_USERS');
export const getUser = createAction(`[User] Get User`, props<{ id: string }>());
export const loadUsers = createAction(`LOAD_USER`);
export const loadUsersSuccess = createAction('LOAD_USERS_SUCCESS', props<{ users: IUser[] }>());
