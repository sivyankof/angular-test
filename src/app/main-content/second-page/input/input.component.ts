import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'InputText',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputTextComponent implements OnInit {
    public inputText: string = 'пусто';

    constructor() {}
    ngOnInit(): void {}
}
