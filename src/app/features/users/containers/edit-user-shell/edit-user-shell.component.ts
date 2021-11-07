import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';
import { FormAddUserComponent } from '../../components/form-add-user/form-add-user.component';

@Component({
    selector: 'app-edit-user-shell',
    templateUrl: './edit-user-shell.component.html',
    styleUrls: ['./edit-user-shell.component.scss'],
})
export class EditUserShellComponent implements OnInit, OnDestroy {
    private id: number;
    public user: User;
    private destroy$ = new Subject();

    @ViewChild(FormAddUserComponent) childForm: FormAddUserComponent;

    constructor(private route: ActivatedRoute, private serviceUser: UsersService, private router: Router) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params.id;

        this.serviceUser
            .getOneUser(this.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe((user) => (this.user = user));
    }

    saveUser() {
        const form = this.childForm.formCreateUser.value;
        this.serviceUser
            .updateUser(form, this.id)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.router.navigate(['']));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
