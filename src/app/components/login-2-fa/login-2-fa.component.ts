import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../models/logIn';
import { Authentification } from '../../services/Authentification.service';

@Component({
  selector: 'app-login-2-fa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-2-fa.component.html',
  styleUrl: './login-2-fa.component.css'
})
export class Login2FaComponent {


  login2faForm = this.fb.group({
    email: ['', Validators.required,],
    otp: ['', Validators.required,]
  })

  constructor(private fb: FormBuilder, public Authentification: Authentification) {

  }
  LogIn() {
    console.log('form data', this.login2faForm.value);
    const value = this.login2faForm.value

    console.log(value)
    if (value.email != null && value.otp != null) {
      this.Authentification.login2Fa(value.email, value.otp).subscribe({
        next: (response) => {
          console.log('sent verification code successfully', response);
          localStorage.setItem("Token", response.Token)
        },
        error: (error) => {
          console.error('Error sending verification code', error);
        }
      })
    }
    else {
      alert("Please fill all fields")
    }
  }

}
