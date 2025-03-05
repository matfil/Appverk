import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { authGuard, loginGuard } from './auth.guard';

export const routes: Routes = [
    {path:'',component:WelcomeComponent},
    {path:'login', component:LoginComponent, canActivate: [loginGuard]},
    {path:'home', component:HomeComponent, canActivate: [authGuard]}
];
