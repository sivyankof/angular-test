import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared-module/interface/user.interface';

export const loadUsers = createAction(`[USERS EFFECT]  Load users`);
export const loadUsersSuccess = createAction('[USERS] LOAD_USERS_SUCCESS', props<{ users: User[] }>());

export const setActivateUser = createAction('[USERS] Set Activate All Users');
export const userNonActivate = createAction('[USERS] Set Non Activate User', props<{ id: string }>());

export const loadNewUsers = createAction('[USERS EFFECT] Load New Users');
export const loadNewUsersSuccess = createAction('[USERS] Load New Users Success', props<{ users: User[] }>());

export const selectTheUserToEdit = createAction('[USERS EDIT] Select The User To Edit', props<{ id: string }>());
export const selectTheUserToEditSuccess = createAction(
    '[USERS EDIT] Select The User To Edit Success',
    props<{ user: User }>(),
);

export const updateUser = createAction('[USERS EDIT] updateUser', props<{ user: User }>());
export const createNewUser = createAction('[USERS CREATE] Create new user', props<{ user: User }>());
