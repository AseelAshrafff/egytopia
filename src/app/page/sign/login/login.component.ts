import { Component , OnInit } from '@angular/core';
import { AbstractControl, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor( private __AuthService: AuthService, private __Router: Router ) {}
  error: string ="";
  isLoading: boolean = false;
  registerForm: FormGroup = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
   
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
   
  });
  

  

  
  onSubmitLogin(registerForm: FormGroup) {
    this.isLoading = true;
    this.__AuthService.signin(registerForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.__AuthService.saveUserData();  
          console.log('Login successful');
          this.__Router.navigate(['/all']);
        }
      },
      error: (error) => {
        this.isLoading = false;
        if (error.status === 400) {
          // Handle 400 Bad Request error

          this.error = error.error; // Assign the error message from the response body
        } else {
          // Handle other errors
          this.error = 'An unexpected error occurred. Please try again later.';
        }
      }
    });
  }

  ngOnInit(): void {
  }
}