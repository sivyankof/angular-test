import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { IUserState } from '../../store/interface';
import { getUsers, loadUsers } from '../../store/actions/user.actions';
import { selectUser, selectUsers } from '../../store/selectors/user.selector';

@Component({
    selector: 'Users',
    templateUrl: './list-users-shell.component.html',
    styleUrls: ['./list-users-shell.component.scss'],
    providers: [UsersService],
})
export class ListUsersComponent implements OnInit, OnDestroy {
    public users: User[] = [];
    public hiddenUsers: boolean = true;
    public allUserActive: User[];
    private countPage = 1;
    private destroy$: Subject<void> = new Subject();

    public users$: Observable<any>;

    @ViewChildren(UserComponent) userComponent: QueryList<UserComponent>;

    constructor(public usersService: UsersService, private router: Router, private store: Store<IUserState>) {}

    ngOnInit(): void {
        this.store.dispatch(loadUsers());
        this.users$ = this.store.select(selectUsers);

        // this.initGetUsers();
        // this.findActiveUsers();
    }

    private initGetUsers() {
        this.usersService
            .getUsers(this.countPage)
            .pipe(takeUntil(this.destroy$))
            .subscribe(
                (date: User[]) => ((this.users = date), (this.countPage += 1)),
                (err: any) => {
                    this.users = [];
                    console.log(err);
                },
            );
    }

    private findActiveUsers() {
        this.allUserActive = this.users.filter((user) => user.activated);
    }

    onShowMoreUser() {
        this.usersService
            .getUsers(this.countPage)
            .pipe(takeUntil(this.destroy$))
            .subscribe((date: User[]) => ((this.users = date), (this.countPage += 1)));
    }

    searchListUsers(data: User[]) {
        this.users = data;
    }

    toggleHideUsers() {
        this.hiddenUsers = !this.hiddenUsers;
    }

    toggleActiveUser(user: User): void {
        user.activated = !user.activated;
        this.findActiveUsers();
    }

    setActiveAllUsers() {
        this.userComponent.forEach((user) => user.setActivateUser());
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
