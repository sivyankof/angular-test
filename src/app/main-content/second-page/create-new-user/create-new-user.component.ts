import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UsersService } from 'src/app/shared-module/users-service/users.service';

@Component({
    selector: 'app-create-new-user',
    templateUrl: './create-new-user.component.html',
    styleUrls: ['./create-new-user.component.scss'],
})
export class CreateNewUserComponent implements OnInit {
    constructor(private usersSerive: UsersService) {}

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
            console.log('new User', this.formCreacteUser.value);

            this.usersSerive.addNewUser(this.formCreacteUser.value);
        }
        return;
    }

    // get form() {
    //     console.log(this.count);
    //     return this.formCreacteUser.get('firstName');
    // }
}
