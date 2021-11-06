import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public userObs: Observable<User> = this.user.asObservable();

    constructor() {}

    updateUser(user: User, id: number) {
        users[id] = user;
        return of(true).pipe(delay(1000));
    }

    getUsers(): Observable<User[]> {
        return of(users).pipe(delay(1000));
    }

    getOneUser(id: number) {
        const user = users[id];
        this.user.next(user);
        return this.userObs.pipe(delay(1000));
    }

    addNewUser(value: any): Observable<any> {
        users.push(value);
        return of(value).pipe(delay(1000));
    }
}
