import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  
  constructor(private _HttpClient:HttpClient) { }

  GetImg():Observable<any>
  {
    return this._HttpClient.get(``)
  }
 
}
 