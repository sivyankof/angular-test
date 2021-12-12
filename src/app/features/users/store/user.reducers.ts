import { createReducer, on } from '@ngrx/store';

import {
    createNewUser,
    loadNewUsersSuccess,
    loadUsersSuccess,
    searchUsersSuccess,
    selectUserEditSuccess,
    setActivateUser,
    updateUser,
    userNonActivate,
} from './user.actions';
import { User } from 'src/app/shared-module/interface/user.interface';

export interface IUserState {
    users: User[];
    selectedUser: User;
}

export const initialUserState: IUserState = {
    users: null,
    selectedUser: null,
};

const reducer = createReducer(
    initialUserState,
    on(loadUsersSuccess, (state, { users }) => ({
        ...state,
        users: SERVICE.setAllUsers(state, users),
    })),
    on(loadNewUsersSuccess, (state, { users }) => {
        let count = 0;
        return {
            ...state,
            users: SERVICE.loadNewUsers(state, users, count),
        };
    }),
    on(setActivateUser, (state) => ({
        ...state,
        users: SERVICE.setActivateAllUsers(state),
    })),
    on(userNonActivate, (state, { id }) => ({
        ...state,
        users: SERVICE.updateNonActiveUsers(state, id),
    })),
    on(selectUserEditSuccess, (state, { user }) => ({
        ...state,
        selectedUser: user,
    })),
    on(updateUser, (state, { user }) => ({
        ...state,
        users: SERVICE.updateOneUser(state, user),
    })),
    on(createNewUser, (state, { user }) => ({
        ...state,
        users: [...state.users, user],
    })),
    on(searchUsersSuccess, (state, { users }) => ({
        ...state,
        users,
    }))
);

export function UserReducer(state: IUserState, action): IUserState {
    return reducer(state, action);
}

const SERVICE = {
    updateNonActiveUsers(state: IUserState, id: string) {
        return state.users.map((user) => {
            const copyUser = { ...user };
            user.id === id ? (copyUser.activated = false) : copyUser.activated;
            return copyUser;
        });
    },

    loadNewUsers(state: IUserState, users: User[], count: number) {
        return state.users.concat(users).map((user) => {
            count++;
            const copy = { ...user };
            copy.id = count.toString();
            return copy;
        });
    },

    setActivateAllUsers(state: IUserState) {
        return state.users.map((user: User) => ({
            ...user,
            activated: !user.activated,
        }));
    },

    setAllUsers(state: IUserState, users: User[]) {
        return !state.users ? users : state.users;
    },

    updateOneUser(state: IUserState, user: User) {
        return state.users.map((curUser) => {
            return curUser.id === user.id ? mergeUser(curUser, user) : curUser;
        });
    },
};

const mergeUser = (currentUser: User, updateUser: User) => {
    const copyUser = { ...currentUser };
    for (const key in updateUser) {
        if (updateUser[key] !== '') {
            copyUser[key] = updateUser[key];
        }
    }
    return copyUser;
};
