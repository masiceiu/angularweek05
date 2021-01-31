import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bdLocal'
})
export class BdLocalPipe implements PipeTransform {

  transform(value: number, ...args: string[]): string {
    return value.toLocaleString('en-IN');
  }
}
