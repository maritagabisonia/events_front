import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors }
  from '@angular/forms';
import { Authentification } from '../../services/Authentification.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: User = new User();
  validOtp: boolean = false;

  userForm = this.fb.group({
    UserName: ['', this.validateUserName],
    LastName: ['', Validators.required],
    Email: ['', Validators.required],
    PersonId: ['', Validators.required],
    Password: ['', Validators.required],
    Roles: [['user']]
  });



  constructor(private fb: FormBuilder, public Authentification: Authentification) {

  }
  validateUserName(control: AbstractControl): ValidationErrors | null {
    return control.value.length < 5 ? { wrongUserName: { value: control.value } } : null;

  }
  saveUser() {

    if (this.userForm.valid) {
      Object.assign(this.user, this.userForm.value);
      console.log(this.user);
      this.Authentification.addUser(this.user).subscribe({
        next: (response) => {
          console.log('user added successfully', response);
        },
        error: (error) => {
          console.error('Error adding user', error);
        }
      })
    } else {
      console.log('Form is not valid');
    }
  }


}


