import { Component} from '@angular/core';
import { HotelsService } from '../../../services/hotels.service';
HotelsService
@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrl: './hoteldetails.component.css'
})
export class HoteldetailsComponent {
GridImages:any[]=[];
Hotel:any[]=[];
constructor(_hotelservice:HotelsService){
_hotelservice.GetGridImage().subscribe(
  (response)=>this.GridImages=response.results);
_hotelservice.GetHotel().subscribe(
  (response)=>this.Hotel=response.results);
}

}
