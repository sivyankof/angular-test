
export interface IUser {
    firstName: string;
    age: number;
    activated: boolean;
    login?: string;
    password?: string;
    email?: string;
    avatar_url?: string;
    repos_url?: string;
    html_url?: string;
}

export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
}
