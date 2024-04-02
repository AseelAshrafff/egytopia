import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/sign/login/login.component';
import { RegisterComponent } from './page/sign/register/register.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HotelsComponent } from './page/hotels/hotels/hotels.component';
import { HoteldetailsComponent } from './page/hotels/hoteldetails/hoteldetails.component';
import { NotfoundComponent } from './page/notfound/notfound.component';
import { ExperienceComponent } from './page/experiencepages/experience/experience.component';
import { FreelanceComponent } from './page/freelancepages/freelance/freelance.component';
import { FavoritesComponent } from './page/user/favorites/favorites.component';
import { ProfileComponent } from './page/user/profile/profile.component';
import {UpperHotelComponent} from './page/hotels/upper-hotel/upper-hotel.component';
import {HotelsCardsComponent}from './page/hotels/hotels-cards/hotels-cards.component'
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './page/reservation/reservation.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { TourguideComponent } from './page/freelancepages/tourguide/tourguide.component';
import { CoastalplacesComponent } from './page/home/coastalplaces/coastalplaces.component';
import { ToursticplacesComponent } from './page/home/toursticplaces/toursticplaces.component';
import { AllComponent } from './page/home/all/all.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';


const routes: Routes = [
    //layouts
  //------------------- blank component ------------------------------------------
    {path:'', component:BlanklayoutComponent,
     children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'', component:HomeComponent, children:[
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'all', component:AllComponent},
      {path:'hotel',component:HotelsComponent},
      {path:'touristicplaces', component:ToursticplacesComponent},
      {path:'coastalplaces', component:CoastalplacesComponent},
    ]},
    {path:'freelance', component:FreelanceComponent},
    {path:'tourguide', component:TourguideComponent},
    {path:'hoteldetails', component:HoteldetailsComponent},
    {path:'favorite', component:FavoritesComponent},
    {path:'profile', component:ProfileComponent},
    {path:'experience', component:ExperienceComponent},
    {path:'payment', component:PaymentComponent},
  ]},
  //----------------------------- auth layout ---------------------------------------------
  {path:'', component:AuthlayoutComponent,children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
  ]},
// ------------------------------ not found---------------------------------------------
  {path:'**', component:NotfoundComponent},
  {path:'hotels-cards', component:HotelsCardsComponent},
  {path:'upper-hotel', component: UpperHotelComponent },
  {path:'payment', component: PaymentComponent},
 {path:'reservation', component: ReservationComponent },
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
