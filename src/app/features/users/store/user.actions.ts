import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared-module/interface/user.interface';

export const loadUsers = createAction('[USERS EFFECT]  Load users');
export const loadUsersSuccess = createAction(
    '[USERS] LOAD_USERS_SUCCESS',
    props<{ users: User[] }>()
);

export const setActivateUser = createAction('[USERS] Set Activate All Users');
export const userNonActivate = createAction(
    '[USERS] Set Non Activate User',
    props<{ id: string }>()
);

export const loadNewUsers = createAction('[USERS EFFECT] Load New Users');
export const loadNewUsersSuccess = createAction(
    '[USERS] Load New Users Success',
    props<{ users: User[] }>()
);

export const selectUserEdit = createAction(
    '[USERS EDIT] Select User Edit',
    props<{ id: string }>()
);
export const selectUserEditSuccess = createAction(
    '[USERS EDIT] Select User Edit Success',
    props<{ user: User }>()
);

export const updateUser = createAction(
    '[USERS EDIT] updateUser',
    props<{ user: User }>()
);
export const createNewUser = createAction(
    '[USERS CREATE] Create new user',
    props<{ user: User }>()
);

export const searchUsers = createAction(
    '[USERS SEARCH] Search Users',
    props<{ data: string }>()
);
export const searchUsersSuccess = createAction(
    '[USERS SEARCH] Search Users Success',
    props<{ users: User[] }>()
);
