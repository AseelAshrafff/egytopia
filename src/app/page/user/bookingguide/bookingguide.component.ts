import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookingguide',
  templateUrl: './bookingguide.component.html',
  styleUrl: './bookingguide.component.css'
})
export class BookingguideComponent implements OnInit {
  guideName:string ='Wael Ahmed';
  guideDB:string='15th November';
  guidephone:number=+201000111010;
  guidelocation:string='Egypt';

  constructor(){}
  ngOnInit(): void {}
}
