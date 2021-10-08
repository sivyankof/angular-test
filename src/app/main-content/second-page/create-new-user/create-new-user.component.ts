import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from 'src/app/shared-module/users-service/users.service';

@Component({
    selector: 'app-create-new-user',
    templateUrl: './create-new-user.component.html',
    styleUrls: ['./create-new-user.component.scss'],
})
export class CreateNewUserComponent implements OnInit {
    constructor(private usersSerive: UsersService, private router: Router) {}

    formCreacteUser: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        age: new FormControl('', [Validators.min(16), Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
        company: new FormControl('', [, Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        departament: new FormControl('', [, Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        photo: new FormControl(''),
        gender: new FormControl('', Validators.required),
    });
    ngOnInit(): void {}

    saveNewUser() {
        console.log('IS_VALID', this.formCreacteUser.valid);

        if (this.formCreacteUser.valid) {
            this.usersSerive.addNewUser(this.formCreacteUser.value);

            this.router.navigate(['']);
        }
        return;
    }

    isInvalid(value: string) {
        // console.log(this.formCreacteUser.get(value).errors);
        console.log(this.formCreacteUser.get(value).invalid);
        return this.formCreacteUser.get(value).invalid;
    }
}
