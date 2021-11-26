import { createReducer, on } from '@ngrx/store';

import { getUsers, loadUsers, loadUsersSuccess } from '../actions/user.actions';
import { IUser } from '../interface';

export interface State {
    users: IUser[];
}
const initialUserState: State = {
    users: [],
};

const reducer = createReducer(
    initialUserState,
    on(getUsers, (state) => ({
        ...state,
    })),
    on(loadUsers, (state) => ({
        ...state,
    })),
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        users,
    })),
);

export function UserReducer(state: State, action): State {
    return reducer(state, action);
}
