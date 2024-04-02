import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 export class TourguideService {

  constructor(private _httpclient:HttpClient) { }

  GetTourGuide():Observable<any>{
   return this._httpclient.get(``);
  }
}
