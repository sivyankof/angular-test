import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public errorLogin: string;
    constructor() {}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            login: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        });
    }
}
