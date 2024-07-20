import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isAuthenticated = !!(localStorage.getItem('isAuthenticated')) || false;
  onLogin(){
    localStorage.setItem('isAuthenticated','true');
    this.isAuthenticated = true;
    console.log("logged in");
  }
  onLogout(){
    localStorage.removeItem('isAuthenticated');
    this.isAuthenticated = false;
    console.log("logged out");
  }
}
