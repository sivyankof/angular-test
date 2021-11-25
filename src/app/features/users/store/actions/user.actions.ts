import { createAction, props } from '@ngrx/store';

export const getUsers = createAction('[Users] Get Users');
export const loadUsers = createAction(`[Users] Load Users`, props<{ users }>());
// export const getUser = createAction(`[User] Get User`, props<{ id: string }>());
