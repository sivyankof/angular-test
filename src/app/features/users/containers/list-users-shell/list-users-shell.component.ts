import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';
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
    public hiddenUsers: boolean = true;
    public users$ = this.store.select(selectUsers);
    private destroy$: Subject<void> = new Subject();

    constructor(public usersService: UsersService, private store: Store<IUserState>) {}

    ngOnInit(): void {
        this.store.dispatch(loadUsers());
    }
    onShowMoreUser() {
        this.store.dispatch(loadNewUsers());
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
