import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class RouteChangesService {
    public errMess: Subject<string> = new Subject();

    constructor(private router: Router) {
        this.getPathRout();
    }

    getPathRout() {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            this.errMess.next(this.yourPlace(event.url));
        });
    }

    yourPlace(name: any) {
        switch (true) {
            case name.includes('auth'):
                return 'You now on auth page';

            case name.includes('list'):
                return 'You now on list users page';

            case name.includes('edit'):
                return 'You now on edit user page';

            case name.includes('create'):
                return 'You now on create user page';

            default:
                return 'page not found';
        }
    }
}
