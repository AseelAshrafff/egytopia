import { Pipe, PipeTransform } from '@angular/core';
import { Ihotel } from '../interfaces/ihotel';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Hotels:Ihotel[], term:string): Ihotel[] {
    return Hotels.filter((item)=>item.name.toLowerCase().includes(term.toLowerCase()));
  }

} 
