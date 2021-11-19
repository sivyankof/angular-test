import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { take } from 'rxjs/operators';

import { UsersService } from 'src/app/shared-module/service/users.service';

@Component({
    selector: 'app-table-client-shell',
    templateUrl: './table-client-shell.component.html',
    styleUrls: ['./table-client-shell.component.scss'],
})
export class TableClientShellComponent implements OnInit {
    public displayedColumns: string[] = ['position', 'img', 'name', 'dob', 'location', 'email'];
    public listUsers: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private userService: UsersService) {}

    ngOnInit(): void {
        this.userService
            .getOtherUsers()
            .pipe(take(1))
            .subscribe((data: any) => {
                this.listUsers = new MatTableDataSource(data);
                this.listUsers.paginator = this.paginator;
                this.listUsers.sort = this.sort;

                console.log(this.sort.direction);
            });
    }
}
