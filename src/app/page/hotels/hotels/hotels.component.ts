import { Component, OnInit } from '@angular/core';
import { Hotels } from '../../../hotels';
import { HotelsService } from '../../../services/hotel/hotels.service';
import { Ihotel } from '../../../interfaces/ihotel';

@Component({
  selector: 'app-hotels',
  templateUrl:'./hotels.component.html',
  styleUrl: './hotels.component.css'
})

export class HotelsComponent implements OnInit {

  constructor(private _hotelservice: HotelsService){
   this. DisplayHotel(1);
  }
  SearchTerm:string='';
  hotels:Ihotel[]=[];

  //--------------pagination----------------
  DisplayHotel(PageNum:number){
    this._hotelservice.GetHotel(PageNum).subscribe(
      {next:(response)=>{console.log(response)
      this.hotels=response;
      console.log(this.hotels);
      }
      });
  }
//------------------------------------------------
  ngOnInit(): void {
    
    this._hotelservice.GetHotel(1).subscribe(
      {next:(response)=>{console.log(response)
      this.hotels=response;
      console.log(this.hotels);
      }
      });
  }
}
