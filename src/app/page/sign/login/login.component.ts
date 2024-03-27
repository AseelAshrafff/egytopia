import { Component , OnInit } from '@angular/core';
import { AbstractControl, FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor( ) {}

  registerForm: FormGroup = new FormGroup({
   
    email: new FormControl(null, [Validators.required, Validators.email]),
   
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
   
  });
  

  

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    // Process the form data further, like sending it to the server
    console.log(this.registerForm.value);
  }











  
  
  
  
  
  ngOnInit(): void {
   
  }

}
