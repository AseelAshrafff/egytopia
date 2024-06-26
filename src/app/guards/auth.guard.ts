import { CanActivateFn ,ActivatedRouteSnapshot, RouterStateSnapshot,UrlTree, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { AuthService } from '../services/guard/auth.service';



export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localData = localStorage.getItem('token');
 

  if (localData !== null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};