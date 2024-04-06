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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './page/reservation/payment/payment.component';
import { ToursticplacesComponent } from './page/home/toursticplaces/toursticplaces.component';
import { TourguideComponent } from './page/freelancepages/tourguide/tourguide.component';
import { CoastalplacesComponent } from './page/home/coastalplaces/coastalplaces.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { SelectedplaceComponent } from './page/selectedplace/selectedplace.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './pipes/search.pipe';
import { EndStepComponent } from './page/reservation/end-step/end-step.component';
import { ReservationComponent } from './page/reservation/reservation.component';
import { BookingComponent } from './page/user/booking/booking.component';
import { LogoutComponent } from './page/user/logout/logout.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StepperComponent } from './stepper/stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CoastalSearchPipePipe } from './pipes/coastal-search-pipe.pipe';
import { TouristicSearchPipePipe } from './pipes/touristic-search-pipe.pipe';
import { MatIconModule } from '@angular/material/icon';
import { TourguideprofileComponent } from './page/user/tourguideprofile/tourguideprofile.component';
import { LogoutguideComponent } from './page/user/logoutguide/logoutguide.component';
import { BookingguideComponent } from './page/user/bookingguide/bookingguide.component';
import { UserexperienceComponent } from './page/user/userexperience/userexperience.component';


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
  ReservationComponent,
    PaymentComponent,
   ToursticplacesComponent,
   CoastalplacesComponent,
   TourguideComponent,
   BlanklayoutComponent,
   AuthlayoutComponent,
  SelectedplaceComponent,
    SearchPipe,
    ToursticplacesComponent,
    CoastalplacesComponent,
    TourguideComponent,
    BlanklayoutComponent,
    AuthlayoutComponent,
    SelectedplaceComponent,
    EndStepComponent,
    BookingComponent,
    LogoutComponent,
    StepperComponent,
    CoastalSearchPipePipe,
    TouristicSearchPipePipe,
    TourguideprofileComponent,
    LogoutguideComponent,
    BookingguideComponent,
    UserexperienceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
