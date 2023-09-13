import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class DemoPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): number {
    return value.length;
  }

}
