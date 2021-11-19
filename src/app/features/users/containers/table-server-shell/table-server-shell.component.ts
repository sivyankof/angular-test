import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared-module/service/users.service';

@Component({
    selector: 'app-table-server-shell',
    templateUrl: './table-server-shell.component.html',
    styleUrls: ['./table-server-shell.component.scss'],
})
export class TableServerShellComponent implements OnInit {
    public listUsers;

    constructor(private userService: UsersService) {}

    ngOnInit(): void {}

    ngAfterViewInit() {}
}
