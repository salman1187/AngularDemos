import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString:string, propName:string) 
  {
    if (!value || !filterString || !propName) {
        return value;
      }
  
      return value.filter(product => product[propName].toLowerCase().includes(filterString.toLowerCase()));
  }
}
