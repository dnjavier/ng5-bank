import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatAccount'
})
export class FormatAccountPipe implements PipeTransform {
    transform(value: string): string {
        value = value.toString();
        let firstPart = value.substring(0, 3);
        let secondPart = value.substring(3, 6);
        let thirdPart = value.substring(6, 9);

        return firstPart + '-' + secondPart + '-' + thirdPart;
    }
}
