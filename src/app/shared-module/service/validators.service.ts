import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ValidationErrors } from '@angular/forms';

import { users } from '../data/users';

@Injectable({
    providedIn: 'root',
})
export class ValidatorsService {
    emailRepeat(userEmail: string): Observable<ValidationErrors> {
        return new Observable<ValidationErrors>((observer) => {
            const isEmail = users.find((user) => user.email === userEmail);

            if (isEmail) {
                observer.next({
                    doubleEmail: 'Email repeat',
                });
                observer.complete();
            } else {
                observer.next(null);
                observer.complete();
            }
        }).pipe(delay(1000));
    }

    emailName(name: string): { [s: string]: boolean } | null {
        const valid = name.includes('@gmail.com' || 'domain');
        return valid ? null : { mailName: true };
    }
}
