import { Component } from '@angular/core';
import { HotelsService } from '../../services/hotel/hotels.service';
import { Ihotel } from '../../interfaces/ihotel';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 constructor(private _hotelservice:HotelsService){
 
 }
 SearchTerm:string='';
 hotels:Ihotel[]=[];
 userName:string ='Aseel Ashraf';

//  ngOnInit(): void {
//   this._hotelservice.GetHotel(1).subscribe(
//     {next:(response)=>{console.log(response)
//     this.hotels=response;
//     console.log(this.hotels);
//     }
//     });
//   }
}

