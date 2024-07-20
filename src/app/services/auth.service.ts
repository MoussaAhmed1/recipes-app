import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 isAuthenticated: boolean = !!localStorage.getItem('isAuthenticated') || false;
  constructor() { }
  getIsAuthenticated(): boolean { return this.isAuthenticated; }
}
