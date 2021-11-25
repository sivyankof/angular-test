import { initialUserState } from './state/user.state';
import { IAppState } from './interface';

export const initialAppState: IAppState = {
    users: initialUserState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
