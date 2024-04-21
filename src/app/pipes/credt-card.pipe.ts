import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'credtCard',
  standalone: true,
})
export class CredtCardPipe implements PipeTransform {
  transform(value: any) {
    value = value.toString();
    var x: string = '';
    for (let i = 0; i < value.length; i += 4) {
      x += value[i] + value[i + 1] + value[i + 2] + value[i + 3] + '-';
    }
    x = x.slice(0, 19);
    console.log(x);
    return x;
  }
}
