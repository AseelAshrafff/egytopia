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
import { NotificationsComponent } from './page/user/notifications/notifications.component';
import { ProfileComponent } from './page/user/profile/profile.component';
import {UpperHotelComponent} from './page/hotels/upper-hotel/upper-hotel.component';
import {HotelsCardsComponent}from './page/hotels/hotels-cards/hotels-cards.component'
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'hotel',component:HotelsComponent},
  {path:'hoteldetails', component:HoteldetailsComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'freelance', component:FreelanceComponent},
  {path:'favorite', component:FavoritesComponent},
  {path:'notification', component:NotificationsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'hotels-cards', component:HotelsCardsComponent},
  {path:'upper-hotel', component: UpperHotelComponent },
  {path:'payment', component: PaymentComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
