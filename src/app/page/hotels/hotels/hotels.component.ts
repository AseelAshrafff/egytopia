import { Component } from '@angular/core';
import { Hotels } from '../../../hotels';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})

export class HotelsComponent {

    hotels: Hotels[] = [

      {ID:10,Name:'Saqara',Address:'26th Galala Road,Cairo',Number:+35788934,Description:''}
    ]
}
