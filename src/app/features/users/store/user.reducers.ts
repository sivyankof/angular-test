import { createReducer, on } from '@ngrx/store';

import { loadNewUsersSuccess, loadUsersSuccess, setActivateUser, userNonActivate } from './user.actions';
import { User } from 'src/app/shared-module/interface/user.interface';

export interface IUserState {
    users: User[];
    selectedUser?: User;
}

export const initialUserState: IUserState = {
    users: null,
    selectedUser: null,
};

const reducer = createReducer(
    initialUserState,
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        users,
    })),
    on(loadNewUsersSuccess, (state, { users }) => {
        let count = 0;
        return {
            ...state,
            users: pushNewUsers(state, users, count),
        };
    }),
    on(setActivateUser, (state) => {
        return {
            ...state,
            users: state.users.map((user) => ({
                ...user,
                activated: !user.activated,
            })),
        };
    }),
    on(userNonActivate, (state, { id }) => {
        return {
            ...state,
            users: updateUsers(state, id),
        };
    }),
);

export function UserReducer(state: IUserState, action): IUserState {
    return reducer(state, action);
}

function updateUsers(state: IUserState, id: string) {
    return state.users.map((user) => {
        const copyUser = { ...user };
        user.id === id ? (copyUser.activated = false) : copyUser.activated;
        return copyUser;
    });
}

function pushNewUsers(state: IUserState, users: User[], count: number) {
    return state.users.concat(users).map((user) => {
        count++;
        const copy = { ...user };
        copy.id = count.toString();
        return copy;
    });
}
