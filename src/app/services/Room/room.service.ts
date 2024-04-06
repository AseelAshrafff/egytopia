import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IReservation } from '../../IReservation';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

 
   
  constructor(private _HttpClient:HttpClient) { }
  

 

  bookRoom(reservation: any): Observable<any> {
    return this._HttpClient.post(`https://localhost:7047/api/BookingRoom/CreateRoomBooking`, reservation);
  }
  getRooms(id:string):Observable<any>{
    return this._HttpClient.get(`https://localhost:7047/api/Room/GetRoomsByHotel/${id}`);

  }

}
