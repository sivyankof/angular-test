import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'src/app/shared-module/interface/user.interface';
import { IUserState } from './user.reducers';

export const selectFeature = createFeatureSelector<IUserState>('userState');

export const selectUser = createSelector(selectFeature, (state: IUserState, props) =>
    state.users.find((user: User) => user.id == props.id),
);

export const selectUsers = createSelector(selectFeature, (state: IUserState) => state.users);
