import {  Injectable, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
class AuthGuards {
  constructor() {}

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated: boolean = !!localStorage.getItem('isAuthenticated') || false;
    return isAuthenticated;
  }
  canActivateChild(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   console.log(next)
    return this.canActivate(next,state);
  }
}
export const authGuards : CanActivateFn = (next,state) => {
  return inject(AuthGuards).canActivate(next,state);
};
export const authChildGuards : CanActivateChildFn = (next,state) => {
  return inject(AuthGuards).canActivateChild(next,state);
};