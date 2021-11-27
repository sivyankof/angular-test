import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared-module/interface/user.interface';

export const getUsers = createAction('[USERS] GET_USERS');
export const getUser = createAction(`[USERS] Get User`, props<{ id: string }>());

export const loadUsers = createAction(`[USERS] Load users`);
export const loadUsersSuccess = createAction('[USERS] LOAD_USERS_SUCCESS', props<{ users: User[] }>());

export const setActivateUser = createAction('[USERS] Set Activate All Users');
export const userNonActivate = createAction('[USERS] Set Non Activate User', props<{ id: string }>());

export const loadNewUsers = createAction('[USERS] Load New Users');
export const loadNewUsersSuccess = createAction('[USERS] Load New Users Success', props<{ users: User[] }>());
