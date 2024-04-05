import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TouristicservicesService } from '../../services/touristic/touristicservices.service';
import { ITouristic } from '../../interfaces/i-touristic';

@Component({
  selector: 'app-selectedplace',
  templateUrl: './selectedplace.component.html',
  styleUrl: './selectedplace.component.css'
})
export class SelectedplaceComponent implements OnInit{

constructor(private _ActivatedRoute:ActivatedRoute, private _TouristicservicesService:TouristicservicesService){}

placeDetails:ITouristic={} as ITouristic

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
    let placeID:any  = params.get('id')

    this._TouristicservicesService.GetTouristicPlacebyId(placeID).subscribe({
      next:(response)=>{
        this.placeDetails=response;
      }
      
    })
    }
    
  })
}
}

