import { User } from 'src/app/shared-module/interface/user.interface';

export const selectUser = (state, props) => state.userState.users.filter((user: User) => user.id == props.id);
export const selectUsers = (state) => state.userState.users;
