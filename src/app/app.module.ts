import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './page/hotels/hotels/hotels.component';
import { HoteldetailsComponent } from './page/hotels/hoteldetails/hoteldetails.component';
import { LoginComponent } from './page/sign/login/login.component';
import { RegisterComponent } from './page/sign/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { FreelanceComponent } from './page/freelancepages/freelance/freelance.component';
import { ExperienceComponent } from './page/experiencepages/experience/experience.component';
import { FavoritesComponent } from './page/user/favorites/favorites.component';
import { ProfileComponent } from './page/user/profile/profile.component';
import { NotificationsComponent } from './page/user/notifications/notifications.component';
import { FiltersComponent } from './page/home/filters/filters.component';
import { CardsComponent } from './page/home/cards/cards.component';
import { UpperHotelComponent } from './page/hotels/upper-hotel/upper-hotel.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelsCardsComponent } from './page/hotels/hotels-cards/hotels-cards.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HotelsComponent,
    HoteldetailsComponent,
    NotfoundComponent,
    FreelanceComponent,
    ExperienceComponent,
    FavoritesComponent,
    ProfileComponent,
    NotificationsComponent,
    FiltersComponent,
    CardsComponent,
    UpperHotelComponent,
    HotelsCardsComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
