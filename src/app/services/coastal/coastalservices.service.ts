import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoastalservicesService {

  constructor(private _httpclient:HttpClient) { }

  GetCoastalPlace():Observable<any>{
   return this._httpclient.get(`https://localhost:7047/api/Place/GetPlacesByType?type=1`); 
  }
  
  GetCoastalPlaceID(ID:number):Observable<any>{
    return this._httpclient.get(`https://localhost:7047/api/Place/GetPlace?id=${ID}`); 
   }

}
