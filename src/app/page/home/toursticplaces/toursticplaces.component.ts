import { Component, OnInit } from '@angular/core';
import { TouristicservicesService } from '../../../services/touristic/touristicservices.service';

@Component({
  selector: 'app-toursticplaces',
  templateUrl: './toursticplaces.component.html',
  styleUrl: './toursticplaces.component.css'
})
export class ToursticplacesComponent implements OnInit {


constructor(private _touristicservice:TouristicservicesService){}


touristicplaces:any[]=[];

ngOnInit(): void {
 this._touristicservice.GetTouristicPlace().subscribe({
  next:(response)=>{this.touristicplaces=response.data}
 }) 
}
}
