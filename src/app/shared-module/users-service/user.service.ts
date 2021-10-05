import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/first-page/users/user';
import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor() {}

    getUsers(): User[] {
        return users;
    }
}
