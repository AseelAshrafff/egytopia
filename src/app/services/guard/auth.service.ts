import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {}
 
  baseserverUrl = 'https://localhost:7047/api/ApplicationUsre'

 userData:object = [];  

 saveUserData()
 {
  //token local - decode - 
  let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
  let decodedToken:object = jwtDecode(encodedToken);
  this.userData = decodedToken;
  console.log(this.userData);
 }
 signup(userData: object): Observable<any> {
  return this._HttpClient.post(`${this.baseserverUrl}/Register`, userData);
}
signin(userData: object): Observable<any> {
  return this._HttpClient.post(`${this.baseserverUrl}/Login`, userData);
}
}
