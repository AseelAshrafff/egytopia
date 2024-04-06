import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourguideprofile',
  templateUrl: './tourguideprofile.component.html',
  styleUrl: './tourguideprofile.component.css'
})
export class TourguideprofileComponent implements OnInit{
  guideName:string ='Wael Ahmed';
  guideDB:string='15th November';
  guidephone:number=+201000111010;
  guidelocation:string='Egypt';

  constructor(){}
  ngOnInit(): void {}
}
