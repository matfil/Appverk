import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
constructor(private router:Router) { }

  logout(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  loggedIn(){
    return window.localStorage.getItem('token');
  }
}
