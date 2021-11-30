import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared-module/service/users.service';
import {
    loadNewUsers,
    loadNewUsersSuccess,
    loadUsers,
    loadUsersSuccess,
    selectUserEdit,
    selectUserEditSuccess,
} from './user.actions';

@Injectable()
export class UserEffect {
    constructor(private actions$: Actions, private userService: UsersService) {}

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            switchMap(() =>
                this.userService.getOtherUsers().pipe(
                    map((users) => loadUsersSuccess({ users })),
                    catchError((err) => of(err)),
                ),
            ),
        ),
    );
    loadNewUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadNewUsers),
            switchMap(() =>
                this.userService.getOtherUsers().pipe(
                    map((users) => loadNewUsersSuccess({ users })),
                    catchError((err) => of(err)),
                ),
            ),
        ),
    );

    selectTheUserToEdit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(selectUserEdit),
            switchMap((action) =>
                this.userService.getOneUser(action.id).pipe(
                    map(
                        (user) => selectUserEditSuccess({ user }),
                        catchError((err) => of(err)),
                    ),
                ),
            ),
        ),
    );
}
