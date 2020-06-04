import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'off'
})
export class OffPipe implements PipeTransform {

  transform(price: number, off: number): number {
    return price * (100 - off) / 100;
  }

}
