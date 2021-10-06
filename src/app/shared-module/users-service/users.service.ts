import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/first-page/users/user.interface';
import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor() {}

    getUsers(): User[] {
        return users;
    }
}
