import { Component, OnInit, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/users-service/users.service';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';

@Component({
    selector: 'Users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UsersService],
})
export class UsersComponent implements OnInit, OnDestroy {
    public users: User[] = [];
    public hiddenUsers: boolean = true;
    public allUserActive: User[];
    private sub: Subscription = new Subscription();

    @ViewChildren(UserComponent) userComponent: QueryList<UserComponent>;

    constructor(public usersService: UsersService) {}

    ngOnInit(): void {
        this.sub.add(
            this.usersService.getUsers().subscribe(
                (date) => {
                    this.users = date;
                },
                (err) => {
                    console.log('err', err);
                    this.users = [];
                },
            ),
        );
        this.findActiveUsers();
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

    log(user: User) {
        console.log(user);
    }

    setActiveAllUsers() {
        this.userComponent.forEach((user) => user.setActivateUser());
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
