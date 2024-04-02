import { CanActivateFn ,ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

Injectable({
  providedIn: 'root'
})


export const authGuard: CanActivateFn = (route, state) => {
  return true;
  
};