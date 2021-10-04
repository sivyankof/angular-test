import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from 'src/app/service/users/user.service';

@Component({
    selector: 'Users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UserService],
})
export class UsersComponent implements OnInit {
    public users: User[] = [];
    public hiddenUsers: boolean = true;
    public allUserActive: User[];

    constructor(public usersService: UserService) {}

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
}
