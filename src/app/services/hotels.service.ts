import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private _httpclient:HttpClient) {} 
   
  GetGridImage():Observable<any>{
   return this._httpclient.get(``)
  }
  GetHotel():Observable<any>{
    return this._httpclient.get(``)
   }
 
}
