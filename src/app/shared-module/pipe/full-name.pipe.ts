import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interface/user.interface';

@Pipe({
    name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
    transform(value: User): string {
        return `${value.login + ` ` + value.name}`;
    }
}
