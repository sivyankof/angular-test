import { Component } from '@angular/core';
import { RouteChangesService } from './shared-module/service/route-changes.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private router: RouteChangesService) {}
}
