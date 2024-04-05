import { Component, OnInit } from '@angular/core';
import { CoastalservicesService } from '../../../services/coastal/coastalservices.service';
import { ICoastal } from '../../../interfaces/i-coastal';

@Component({
  selector: 'app-coastalplaces',
  templateUrl: './coastalplaces.component.html',
  styleUrl: './coastalplaces.component.css'
})
export class CoastalplacesComponent implements OnInit {



 constructor(private _coastalservice:CoastalservicesService) {}


coastalplaces:ICoastal[]=[];
Term:string=''

 ngOnInit(): void {  
  this. _coastalservice.GetCoastalPlace().subscribe({
    next:(response)=>{this.coastalplaces=response}
  })
 }
}
