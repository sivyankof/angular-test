import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RouteChangesService } from './shared-module/service/route-changes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public messagePath: string;

    private routDestroy$ = new Subject();

    constructor(private router: RouteChangesService) {}

    ngOnInit() {
        this.router.errMess
            .pipe(takeUntil(this.routDestroy$))
            .subscribe((x) => (this.messagePath = x));
    }

    ngOnDestroy() {
        this.routDestroy$.next();
        this.routDestroy$.complete();
    }
}
