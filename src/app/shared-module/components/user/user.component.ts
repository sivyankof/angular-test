import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUser } from 'src/app/features/users/store/user.actions';

import { IUserState } from 'src/app/features/users/store/user.reducers';
import { User } from '../../interface/user.interface';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    @Input() user: User;
    @Input() id: number;
    @Input() hiddenUsers: Boolean;
    @Output() toggleActiveUser: EventEmitter<User> = new EventEmitter();

    public errorMes: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    toggleActivated(user: User) {
        if (user.age <= 18) {
            this.errorMes = true;
            setTimeout(() => (this.errorMes = false), 2000);
            return;
        }
        this.toggleActiveUser.emit(user);
    }

    setActivateUser() {
        this.user.activated = true;
    }

    onSetting() {
        this.router.navigate(['edit-user', this.user.id]);
    }

    onDetails() {
        this.router.navigate(['details', this.user.id]);
    }
}
