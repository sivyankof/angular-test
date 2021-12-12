import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from './user.reducers';

export const selectFeature = createFeatureSelector<IUserState>('userState');
export const selectUser = createSelector(
    selectFeature,
    (state: IUserState) => state.selectedUser
);
export const selectUsers = createSelector(
    selectFeature,
    (state: IUserState) => state.users
);
