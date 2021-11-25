import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { UsersService } from 'src/app/shared-module/service/users.service';

@Component({
    selector: 'app-search-user-shell',
    templateUrl: './search-user-shell.component.html',
    styleUrls: ['./search-user-shell.component.scss'],
})
export class SearchUserShellComponent implements OnInit, OnDestroy {
    @Output() searchListUsers = new EventEmitter();

    private destroy$: Subject<any> = new Subject();
    public users: User[] = [];
    public copyUsers = [];
    public mySearch: FormGroup;

    constructor(private userService: UsersService) {}

    ngOnInit(): void {
        this.mySearch = new FormGroup({ search: new FormControl('') });

        this.userService.getUsers(100).subscribe((data) => {
            this.users = data;
            this.copyUsers = data;
        });

        this.findUser();
    }

    findUser() {
        this.mySearch
            .get('search')
            .valueChanges.pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
            .subscribe((data) => {
                this.copyUsers = [...this.users.filter((el) => el.login?.toLowerCase().includes(data.toLowerCase()))];
                this.searchListUsers.emit(this.copyUsers);
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
