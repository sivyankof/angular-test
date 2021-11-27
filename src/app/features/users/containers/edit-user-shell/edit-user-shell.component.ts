import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { FormAddUserComponent } from '../../components/form-add-user/form-add-user.component';
import { IUserState } from '../../store/user.reducers';
import { selectUser } from '../../store/user.selector';

@Component({
    selector: 'app-edit-user-shell',
    templateUrl: './edit-user-shell.component.html',
    styleUrls: ['./edit-user-shell.component.scss'],
})
export class EditUserShellComponent implements OnInit, OnDestroy {
    private id: string;
    public user: any;
    public userSaveForm = false;
    private destroy$ = new Subject();

    public user$: Observable<User>;

    @ViewChild(FormAddUserComponent) childForm: FormAddUserComponent;

    constructor(
        private route: ActivatedRoute,
        private serviceUser: UsersService,
        private router: Router,
        public dialog: MatDialog,
        private store: Store<IUserState>,
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;
        this.user$ = this.store.select(selectUser, { props: this.id });

        console.log(this.user$);

        // this.id = this.route.snapshot.params.id;
        // this.serviceUser
        //     .getOneUser(this.id)
        //     .pipe(takeUntil(this.destroy$))
        //     .subscribe((user) => ((this.user = user), console.log(this.user)));
    }

    saveUser() {
        const form = this.childForm.formCreateUser.value;
        this.serviceUser
            .updateUser(form, this.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.router.navigate(['']));

        this.userSaveForm = true;
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
