import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private URL = 'https://api.github.com';
    // private TOKEN = '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';
    private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public userObs: Observable<User> = this.user.asObservable();

    constructor(private http: HttpClient) {}

    updateUser(user: User, id: string) {
        users[id] = user;
        return of(true).pipe(delay(1000));
    }

    getUsers(countPage): Observable<any> {
        return this.http.get(this.URL + '/users', {
            headers: {
                Accept: `application/vnd.github.v3+json`,
                // authorization: `token ${this.TOKEN}`,
            },
            params: { per_page: countPage * 10 },
        });
    }

    getFilterUsers(): Observable<any> {
        return of(users).pipe(delay(1000));
    }

    getOneUser(id: string) {
        return this.http.get(this.URL + `/users/${id}`, {
            headers: {
                Accept: `application/vnd.github.v3+json`,
                // authorization: `token ${this.TOKEN}`,
            },
        });
    }

    addNewUser(value: any): Observable<any> {
        users.push(value);
        return of(value).pipe(delay(1000));
    }
}
