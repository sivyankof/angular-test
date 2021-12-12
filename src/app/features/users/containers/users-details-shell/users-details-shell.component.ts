import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

import { UsersService } from 'src/app/shared-module/service/users.service';

@Component({
    selector: 'app-users-details',
    templateUrl: './users-details-shell.component.html',
    styleUrls: ['./users-details-shell.component.scss'],
})
export class UsersDetailsShellComponent implements OnInit {
    public user: any;

    public date: Date;

    constructor(
        private route: ActivatedRoute,
        private userService: UsersService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.params.id;
        this.userService
            .getOneUser(id)
            .pipe(take(1))
            .subscribe((user) => (this.user = user));

        this.date = new Date();
        setInterval(() => (this.date = new Date()), 1000);
    }

    onOutletLoaded(component: any) {
        component.user = this.user;
    }
}
