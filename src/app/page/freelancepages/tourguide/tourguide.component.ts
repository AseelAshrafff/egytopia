import { Component, OnInit } from '@angular/core';
import { TourguideService } from '../../../services/tourguide/tourguide.service';


@Component({
  selector: 'app-tourguide',
  templateUrl: './tourguide.component.html',
  styleUrl: './tourguide.component.css'
})
export class TourguideComponent implements OnInit {

constructor(private _tourguideservice :TourguideService){}

tourguides:any[]=[]

ngOnInit(): void {
this._tourguideservice.GetTourGuide().subscribe({
next:(response)=>{this.tourguides=response.data}
}) 
}
}
