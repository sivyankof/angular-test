import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { users } from '../data/users';
import { User } from '../interface/user.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    regNewUser(obj: User): Observable<any> {
        let valid: boolean;

        if (users.some((user) => user.login === obj.login)) {
            valid = false;
        } else {
            users.push(obj);
            valid = true;
        }
        return valid
            ? of(obj).pipe(delay(1000))
            : throwError('Error. User with that login already has.');
    }

    setLoginUser(user: User): Observable<any> {
        const valid = users.filter(
            (el: User): any =>
                el.login === user.login && el.password === user.password
        );
        return valid.length
            ? of(user).pipe(delay(1000))
            : throwError('Login or password mistake');
    }
}
