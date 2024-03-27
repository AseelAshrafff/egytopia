import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  showTextField: boolean = false;
  data: string[] = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  searchQuery: string = '';
  searchResults: string[] = [];
  performSearch() {
    this.showTextField = this.searchQuery.length > 0; // عرض حقل النص إذا كانت قيمة البحث غير فارغة
    this.searchResults = this.data.filter(item => item.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
}
