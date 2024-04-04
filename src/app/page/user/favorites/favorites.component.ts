import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  userName:string ='Aseel Ashraf';
  DB:string='15th February';
  phone:number=+201000111010;
  location:string='Egypt';

  constructor(){}
  ngOnInit(): void {}

}
