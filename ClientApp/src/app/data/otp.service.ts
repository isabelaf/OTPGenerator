import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ValidateOTP } from "../models/validate-otp.model";

@Injectable()
export class OTPService {
  private readonly url = 'http://localhost:40502/api/OTP/';

  constructor(private http: HttpClient) { }

  validate(validateOTPModel: ValidateOTP) {
    return this.http.post(this.url + 'Validate', validateOTPModel);
  }
}