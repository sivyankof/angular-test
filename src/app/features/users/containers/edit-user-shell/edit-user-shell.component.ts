import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { User } from 'src/app/shared-module/interface/user.interface';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { FormUserComponent } from '../../components/form-add-user/form-user.component';
import { loadUsers, selectUserEdit, updateUser } from '../../store/user.actions';
import { IUserState } from '../../store/user.reducers';
import { selectUser } from '../../store/user.selector';

@Component({
    selector: 'app-edit-user-shell',
    templateUrl: './edit-user-shell.component.html',
    styleUrls: ['./edit-user-shell.component.scss'],
})
export class EditUserShellComponent implements OnInit, OnDestroy {
    private id: string;
    public guardUserSaveForm = false;
    public user$: Observable<User>;
    private destroy$ = new Subject();

    @ViewChild(FormUserComponent) childForm: FormUserComponent;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialog: MatDialog,
        private store: Store<IUserState>,
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.store.dispatch(loadUsers());
        this.store.dispatch(selectUserEdit({ id: this.id }));
        this.user$ = this.store.select(selectUser);
    }

    saveUser() {
        const form = this.childForm.formCreateUser.value;
        this.store.dispatch(updateUser({ user: form }));
        this.guardUserSaveForm = true;
        this.router.navigate(['list-users']);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    openDialog() {
        const dialogRef = this.dialog.open(DialogComponent);
        return dialogRef.afterClosed();
    }
}
