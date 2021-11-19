import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private URL = 'https://api.github.com';
    private TOKEN = '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';
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
                authorization: `token ${this.TOKEN}`,
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
                authorization: `token ${this.TOKEN}`,
            },
        });
    }

    getFollower(url: string) {
        return this.http.get(url, {
            headers: {
                Accept: `application/vnd.github.v3+json`,
                authorization: `token ${this.TOKEN}`,
            },
        });
    }
    getRepos(url: string) {
        return this.http.get(url, {
            headers: {
                Accept: `application/vnd.github.v3+json`,
                authorization: `token ${this.TOKEN}`,
            },
        });
    }

    addNewUser(value: any): Observable<any> {
        users.push(value);
        return of(value).pipe(delay(1000));
    }

    getOtherUsers() {
        return this.http.get('https://randomuser.me/api/?results=100').pipe(
            map((obj: any) => {
                const data = obj.results;
                return data.map((user, i) => {
                    user.id = i + 1;
                    return user;
                });
            }),
        );
    }
}
