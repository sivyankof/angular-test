import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    @Output() log: EventEmitter<User> = new EventEmitter();
    @Output() openSetting: EventEmitter<any> = new EventEmitter();

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

    onSetting() {
        this.openSetting.emit();
    }
}
