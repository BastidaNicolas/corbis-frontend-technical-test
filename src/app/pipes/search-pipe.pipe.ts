import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {
  transform(items: any[], searchTerm: string) {
    if (!searchTerm) {
      return items;
    }
    const term = searchTerm.toLowerCase();
    
    return items.filter(item => {
      for (const prop in item) {
        if (item[prop]?.toString().toLowerCase().includes(term)) {
          return true;
        }
      }
      return false;
    });
  }
}
