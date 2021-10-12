import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/shared-module/interface/user.interface';
import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor() {}

    getUsers(): Observable<User[]> {
        return of(users);
    }

    addNewUser(value: any): Observable<User> {
        users.push(value);

        return value;
    }
}
