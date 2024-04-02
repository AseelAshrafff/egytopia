import { Component, OnInit } from '@angular/core';
import { CoastalservicesService } from '../../../services/coastal/coastalservices.service';

@Component({
  selector: 'app-coastalplaces',
  templateUrl: './coastalplaces.component.html',
  styleUrl: './coastalplaces.component.css'
})
export class CoastalplacesComponent implements OnInit {



 constructor(private _coastalservice:CoastalservicesService) {}


coastalplaces:any[]=[];


 ngOnInit(): void {  
  this. _coastalservice.GetCoastalPlace().subscribe({
    next:(response)=>{this.coastalplaces=response.data}
  })
 }
}
