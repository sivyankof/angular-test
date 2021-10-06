import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../../first-page/users/user.interface';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    @Input() user: User;
    @Input() hiddenUsers: Boolean;
    @Output() toggleActiveUser: EventEmitter<User> = new EventEmitter();
    @Output() log: EventEmitter<User> = new EventEmitter();

    public errorMes: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    toggleActivated(user: User) {
        if (user.age <= 18) {
            this.errorMes = true;
            setTimeout(() => (this.errorMes = false), 2000);
            return;
        }
        this.toggleActiveUser.emit(user);
    }

    showLog() {
        this.log.emit(this.user);
    }

    setActivateUser() {
        this.user.activated = true;
    }
}
