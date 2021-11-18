import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/shared-module/service/users.service';

@Component({
    selector: 'app-other-info',
    templateUrl: './other-info.component.html',
    styleUrls: ['./other-info.component.scss'],
})
export class OtherInfoComponent implements OnInit {
    @Input() user: any;

    public repos: Observable<object>;
    constructor(private userService: UsersService) {}

    ngOnInit(): void {
        console.log(this.user);
        this.repos = this.userService.getRepos(this.user.repos_url);
    }
}
