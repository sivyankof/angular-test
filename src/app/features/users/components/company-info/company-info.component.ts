import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-company-info',
    templateUrl: './company-info.component.html',
    styleUrls: ['./company-info.component.scss'],
})
export class CompanyInfoComponent implements OnInit {
    @Input() user: any;
    constructor() {}

    ngOnInit(): void {}
}
