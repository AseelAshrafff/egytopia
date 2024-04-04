import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private _httpclient:HttpClient) {} 
   
  // GetGridImage():Observable<any>{
  //  return this._httpclient.get(``)
  // }
  GetHotel(PageNum:number):Observable<any>{
    return this._httpclient.get(`https://localhost:7047/api/Hotel/GetAllWithFiltertion?term=hotel&page=${PageNum}&limit=9`);
   };  
   GetHotelDetails(id:string):Observable<any>{
    return this._httpclient.get(`https://localhost:7047/api/Hotel/GetHotel?id= ${id}`);
   }
}
