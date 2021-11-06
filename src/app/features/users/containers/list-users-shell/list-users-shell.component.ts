import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { take } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';
import { Router } from '@angular/router';

@Component({
    selector: 'Users',
    templateUrl: './list-users-shell.component.html',
    styleUrls: ['./list-users-shell.component.scss'],
    providers: [UsersService],
})
export class ListUsersComponent implements OnInit {
    public users: User[] = [];
    public hiddenUsers: boolean = true;
    public allUserActive: User[];

    @ViewChildren(UserComponent) userComponent: QueryList<UserComponent>;

    constructor(public usersService: UsersService, private router: Router) {}

    ngOnInit(): void {
        this.usersService
            .getUsers()
            .pipe(take(1))
            .subscribe(
                (date: User[]) => {
                    this.users = date;
                },
                (err: any) => {
                    console.log('err', err);
                    this.users = [];
                },
            ),
            this.findActiveUsers();
    }

    public toggleHideUsers() {
        this.hiddenUsers = !this.hiddenUsers;
    }

    private toggleActiveUser(user: User): void {
        user.activated = !user.activated;
        this.findActiveUsers();
    }

    private findActiveUsers() {
        this.allUserActive = this.users.filter((user) => user.activated);
    }

    private log(user: User) {
        console.log(user);
    }

    setActiveAllUsers() {
        this.userComponent.forEach((user) => user.setActivateUser());
    }

    openSetting(id: number) {
        this.router.navigate(['edit-user', id]);
    }
}
