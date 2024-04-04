import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userName:string ='Aseel Ashraf';
  DB:string='15th February';
  phone:number=+201000111010;
  location:string='Egypt';

  constructor(){}
  ngOnInit(): void {}
}
