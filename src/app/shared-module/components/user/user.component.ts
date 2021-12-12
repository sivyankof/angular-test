import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interface/user.interface';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent {
    @Input() user: User;

    @Input() id: number;

    @Input() hiddenUsers: boolean;

    @Output() toggleActiveUser: EventEmitter<User> = new EventEmitter();

    public errorMes = false;

    constructor(private router: Router) {}

    toggleActivated(user: User): void {
        if (user.age <= 18) {
            this.errorMes = true;
            setTimeout(() => (this.errorMes = false), 2000);
            return;
        }
        this.toggleActiveUser.emit(user);
    }

    setActivateUser(): void {
        this.user.activated = true;
    }

    onSetting(): void {
        this.router.navigate(['edit-user', this.user.id]);
    }

    onDetails(): void {
        this.router.navigate(['details', this.user.id]);
    }
}
