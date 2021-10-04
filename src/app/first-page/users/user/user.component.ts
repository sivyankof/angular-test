import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    @Input() user: User;
    @Input() hiddenUsers: Boolean;
    @Output() toggleActiveUser: EventEmitter<User> = new EventEmitter();
   

    constructor() {}

    ngOnInit(): void {}

    toggleActivated(user: User) {
        this.toggleActiveUser.emit(user);

    }
}
