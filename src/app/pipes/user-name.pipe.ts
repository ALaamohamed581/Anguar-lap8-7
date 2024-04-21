import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UserId',
  standalone: true,
})
export class UserNamePipe implements PipeTransform {
  transform(value: string): string {
    let res: string = value
      .split(' ')
      .map((name) => name[0])
      .join('.')
      .toUpperCase();
    console.log(res);
    return res;
  }
}
