import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fullNameUserTable',
})
export class FullNameUserTablePipe implements PipeTransform {
    transform(value: { title: string; first: string; last: string }, ...args: unknown[]): string {
        const fullName = `${value.title}` + '. ' + `${value.first + ' ' + value.last}`;
        return fullName;
    }
}
