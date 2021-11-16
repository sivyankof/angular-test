import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';

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
    private countPage = 1;

    @ViewChildren(UserComponent) userComponent: QueryList<UserComponent>;

    constructor(public usersService: UsersService, private router: Router) {}

    ngOnInit(): void {
        this.usersService
            .getUsers(this.countPage)
            .pipe(take(1))
            .subscribe(
                (date: User[]) => ((this.users = date), (this.countPage += 1), console.log(this.users)),
                (err: any) => (this.users = []),
            );

        this.findActiveUsers();
    }

    onShowMoreUser() {
        this.usersService
            .getUsers(this.countPage)
            .pipe(take(1))
            .subscribe((date: User[]) => ((this.users = date), (this.countPage += 1), console.log(this.users)));
        
    }

    updateListUsers(data: User[]) {
        this.users = data;
    }

    toggleHideUsers() {
        this.hiddenUsers = !this.hiddenUsers;
    }

    toggleActiveUser(user: User): void {
        user.activated = !user.activated;
        this.findActiveUsers();
    }

    findActiveUsers() {
        this.allUserActive = this.users.filter((user) => user.activated);
    }

    setActiveAllUsers() {
        this.userComponent.forEach((user) => user.setActivateUser());
    }

    openSetting(id: number) {
        this.router.navigate(['edit-user', id]);
    }
}
