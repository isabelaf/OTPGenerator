import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OTPService } from '../data/otp.service';
import { ValidateOTP } from '../models/validate-otp.model';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html'
})
export class ValidateOTPComponent {
  validateOTPForm = this.formBuilder.group({
    userId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
    otp: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });

  constructor(private otpService: OTPService, private formBuilder: FormBuilder) { }

  onSubmit(): void {
    const validateOTPModel = this.validateOTPForm.value as ValidateOTP;

    this.otpService.validate(validateOTPModel).subscribe({
      next: (_) => { alert('Validation is successful!'); },
      error: (_) => { alert('Validation failed!'); }
    });
  }

}
