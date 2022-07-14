import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OTPService } from './data/otp.service';
import { ValidateOTPComponent } from './validate-otp/validate-otp.component';
import { GenerateOTPComponent } from './generate-otp/generate-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ValidateOTPComponent,
    GenerateOTPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    OTPService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
