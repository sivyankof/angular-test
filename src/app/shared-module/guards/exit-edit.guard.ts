import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanDeactivate,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { EditUserShellComponent } from 'src/app/features/users/containers/edit-user-shell/edit-user-shell.component';

@Injectable({
    providedIn: 'root',
})
export class ExitEditGuard implements CanActivate, CanDeactivate<unknown> {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return true;
    }

    canDeactivate(
        component: EditUserShellComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (
            !component.childForm.formCreateUser.dirty ||
            component.guardUserSaveForm
        ) {
            return true;
        } else {
            return component.openDialog();
        }
    }
}
