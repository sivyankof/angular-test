import { createReducer, on } from '@ngrx/store';

import { getUsers, loadUsers } from '../actions/user.actions';
import { IUser } from '../interface';

interface State {
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
    on(loadUsers, (state, { users }) => ({
        ...state,
        users,
    })),
);

export function UserReducer(state: State, action): State {
    return reducer(state, action);
}
