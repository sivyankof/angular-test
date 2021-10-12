import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ValidationErrors } from '@angular/forms';

import { User } from 'src/app/shared-module/interface/user.interface';
import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class ValidatorsService {
    constructor() {}

    emailRepeat(userEmail: string): Observable<ValidationErrors> {
        console.log(userEmail);
        return new Observable<ValidationErrors>((observer) => {
            const isEmail = users.find((user) => user.email === userEmail);

            console.log(isEmail);
            if (isEmail) {
                observer.next({
                    userEmail: 'Email repeat',
                });
                observer.complete();
            }

            observer.next(null);
            observer.complete();
        }).pipe(delay(1000));
    }

    emailName(name: string): { [s: string]: boolean } | null {
        const valid = name.includes('@gmail.com' || 'domain');
        return valid ? null : { email: true };
    }
}
