import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userexperience',
  templateUrl: './userexperience.component.html',
  styleUrl: './userexperience.component.css'
})
export class UserexperienceComponent implements OnInit{
  userName:string ='Aseel Ashraf';
  DB:string='15th February';
  phone:number=+201000111010;
  location:string='Egypt';

  constructor(){}
  ngOnInit(): void {}
}
