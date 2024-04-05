import { Component, OnInit } from '@angular/core';
import { TouristicservicesService } from '../../../services/touristic/touristicservices.service';
import { ITouristic } from '../../../interfaces/i-touristic';

@Component({
  selector: 'app-toursticplaces',
  templateUrl: './toursticplaces.component.html',
  styleUrl: './toursticplaces.component.css'
})
export class ToursticplacesComponent implements OnInit {


constructor(private _touristicservice:TouristicservicesService){}

term:string=''
touristicplaces:ITouristic[]=[];

ngOnInit(): void {
 this._touristicservice.GetTouristicPlace().subscribe({
  next:(response)=>{console.log(response)
    this.touristicplaces=response}
 }) 
}
}
