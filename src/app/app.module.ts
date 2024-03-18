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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HotelsComponent,
    HoteldetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
