import { Pipe, PipeTransform } from '@angular/core';
import { ITouristic } from '../interfaces/i-touristic';

@Pipe({
  name: 'touristicSearchPipe'
})
export class TouristicSearchPipePipe implements PipeTransform {

  transform(places:ITouristic[], term:string): ITouristic[] {
    return places.filter((item)=>item.description.toLowerCase().includes(term.toLowerCase()));
  }

}
