import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from 'src/app/shared-module/service/users.service';

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
    @Input() user: any;
    public followers: Observable<Object>;
    public onHideFollower: boolean = false;

    constructor(private userService: UsersService) {}

    ngOnInit(): void {
        this.followers = this.userService.getFollower(this.user.followers_url);
    }
}
