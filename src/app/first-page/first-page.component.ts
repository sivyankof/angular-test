import { Component, OnInit } from '@angular/core';

interface User {
    name: string;
    age: number;
    activated: boolean;
}

@Component({
    selector: 'first-page',
    templateUrl: './first-page.component.html',
    styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
    public users: User[] = [
        { name: 'Andrey', age: 24, activated: true },
        { name: 'Igor', age: 18, activated: true },
        { name: 'Misha', age: 25, activated: true },
        { name: 'Marina', age: 30, activated: true },
        { name: 'Vasya', age: 40, activated: true },
    ];

    public hiddenUsers: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    isActiveUser(user: User): object {
        return this.users.find((obj) => {
            if (obj.name === user.name) {
                obj.activated = !obj.activated;
            }
        });
    }

    toogleHideUsers() {
        this.hiddenUsers = !this.hiddenUsers;
    }
}
