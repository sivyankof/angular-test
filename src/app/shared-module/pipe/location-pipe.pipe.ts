import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'locationPipe',
})
export class LocationPipePipe implements PipeTransform {
    transform(value: any, ...args: unknown[]): unknown {
        const location = `${value.city + ', ' + value.state + ', ' + value.country}`;
        return location;
    }
}
