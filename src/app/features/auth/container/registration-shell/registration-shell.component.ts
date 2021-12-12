import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from 'src/app/shared-module/service/auth.service';
import { RegistrationComponent } from '../../component/registration/registration.component';

@Component({
    selector: 'app-registration-shell',
    templateUrl: './registration-shell.component.html',
    styleUrls: ['./registration-shell.component.scss'],
})
export class RegistrationShellComponent {
    @ViewChild(RegistrationComponent) registration: RegistrationComponent;

    constructor(private authService: AuthService, private router: Router) {}

    regNewUser() {
        this.registration.newUserForm.markAllAsTouched();

        if (this.registration.newUserForm.valid) {
            this.authService
                .regNewUser({
                    login: this.registration.newUserForm.value.login,
                    password:
                        this.registration.newUserForm.get('passGroup').value
                            .password,
                    firstName: 'none',
                    age: 10,
                    activated: true,
                })
                .pipe(take(1))
                .subscribe(
                    () => this.router.navigate(['auth']),
                    (e) => {
                        console.error(e);
                        this.registration.errLogin = e;
                    }
                );
        }
    }
}
