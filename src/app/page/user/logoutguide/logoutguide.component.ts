import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logoutguide',
  templateUrl: './logoutguide.component.html',
  styleUrl: './logoutguide.component.css'
})
export class LogoutguideComponent implements OnInit {
  guideName:string ='Wael Ahmed';
  guideDB:string='15th November';
  guidephone:number=+201000111010;
  guidelocation:string='Egypt';

  constructor(){}
  ngOnInit(): void {}
}
