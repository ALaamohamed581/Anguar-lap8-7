import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';
import strict from 'assert/strict';
import e from 'express';
import { stringify } from 'querystring';

@Pipe({
  name: 'deduceBirthDate',
  standalone: true,
})
export class DeduceBirthDatePipe implements PipeTransform {
  transform(value: number, f: string = '') {
    let res: string[];
    res = value.toString().slice(1, 7).split('');
    var val: string = '';
    for (var i = 0; i < res.length; i += 2) {
      val += res[i] + res[i + 1] + '-';
    }

    val = val.slice(0, 8);

    if (f == 'yy') {
      let out = new Date(val).getFullYear();
      return out;
    } else if (f == 'mm') {
      let out = new Date(val).getMonth();
      return out;
    } else if (f == 'dd') {
      let out = new Date(val).getDate();
      return out;
    } else {
      let out: any = new Date(val).toLocaleDateString('en-gb');

      console.log(out);
      return out;
    }

    // let f = new Intl.DateTimeFormat('en-EG');
    // let out= new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-')
  }
}
