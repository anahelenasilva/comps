import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.toString().substr(2,2);
  }
}