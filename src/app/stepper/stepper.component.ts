import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'



})


export class StepperComponent {
  isRoomsDatesCompleted: boolean = false;
  isRoomsDatesEditable: boolean = true;
  isExtrasCompleted: boolean = false;
  isExtrasEditable: boolean = false;
  isPaymentCompleted: boolean = false;
  isPaymentEditable: boolean = false;
  isConfirmingCompleted: boolean = false;
  isConfirmingEditable: boolean = false; 





}
