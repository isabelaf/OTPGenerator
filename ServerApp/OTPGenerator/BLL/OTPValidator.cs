namespace OTPGenerator.BLL
{
    public class OTPValidator : IOTPValidator
    {
        private readonly IOTPGenerator otpGenerator;

        public OTPValidator(IOTPGenerator otpGenerator)
        {
            this.otpGenerator = otpGenerator;
        }

        public bool ValidateOTP(string userId, string otp)
        {
            return otp == otpGenerator.GenerateOTP(userId);
        }
    }
}
