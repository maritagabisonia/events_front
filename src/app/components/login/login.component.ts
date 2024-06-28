import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../models/logIn';
import { Authentification } from '../../services/Authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm = this.fb.group({
    email: ['', Validators.required,],
    password: ['', Validators.required,]
  })

  login: Login = new Login()
  constructor(private fb: FormBuilder, public Authentification: Authentification, private router: Router) {

  }
  saveLogIn() {
    console.log('form data', this.loginForm.value);
    Object.assign(this.login, this.loginForm.value);

    this.Authentification.login(this.login).subscribe({
      next: (response) => {
        console.log('sent verification code successfully', response);
      },
      error: (error) => {
        console.error('Error sending verification code', error);
      }
    })

    this.router.navigate(['/login-2Fa']);
  }

}
