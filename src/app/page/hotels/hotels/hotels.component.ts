import { Component, OnInit } from '@angular/core';
import { Hotels } from '../../../hotels';
import { HotelsService } from '../../../services/hotel/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl:'./hotels.component.html',
  styleUrl: './hotels.component.css'
})

export class HotelsComponent implements OnInit {

  constructor(private _hotelservice: HotelsService){}

  hotels:any[]=[];

  ngOnInit(): void {
    this._hotelservice.GetHotel().subscribe(
      {next:(response)=>{this.hotels=response.data}
      });
  }
}
