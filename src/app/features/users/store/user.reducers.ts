import { createReducer, on } from '@ngrx/store';

import {
    createNewUser,
    loadNewUsersSuccess,
    loadUsersSuccess,
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
        users: setAllUsers(state, users),
    })),
    on(loadNewUsersSuccess, (state, { users }) => {
        let count = 0;
        return {
            ...state,
            users: loadNewUsers(state, users, count),
        };
    }),
    on(setActivateUser, (state) => {
        return {
            ...state,
            users: setActivateAllUsers(state),
        };
    }),
    on(userNonActivate, (state, { id }) => {
        return {
            ...state,
            users: updateNonActiveUsers(state, id),
        };
    }),
    on(selectUserEditSuccess, (state, { user }) => {
        return {
            ...state,
            selectedUser: user,
        };
    }),
    on(updateUser, (state, { user }) => {
        return {
            ...state,
            users: updateOneUser(state, user),
        };
    }),
    on(createNewUser, (state, { user }) => {
        return {
            ...state,
            users: [...state.users, user],
        };
    }),
);

export function UserReducer(state: IUserState, action): IUserState {
    return reducer(state, action);
}

function updateNonActiveUsers(state: IUserState, id: string) {
    return state.users.map((user) => {
        const copyUser = { ...user };
        user.id === id ? (copyUser.activated = false) : copyUser.activated;
        return copyUser;
    });
}

function loadNewUsers(state: IUserState, users: User[], count: number) {
    return state.users.concat(users).map((user) => {
        count++;
        const copy = { ...user };
        copy.id = count.toString();
        return copy;
    });
}

function setActivateAllUsers(state: IUserState) {
    return state.users.map((user: User) => ({
        ...user,
        activated: !user.activated,
    }));
}

function setAllUsers(state: IUserState, users: User[]) {
    return !state.users ? users : state.users;
}

function updateOneUser(state: IUserState, user: User) {
    return state.users.map((curUser) => {
        if (curUser.id === user.id) {
            const copyUser = { ...curUser };

            for (const key in user) {
                if (user[key] !== '') {
                    copyUser[key] = user[key];
                }
            }

            return copyUser;
        } else {
            return curUser;
        }
    });
}
