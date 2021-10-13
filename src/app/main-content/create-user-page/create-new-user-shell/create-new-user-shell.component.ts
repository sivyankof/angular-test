import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { UsersService } from 'src/app/shared-module/service/users.service';
import { FormAddUserComponent } from '../form-add-user/form-add-user.component';

@Component({
    selector: 'app-create-new-user-shell',
    templateUrl: './create-new-user-shell.component.html',
    styleUrls: ['./create-new-user-shell.component.scss'],
})
export class CreateNewUserShellComponent implements OnInit {
    @ViewChild(FormAddUserComponent) childFormUser: FormAddUserComponent;

    constructor(private usersService: UsersService, private router: Router) {}

    ngOnInit(): void {}

    saveUser() {
        const form = this.childFormUser.saveUser();
        form.markAllAsTouched();

        if (form.valid) {
            this.usersService
                .addNewUser(form.value)
                .pipe(take(1))
                .subscribe(() => this.router.navigate(['']));
        }
    }
}
