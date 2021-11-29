import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { FormUserComponent } from '../../components/form-add-user/form-user.component';
import { createNewUser } from '../../store/user.actions';

@Component({
    selector: 'app-create-new-user-shell',
    templateUrl: './create-new-user-shell.component.html',
    styleUrls: ['./create-new-user-shell.component.scss'],
})
export class CreateNewUserShellComponent implements OnInit {
    @ViewChild(FormUserComponent) childFormUser: FormUserComponent;

    constructor(private router: Router, private store: Store) {}

    ngOnInit(): void {}

    saveUser() {
        const form = this.childFormUser.saveUser();
        form.markAllAsTouched();

        if (form.valid) {
            this.store.dispatch(createNewUser({ user: form.value }));
            this.router.navigate(['list-users']);
        }
    }
}
