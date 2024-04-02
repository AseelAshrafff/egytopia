import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TouristicservicesService {

  constructor(private _httpclient:HttpClient) {}

  GetTouristicPlace():Observable<any>{
   return this._httpclient.get(``);
  }

}
