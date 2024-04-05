import { Component, OnInit} from '@angular/core';
import { HotelsService } from '../../../services/hotel/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { Ihotel } from '../../../interfaces/ihotel';
HotelsService
@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrl: './hoteldetails.component.css'
})
export class HoteldetailsComponent implements OnInit {


constructor(private _activatedRoute: ActivatedRoute, private _hotelservice:HotelsService){}

hotelDetails:Ihotel={} as Ihotel;
rating: number = 2;
stars: number[] = [1, 2, 3, 4, 5];

ngOnInit(): void {


  this._activatedRoute.paramMap.subscribe({
    next:(params)=>{
    let HotelId:any = params.get('id');



    this._hotelservice.GetHotelDetails(HotelId).subscribe({
    next:(response)=>{console.log(response)
    this.hotelDetails=response;
    }  
    })
    }
  })
}

// GridImages:any[]=[];
// Hotel:any[]=[];
// constructor(_hotelservice:HotelsService){
// // _hotelservice.GetGridImage().subscribe(
// //   (response)=>this.GridImages=response.results);
// // _hotelservice.GetHotel().subscribe(
// //   (response)=>this.Hotel=response.results);
// }

}
