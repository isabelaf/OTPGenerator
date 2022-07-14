import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-otp',
  templateUrl: './generate-otp.component.html'
})
export class GenerateOTPComponent implements OnDestroy {
  userForm = this.formBuilder.group({
    userId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
  });
  intervalId: NodeJS.Timer | null = null

  canSubmitUserForm = true;
  showRemainingValabilityTime = false;
  userId = '';
  otp = '';
  remainingValabilityTime = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnDestroy(): void {
    if (this.intervalId != null)
      clearInterval(this.intervalId);
  }

  onUserFormSubmit(): void {
    this.userId = this.userForm.controls['userId'].value ?? '';
    this.canSubmitUserForm = false;
    this.showRemainingValabilityTime = true;
    this.generateOTP();
    this.startCountdownTimer();
  }

  private generateOTP(): void {
    var userKey = this.computeUserKey();
    var timeKey = new Date();

    this.otp = this.computeOTP(userKey, timeKey);
    this.remainingValabilityTime = 30 - new Date().getSeconds() % 30;
  }

  private computeUserKey(): number {
    var userKey = 0;
    for (var i = 0; i < this.userId.length; i++) {
      userKey += this.userId.charCodeAt(i);
    }
    return userKey;
  }

  private computeOTP(userKey: number, timeKey: Date): string {
    return ('0' + ((timeKey.getFullYear() + userKey) % 100)).slice(-2) +
      ('0' + ((timeKey.getDate() + userKey) % 100)).slice(-2) +
      ('0' + ((Math.floor(timeKey.getSeconds() / 30) + userKey) % 100)).slice(-2);
  }

  private startCountdownTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.remainingValabilityTime === 0) this.generateOTP();
      this.remainingValabilityTime -= 1;
    }, 1000);
  }
}
