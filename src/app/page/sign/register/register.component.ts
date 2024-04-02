import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { parsePhoneNumberFromString , PhoneNumber } from 'libphonenumber-js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/guard/auth.service';
@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private __AuthService: AuthService, private __Router: Router ) {}
 

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, Validators.required),
    phoneNumber: new FormControl(null, [Validators.required, this.phoneNumberValidator]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required]), // Validators for confirm password
  }, { validators: this.passwordMatchValidator });
  

  ngOnInit() {}

  onSubmit(registerForm: FormGroup) {
   this.__AuthService.signup(registerForm.value).subscribe({
     next:(response)=>{
       if(response.message == "success"){
        //localStorage.setItem('userToken', response.token);
        this.__AuthService.saveUserData();
        this.__Router.navigate(['/signin']);
       }
       else{
         alert(response.message);
       }
     }
   })
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
