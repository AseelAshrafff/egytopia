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
  {
    // Retrieve token from local storage
    const encodedToken = localStorage.getItem('token');
    // Check if token exists
    if (encodedToken) {
      // Decode token
      const decodedToken: object = jwtDecode(encodedToken);
      // Save user data
      this.userData = decodedToken;
      console.log(this.userData);
    } else {
      console.error('Token not found in local storage.');
    }
  }
 }
 signup(userData: object): Observable<any> {
  return this._HttpClient.post(`${this.baseserverUrl}/Register`, userData);
}
signin(userData: object): Observable<any> {
  return this._HttpClient.post(`${this.baseserverUrl}/Login`, userData);
}
}
