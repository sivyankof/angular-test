import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { map, takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';
import { loadNewUsers, loadUsers, setActivateUser, userNonActivate } from '../../store/user.actions';
import { selectUsers } from '../../store/user.selector';
import { IUserState } from '../../store/user.reducers';

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
        this.store.dispatch(loadNewUsers());
    }

    searchListUsers(data: User[]) {
        this.users = data;
    }

    toggleHideUsers() {
        this.hiddenUsers = !this.hiddenUsers;
    }

    toggleActiveUser(user: User): void {
        this.store.dispatch(userNonActivate({ id: user.id }));
    }

    setActiveAllUsers() {
        this.store.dispatch(setActivateUser());
        this.users$ = this.store.select(selectUsers);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
