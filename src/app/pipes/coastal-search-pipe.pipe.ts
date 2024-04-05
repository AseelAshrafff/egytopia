import { Pipe, PipeTransform } from '@angular/core';
import { ICoastal } from '../interfaces/i-coastal';

@Pipe({
  name: 'coastalSearchPipe'
})
export class CoastalSearchPipePipe implements PipeTransform {

  transform(places:ICoastal[], term:string): ICoastal[] {
    return places.filter((item)=>item.description.toLowerCase().includes(term.toLowerCase()));
  }

}
