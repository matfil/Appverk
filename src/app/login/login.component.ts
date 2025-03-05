import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { createEmailValidator } from '../email.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = this.fb.group(
    {
      email: ['', Validators.compose([Validators.required, createEmailValidator()])],
      password: ['', Validators.required],
    }
  );

  constructor(private fb: FormBuilder, private router: Router) { }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  onSubmit() {
    console.log('onSubmit', this.form.value);
    if (this.form.valid) {
      if (this.form.value.email === 'praca@appverk.com' && this.form.value.password === 'recruitment') {
        const token = this.generateRandomString(42);//Why 42? Because it's the answer to the Ultimate Question of Life, the Universe, and Everything
        window.localStorage.setItem('token', token);
        console.log('Login successful');
        this.router.navigate(['/home']);
      }
      alert('Invalid credentials');
      return;
    }
    console.log('Invalid form');
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
