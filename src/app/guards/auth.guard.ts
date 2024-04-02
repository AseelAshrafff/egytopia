import { CanActivateFn ,ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = localStorage.getItem('token');
  debugger;

  if (localData) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};