import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

@Component({
  selector: 'app-register',
  templateUrl:'./register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( ) {}

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, Validators.required),
    phoneNumber: new FormControl(null, {
      validators: [Validators.required, this.phoneValidator.bind(this)],
      updateOn: 'blur'
    }),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required]), // Validators for confirm password
  }, { validators: this.passwordMatchValidator });
  

  ngOnInit() {}

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    // Process the form data further, like sending it to the server
    console.log(this.registerForm.value);
  }

  // Custom validator to check phone number format
  phoneValidator(control: { value: any }) {
    const phoneNumber = control.value;
    if (phoneNumber == null) {
      return { 'invalidPhoneNumber': true };
    }
    const phoneNumberString = phoneNumber.toString();
    const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumberString);
    if (!parsedPhoneNumber || !parsedPhoneNumber.isValid()) {
      return { 'invalidPhoneNumber': true };
    }
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
