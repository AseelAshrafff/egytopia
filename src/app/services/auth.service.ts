import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {}
 userData:object = [];  

 saveUserData()
 {
  //token local - decode - 
  let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
  let decodedToken = jwtDecode(encodedToken);
  this.userData = decodedToken;
  console.log(this.userData);
 }
  signup(userData:object):Observable<any>
  {
    return this._HttpClient.post(`https://reqres.in/api/register`,userData)
  }
}
