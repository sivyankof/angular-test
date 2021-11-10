export interface User {
    firstName: string;
    age: number;
    activated: boolean;
    login?: string;
    email?: string;
    avatar_url?: string;
    repos_url?: string;
    html_url?: string;
}
