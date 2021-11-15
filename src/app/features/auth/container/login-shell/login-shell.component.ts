import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/shared-module/service/auth.service';
import { LoginComponent } from '../../component/login/login.component';

@Component({
    selector: 'app-login-shell',
    templateUrl: './login-shell.component.html',
    styleUrls: ['./login-shell.component.scss'],
})
export class LoginShellComponent implements OnInit {
    @ViewChild(LoginComponent) myForm: LoginComponent;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit(): void {}

    login() {
        this.myForm.loginForm.markAllAsTouched();
        const user = this.myForm.loginForm.value;

        this.myForm.loginForm.get('login').hasError('required');

        this.authService
            .setLoginUser(user)
            .pipe(take(1))
            .subscribe(
                () => {
                    localStorage.setItem('login', JSON.stringify(user.login));
                    this.router.navigate(['list-users']);
                },
                (err) => {
                    this.myForm.errorLogin = err;
                },
            );
    }
}
