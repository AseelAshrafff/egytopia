import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit{
  userName:string ='Aseel Ashraf';
  DB:string='15th February';
  phone:number=+201000111010;
  location:string='Egypt';

  constructor(){}
  ngOnInit(): void {}
}
