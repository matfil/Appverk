import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  user:UserModel = new UserModel();
  subscription?:Subscription;

  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
    this.subscription = this.userService.getUser().subscribe(user => this.user = user);
  }
  
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
