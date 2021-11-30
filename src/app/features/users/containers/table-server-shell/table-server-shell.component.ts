import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EMPTY, merge, Subject } from 'rxjs';
import { catchError, map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { UsersService } from 'src/app/shared-module/service/users.service';

@Component({
    selector: 'app-table-server-shell',
    templateUrl: './table-server-shell.component.html',
    styleUrls: ['./table-server-shell.component.scss'],
})
export class TableServerShellComponent implements OnInit, AfterViewInit, OnDestroy {
    public displayedColumns: string[] = ['id', 'picture', 'name', 'dob', 'location', 'email'];
    private destroy$: Subject<any> = new Subject();
    public data = [];
    public resultsLength = 0;
    public isLoadingResults = true;
    public isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private userService: UsersService) {}

    ngOnInit() {}

    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                takeUntil(this.destroy$),
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.userService!.getRepoIssues(
                        this.sort.active,
                        this.sort.direction,
                        this.paginator.pageIndex,
                    ).pipe(catchError(() => EMPTY));
                }),
                map((data) => {
                    this.isLoadingResults = false;
                    this.isRateLimitReached = data === null;

                    if (data === null) {
                        return [];
                    }

                    this.resultsLength = data.length;
                    return data.slice(this.paginator.pageIndex * 10, this.paginator.pageIndex * 10 + 10);
                }),
            )
            .subscribe((data) => (this.data = data));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
