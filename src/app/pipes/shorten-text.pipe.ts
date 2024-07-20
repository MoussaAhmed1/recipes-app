import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string,count:number=10 ,...args: unknown[]): unknown {
    return value.substring(0,count);
  }

}
