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
import {UpperHotelComponent} from './page/selectedplace/upper-hotel/upper-hotel.component';
import {HotelsCardsComponent}from './page/selectedplace/hotels-cards/hotels-cards.component'
import { PaymentComponent } from './page/reservation/payment/payment.component';
import { ReservationComponent } from './page/reservation/reservation.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { TourguideComponent } from './page/freelancepages/tourguide/tourguide.component';
import { CoastalplacesComponent } from './page/home/coastalplaces/coastalplaces.component';
import { ToursticplacesComponent } from './page/home/toursticplaces/toursticplaces.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { authGuard } from './guards/auth.guard';

import { SelectedplaceComponent } from './page/selectedplace/selectedplace.component';
import { EndStepComponent } from './page/reservation/end-step/end-step.component';
import { LogoutComponent } from './page/user/logout/logout.component';
import { BookingComponent } from './page/user/booking/booking.component';





const routes: Routes = [
    //layouts
  //------------------- blank component ------------------------------------------
    {path:'', component:BlanklayoutComponent,
     children:[
      { path: '', redirectTo: '/register', pathMatch: 'full' },
    {path:'', component:HomeComponent, children:[
      {path:'', redirectTo:'home', pathMatch:'full'},



      {path:'hotel',canActivate:[authGuard] , component:HotelsComponent},
      {path:'touristicplaces', canActivate:[authGuard] , component:ToursticplacesComponent},
      {path:'coastalplaces', canActivate:[authGuard] ,component:CoastalplacesComponent},

    ]},
    {path:'freelance', canActivate:[authGuard] ,component:FreelanceComponent},
    {path:'tourguide', canActivate:[authGuard] ,component:TourguideComponent},
    {path:'hoteldetails/:id', canActivate:[authGuard] ,component:HoteldetailsComponent},
    {path:'favorite' , canActivate:[authGuard] ,component:FavoritesComponent},
    {path:'profile' , canActivate:[authGuard] ,component:ProfileComponent},
    {path:'logout', canActivate:[authGuard] ,component:LogoutComponent},
    {path:'booking', canActivate:[authGuard] ,component:BookingComponent},
    {path:'experience', canActivate:[authGuard] ,component:ExperienceComponent},
    {path:'payment', canActivate:[authGuard] ,component:PaymentComponent},
    {path:'endstep', canActivate:[authGuard] ,component:EndStepComponent},

  ]},
  //----------------------------- auth layout ---------------------------------------------
  {path:'', component:AuthlayoutComponent,children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
  ]},
// ------------------------------ not found---------------------------------------------

  // {path:'**', component:NotfoundComponent},
  {path:'selectedplace', canActivate:[authGuard] ,component:SelectedplaceComponent},
  {path:'hotels-cards', canActivate:[authGuard] ,component:HotelsCardsComponent},
  {path:'upper-hotel', canActivate:[authGuard] ,component: UpperHotelComponent },
  {path:'payment', canActivate:[authGuard] ,component: PaymentComponent},
 {path:'reservation', canActivate:[authGuard] ,component: ReservationComponent },


  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
