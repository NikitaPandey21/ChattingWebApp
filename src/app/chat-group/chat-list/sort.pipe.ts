import { Pipe, PipeTransform } from '@angular/core';
// import { orderBy } from 'lodash';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform(value: any[], username:string): any[] {
    return value.filter((x => x.name!= username));
  }

}