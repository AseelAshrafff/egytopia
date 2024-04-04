import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-cards',
  templateUrl: './hotels-cards.component.html',
  styleUrl: './hotels-cards.component.css'
})
export class HotelsCardsComponent {
  constructor(private router: Router) {}
  navigateToHotelsDetails() {
    this.router.navigate(['/hoteldetails']);
  }


}
