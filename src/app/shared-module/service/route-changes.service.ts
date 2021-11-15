import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class RouteChangesService {
    constructor(private router: Router) {
        router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            this.yourPlace(event.url);
        });
    }

    yourPlace(name) {
        switch (true) {
            case name.includes('auth'): // if (x === 'value1')
                console.log(2);
                alert('You now on auth page');
                break;

            case name.includes('list'): // if (x === 'value2')
                alert('You now on list users page');
                break;

            case name.includes('edit'): // if (x === 'value2')
                alert('You now on edit user page');
                break;

            case name.includes('create'): // if (x === 'value2')
                alert('You now on create user page');
                break;
        }
    }
}
