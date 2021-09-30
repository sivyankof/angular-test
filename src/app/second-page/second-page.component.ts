import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'second-page',
    templateUrl: './second-page.component.html',
    styleUrls: ['./second-page.component.scss'],
})
export class SecondPageComponent implements OnInit {
    inputText: string = 'пусто';

    constructor() {}
    ngOnInit(): void {}
}
