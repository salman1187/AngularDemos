import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateLength',
  standalone: true
})
export class TruncateLengthPipe implements PipeTransform {
  transform(value: string, maxLength: number = 30): string 
  {
    if (value.length > maxLength) 
    {
        return value.substring(0, maxLength) + '...';
    }
    return value;
  }
}
