import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TouristicservicesService {

  constructor(private _httpclient:HttpClient) {}

  GetTouristicPlace():Observable<any>{
   return this._httpclient.get(`https://localhost:7047/api/Place/GetPlacesByType?type=0`);
  }
  GetTouristicPlacebyId(id:string):Observable<any>{
    return this._httpclient.get(`https://localhost:7047/api/Place/GetPlace?id=${id}`);
  }

}
