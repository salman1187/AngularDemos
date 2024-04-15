import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
    transform(value: any[], isSort:string, sortorder: string): any[] {
      if (sortorder != 'asc' && sortorder != 'desc') {
        return value;
      }
      
      const sortField = isSort;
      const sortOrder = sortorder === 'desc' ? -1 : 1;
  
      return value.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) return -1 * sortOrder;
        else if (a[sortField] > b[sortField]) return 1 * sortOrder;
        else return 0;
      });
    }
  }