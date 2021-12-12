import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { searchUsers } from '../../store/user.actions';

@Component({
    selector: 'app-search-user-shell',
    templateUrl: './search-user-shell.component.html',
    styleUrls: ['./search-user-shell.component.scss'],
})
export class SearchUserShellComponent implements OnInit, OnDestroy {
    private destroy$: Subject<any> = new Subject();

    public mySearch: FormGroup;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.mySearch = new FormGroup({ search: new FormControl('') });
        this.findUser();
    }

    findUser() {
        this.mySearch
            .get('search')
            .valueChanges.pipe(
                takeUntil(this.destroy$),
                debounceTime(500),
                distinctUntilChanged()
            )
            .subscribe((data) =>
                this.store.dispatch(searchUsers({ data: data }))
            );
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
