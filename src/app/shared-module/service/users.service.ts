import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { users } from '../data/users';
interface UserTable {
    id: number;
    age: string;
    dob: string;
    email: string;
    picture: string;
    name: string;
    location: string;
    address: string;
    activated?: boolean;
}

interface getUser {
    id: string;
    dob: { age: string; date: string };
    email: string;
    picture: { thumbnail: string };
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        city: string;
        state: string;
        country: string;
        street: {
            name: string;
            number: string;
        };
    };
}

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
                // authorization: `token ${this.TOKEN}`,
            },
            params: { per_page: countPage * 10 },
        });
    }

    getFilterUsers(): Observable<any> {
        return of(users).pipe(delay(1000));
    }

    getOneUser(id: string) {
        // return this.http.get(this.URL + `/users/${id}`, {
        //     headers: {
        //         Accept: `application/vnd.github.v3+json`,
        //         // authorization: `token ${this.TOKEN}`,
        //     },
        // });

        return this.http.get('https://randomuser.me/api/?results=1').pipe(
            map((obj: any) => {
                return obj.results.map((user: getUser, i: number) => ({
                    id: i + 1,
                    age: user.dob.age,
                    dob: user.dob.date,
                    email: user.email,
                    picture: user.picture.thumbnail,
                    name: user.name.title + `.` + user.name.first + ` ` + user.name.last,
                    location: user.location.city + ', ' + user.location.state + ', ' + user.location.country,
                    address: user.location.street.name + ', ' + user.location.street.number,
                    // activated: false,
                }));
            }),
        );
    }

    getFollower(url: string) {
        return this.http.get(url, {
            headers: {
                Accept: `application/vnd.github.v3+json`,
                // authorization: `token ${this.TOKEN}`,
            },
        });
    }
    getRepos(url: string) {
        return this.http.get(url, {
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

    getOtherUsers(): Observable<User[]> {
        return this.http.get('https://randomuser.me/api/?results=10').pipe(
            map((obj: any) => {
                return obj.results.map((user: getUser, i: number) => ({
                    id: i + 1,
                    age: user.dob.age,
                    dob: user.dob.date,
                    email: user.email,
                    picture: user.picture.thumbnail,
                    name: user.name.title + `.` + user.name.first + ` ` + user.name.last,
                    location: user.location.city + ', ' + user.location.state + ', ' + user.location.country,
                    address: user.location.street.name + ', ' + user.location.street.number,
                    // activated: false,
                }));
            }),
        );
    }

    getRepoIssues(sort: string, order: SortDirection, page: number): Observable<any> {
        return this.http.get('https://randomuser.me/api/?results=100').pipe(
            map((obj: any) => {
                return obj.results.map((user: getUser, i: number) => ({
                    id: i + 1,
                    age: user.dob.age,
                    dob: user.dob.date,
                    email: user.email,
                    picture: user.picture.thumbnail,
                    name: user.name.title + `.` + user.name.first + ` ` + user.name.last,
                    location: user.location.city + ', ' + user.location.state + ', ' + user.location.country,
                    address: user.location.street.name + ', ' + user.location.street.number,
                }));
            }),
            map((users) => this.mySort(users, sort, order)),
        );
    }

    mySort(arr: UserTable[], sortName: string, order: string) {
        return arr.sort((a, b) => {
            if (order === 'asc') {
                if (a[sortName] > b[sortName]) return 1;
                if (a[sortName] < b[sortName]) return -1;
                return 0;
            } else if (order == 'desc') {
                if (a[sortName] < b[sortName]) return 1;
                if (a[sortName] > b[sortName]) return -1;
                return 0;
            } else {
                return 0;
            }
        });
    }
}
