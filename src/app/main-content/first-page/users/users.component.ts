import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { User } from '../../../shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/users-service/users.service';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';

@Component({
    selector: 'Users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UsersService],
})
export class UsersComponent implements OnInit {
    public users: User[] = [];
    public hiddenUsers: boolean = true;
    public allUserActive: User[];

    @ViewChildren(UserComponent) userComponent: QueryList<UserComponent>;

    constructor(public usersService: UsersService) {}

    ngOnInit(): void {
        this.users = this.usersService.getUsers();
        this.findActiveUsers();
    }

    toogleHideUsers() {
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
}
