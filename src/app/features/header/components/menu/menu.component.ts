import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
    constructor(private router: Router) {}

    exit() {
        localStorage.removeItem('login');
        this.router.navigate(['']);
    }
}
