import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { parsePhoneNumberFromString , PhoneNumber } from 'libphonenumber-js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private __AuthService: AuthService, private __Router: Router ) {}
 
  error: string ="";
  isLoading: boolean = false;
  
  registerForm: FormGroup = new FormGroup({ 
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, Validators.required),
    phoneNumber: new FormControl(null, [Validators.required, this.phoneNumberValidator]),
    dob: new FormControl(null, Validators.required),
    role: new FormControl(null, Validators.required), 
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required]),
  }, { validators: this.passwordMatchValidator });
 
  

  ngOnInit() {}

  onSubmit(registerForm: FormGroup) {
    this.isLoading= true;
   this.__AuthService.signup(registerForm.value).subscribe({
     next:(response)=>{
      this.isLoading = false;
      if (response.succeeded) {
        console.log('Registration successful');
        this.__Router.navigate(['/login']);
        // Optionally, you can handle successful registration here
      } else {
        // Handle errors returned by the server
        if (response.errors && response.errors.length > 0) {
          this.error = this.getErrorDescription(response.errors);
        } else {
          this.error = 'An unknown error occurred during registration.';
        }
      }
    },
    error: (error) => {
      // Handle HTTP error
      console.error('Registration failed:', error);
      this.error = 'An error occurred during registration. Please try again later.';
    }
  });
}

private getErrorDescription(errors: any[]): string {
  let errorMessages: string[] = [];
  errors.forEach(error => {
    switch (error.code) {
      case 'DuplicateUserName':
        errorMessages.push(`Username '${error.description}' is already taken.`);
        break;
      case 'DuplicateEmail':
        errorMessages.push(`Email '${error.description}' is already taken.`);
        break;
      case 'PasswordRequiresNonAlphanumeric':
        errorMessages.push('Password must contain at least one non-alphanumeric character.');
        break;
      case 'PasswordRequiresLower':
        errorMessages.push('Password must contain at least one lowercase letter.');
        break;
      case 'PasswordRequiresUpper':
        errorMessages.push('Password must contain at least one uppercase letter.');
        break;
      // Add more cases for other error types as needed
      default:
        errorMessages.push('An unknown error occurred during registration.');
        break;
    }
  });
  return errorMessages.join(' ');
}
       

  // Custom validator to check phone number format
  phoneNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const phoneNumber = control.value;
    if (!phoneNumber || phoneNumber.trim() === '') {
      return { 'required': true };
    }
    // You can add additional validation logic here, such as checking if it contains only digits
    return null;
  } 
  

   // Custom validator to check if passwords match
   passwordMatchValidator(control: AbstractControl) {
 return control.get('password')?.value
  === control.get('confirmPassword')?.value
  ? null
  : { 'mismatch': true };
   }
  
}
